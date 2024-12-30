const mySignupSaga = [
  takeLatest(types.POST_SIGNUP_PENDING, signupSaga),
  takeLatest(types.SIGNUP_LOGOUT, logoutUserSaga),
  takeLatest(types.POST_REDIRECT_URL_PENDING, setRiderctUrl),
];

export default mySignupSaga;
