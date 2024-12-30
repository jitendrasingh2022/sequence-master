import UserPool from "../UserPool";
import { post, get } from "./axiosRequest";
import * as AmazonCognitoIdentity from "amazon-cognito-identity-js";
import * as AWS from "aws-sdk/global";
import { COUNTRY_CODE } from "../constant/constant";
import { getApiUrl } from "../config";

export const signup = async (data) => {
  const { password, firstName, lastName, email, mobile } = data;
  return new Promise((resolve, reject) => {
    UserPool.signUp(
      mobile,
      password,
      [
        { Name: "name", Value: `${firstName} ${lastName}` },
        { Name: "email", Value: email },
        { Name: "given_name", Value: firstName },
        { Name: "family_name", Value: lastName },
        { Name: "phone_number", Value: COUNTRY_CODE + mobile },
      ],
      null,
      async (error, result) => {
        if (error) {
          reject(error);
        } else {
          AWS.config.region = "us-east-1";
          resolve(result);
        }
      }
    );
  });
};

export const userSignup = async (data) => {
  const url = `${process.env.REACT_APP_BASEURL}/api/signup/signup`;
  try {
    return await post(url, data, {
      headers: {
        Authorization: localStorage.getItem("id_token"),
      },
    });
  } catch (err) {
    return err;
  }
};

export const addOtpSignup = async (mobile, otp) => {
  const userDataservice = {
    Username: mobile,
    Pool: UserPool,
  };
  return new Promise((resolve, reject) => {
    const cognitoUser = new AmazonCognitoIdentity.CognitoUser(userDataservice);
    cognitoUser.confirmRegistration(otp, true, (err, result) => {
      if (result) {
        resolve(result);
      } else {
        reject(err);
      }
    });
  });
};

export const validateMobileSignup = async (mobile) => {
  const url = `${
    getApiUrl().userProdUrl
  }/api/signup/validatephonenumber?phonenumber=${mobile} `;
  try {
    return await get(url, {
      headers: {
        Authorization: localStorage.getItem("id_token"),
      },
    });
  } catch (err) {
    return { err };
  }
};

//Verify mobile
export const verifymobile = async (mobile) => {
  try {
    const userDataservice = {
      Username: mobile,
      Pool: UserPool,
    };
    return new Promise((resolve, reject) => {
      const cognitoUser = new AmazonCognitoIdentity.CognitoUser(
        userDataservice
      );
      cognitoUser.forgotPassword({
        onSuccess: function (data) {
          resolve(data);
        },
        onFailure: function (err) {
          reject(err);
        },
      });
    });
  } catch (error) {
    return error;
  }
};

//Update Onboarding
export const updateOnboarding = async ({ data }) => {
  const url = `${getApiUrl().userApiUrl}/UpdateUserDetails`;
  try {
    return await post(url, data, {
      headers: {
        Authorization: localStorage.getItem("id_token"),
      },
    });
  } catch (err) {
    return err;
  }
};

// Resend Otp Code
export const resendOtp = async (mobile) => {
  try {
    const userDataservice = {
      Username: mobile,
      Pool: UserPool,
    };
    return new Promise((resolve, reject) => {
      const cognitoUser = new AmazonCognitoIdentity.CognitoUser(
        userDataservice
      );
      cognitoUser.resendConfirmationCode((err, result) => {
        if (err) {
          reject(err);
        }
        resolve(result);
      });
    });
  } catch (error) {
    return error;
  }
};

// Reset Password
export const resetPassword = async (mobile, otp, password) => {
  try {
    const userDataservice = {
      Username: mobile,
      Pool: UserPool,
    };
    return new Promise((resolve, reject) => {
      const cognitoUser = new AmazonCognitoIdentity.CognitoUser(
        userDataservice
      );
      cognitoUser.confirmPassword(otp, password, {
        onSuccess(result) {
          resolve(result);
        },
        onFailure(err) {
          reject(err);
        },
      });
    });
  } catch (error) {
    return error;
  }
};
