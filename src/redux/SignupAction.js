export function* signupSaga({ firstName, lastName, email, password }) {
  console.log(
    "firstName,lastName,email, password",
    firstName,
    lastName,
    email,
    password  
  );
  try {
    const response = yield call(signup, firstName, lastName, email, password);
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
      signupSuccess({
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
