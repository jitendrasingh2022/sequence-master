import { call, put, takeLatest } from "redux-saga/effects";
import { loginSuccess, setRiderctUrls } from "../loginAction";
import { login, signOut } from "../../service/LoginService";
import { types } from "../types";
import * as loginAction from "../loginAction";
const loginError = (errorObject) => {
  return errorObject.response ? errorObject.response : errorObject;
};

export function* loginSaga({ userName, password }) {
  console.log("userName, password", userName, password);
  try {
    const response = yield call(login, userName, password);
    const { idToken, accessToken, error } = response;
    // if (!idToken || !accessToken) throw loginError(error);
    localStorage.setItem("mobile", userName);
    localStorage.setItem("access_token", accessToken);
    localStorage.setItem("id_token", idToken);
    // if (!data && status !== 200 && response) throw apiError(response);
    // sessionStorage.setItem("id", data.response.id);
    // sessionStorage.setItem("token", data.response.token);
    // sessionStorage.setItem("account_type", data.response.account_type);
    // sessionStorage.setItem("email", data.response.email);
    yield put(
      loginSuccess({
        userSuccess: true,
        isOnboarded: "",
        loginPage: "",
        userInfo: {},
      })
    );
  } catch (err) {
    console.log(err);
  }
}
// export function* loginRequest({ userName, password, Session }) {
//   console.debug("loginRequest");
//   try {
//     if (!userName || !password) throw loginError({});
//     const response = Session;
//     // ? yield call(sendLoginOTP, userName, password, Session)
//     yield call(login, userName, password);
//     const { idToken, accessToken, error } = response;
//     console.log(response);
//     if (Session && response?.data?.Session) {
//       yield put(loginAction.loginFailure(response?.data));
//       return;
//     }
//     if (Session && response.error) {
//       yield put(loginAction.loginFailure(response.error));
//       return;
//     }
//     if (!idToken || !accessToken) throw loginError(error);
//     localStorage.setItem("mobile", userName);
//     localStorage.setItem("access_token", accessToken);
//     localStorage.setItem("id_token", idToken);
//     const {
//       data,
//       status,
//       error: userError,
//     } = yield call(getUserDetails, userName);
//     if (status !== 200 || userError) throw loginError(userError);
//     let isOnboarded = false;
//     if (status === 200 && data) {
//       const {
//         user: {
//           userId,
//           organizationId,
//           firstName,
//           jobTitle,
//           jobTitleId,
//           organization,
//           divisionId,
//           profileImage,
//           privileges,
//           product,
//           signatureUrl,
//         },
//         responseMessages: { responseCode },
//       } = data;
//       if (responseCode === "HBNG404" && !organizationId && !userId) {
//         localStorage.removeItem("access_token", accessToken);
//         localStorage.removeItem("id_token", idToken);
//         throw loginError({
//           code: responseCode,
//           message: "User was not created successfully !!",
//         });
//       }
//       //Product ID is not mapped
//       if (product && product.length < 1) {
//         localStorage.removeItem("access_token", accessToken);
//         localStorage.removeItem("id_token", idToken);
//         throw loginError({
//           code: responseCode,
//           message: "Product ID is not mapped successfully !!",
//         });
//       }

//       //Setting values in local storage
//       localStorage.setItem("userInfo", JSON.stringify(data.user));
//       localStorage.setItem(
//         "privileges",
//         JSON.stringify(getAllPrivilege(privileges))
//       );
//       localStorage.setItem(
//         "serviceType",
//         product?.length === 1 ? product[0]?.key : ""
//       );
//       localStorage.setItem("userId", userId);
//       localStorage.setItem("loginOrganizationId", organizationId);
//       localStorage.setItem("loginOrganizationName", organization);
//       localStorage.setItem("orgId", organizationId);
//       localStorage.setItem("orgName", organization);
//       localStorage.setItem("divisionId", divisionId);
//       localStorage.setItem("name", firstName);
//       // localStorage.setItem("firstName", ${firstName});
//       localStorage.setItem("companyName", organization);
//       localStorage.setItem("profileImage", profileImage);
//       localStorage.setItem("signatureUrl", signatureUrl);

//       if (jobTitle || jobTitleId || organizationId) isOnboarded = true;
//       localStorage.setItem("isOnboarded", isOnboarded);
//       const userPage = userType.USER_PAGE;
//       yield put(
//         userAction.getUserDetailsSuccess({
//           userPage,
//           data,
//         })
//       );
//     }
//     yield call(setCurrentUser, {
//       idToken,
//       accessToken,
//       tokenType: "id",
//       isOnboarded,
//     });
//   } catch (error) {
//     localStorage.removeItem("mobile");
//     localStorage.removeItem("access_token");
//     localStorage.removeItem("id_token");
//     if (error && error.message && error.code === "UserNotConfirmedException") {
//       error.message = "Incorrect username or password.";
//     }
//     const data =
//       error && error.message && error.code
//         ? { code: error.code, message: error.message }
//         : { message: error || "Login Failed" };
//     yield put(loginAction.loginFailure(data));
//   }
// }

export function* logoutUserSaga() {
  const loginPage = types.LOGINPAGE;
  try {
    console.log("Check...");
    const res = yield call(signOut);
    if (res === "success") {
      yield put(setRiderctUrls(""));
      const dtaKey = [
        "columnVisibility",
        "columnVisibilityKudus",
        "columnVisibilityReprimnd",
        "columnVisibilityViolation",
        "columnVisibilityAction",
      ];
      const dataval = dtaKey?.map((val) => {
        return localStorage.getItem(val);
      });

      localStorage.clear();

      const dataval2 = dtaKey?.map((val, index) => {
        return localStorage.setItem(val, dataval[index]);
      });

      yield put(
        loginSuccess({
          userSuccess: false,
          loginPage,
          userInfo: {},
        })
      );
    }
  } catch (error) {
    console.log(error);
  }
}

export function* setRiderctUrl(url) {
  yield put(loginAction.setRiderctUrls(url));
}

const myLoginSaga = [
  takeLatest(types.POST_LOGIN_PENDING, loginSaga),
  takeLatest(types.lOGIN_LOGOUT, logoutUserSaga),
  takeLatest(types.POST_REDIRECT_URL_PENDING, setRiderctUrl),
];

export default myLoginSaga;
