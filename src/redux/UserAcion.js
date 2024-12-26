import { Usertype } from "./UserType";

export const Userdetails = (userName, password) => ({
  type: Usertype.GET_USERDETAIL_PENDING,
  userName,
  password,
});

export const UserdetailsSuccess = (data) => ({
  type: types.POST_LOGIN_SUCCESS,
  data,
});

export const loginFailure = (error) => ({
  type: types.POST_LOGIN_FAILURE,
  error,
});

export const setRiderctUrls = (pathName) => ({
  type: types.POST_REDIRECT_URL_PENDINGSUCCESS,
  pathName,
});

// logout user
export const logoOutUser = () => ({
  type: types.lOGIN_LOGOUT,
});

export const redirectUrlRequest = (pathName) => ({
  type: types.POST_REDIRECT_URL_PENDING,
  pathName,
});
