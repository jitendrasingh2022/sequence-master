import { types } from "../SignupType";
import { API_STATUS } from "../constant";

const initialState = {
  flow: "signup",
  userSuccess: false,
  userInfo: {},
  isError: false,
  isLoading: false,
  isOnboarded: false,
  error: {},
};

export const signupReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.POST_SIGNUP_PENDING:
      return {
        ...state,
        status: API_STATUS.PENDING,
        isError: false,
        isLoading: true,
        error: {},
      };
    case types.POST_SIGNUP_SUCCESS:
      return {
        ...state,
        status: API_STATUS.SUCCESS,
        ...action.data,
        isError: false,
        isLoading: false,
        flow: "login",
      };
    case types.POST_SIGNUP_FAILURE:
      return {
        ...state,
        status: API_STATUS.FAILURE,
        userSuccess: false,
        isError: true,
        isLoading: false,
        error: { ...action.error },
        userInfo: {},
      };
    default:
      return state;
  }
};
