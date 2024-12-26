import * as AmazonCognitoIdentity from "amazon-cognito-identity-js";
import * as AWS from "aws-sdk/global";
import UserPool from "./UserPool";

let currentCognitoUser = {};
let sessionUserAttributes = "";

function asyncAuthenticateUser(authenticationDetails, userData) {
  currentCognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
  return new Promise(function (resolve, reject) {
    currentCognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: resolve,
      onFailure: reject,
      newPasswordRequired: function (userAttributes, requiredAttributes) {
        delete userAttributes.phone_number_verified;
        delete userAttributes.email_verified;
        delete userAttributes.name;
        delete userAttributes.phone_number;
        delete userAttributes.email;

        sessionUserAttributes = userAttributes;
        reject({
          code: "NEW_PASSWORD_REQUIRED",
          message: "New Password is required",
        });
      },
    });
  });
}

export const login = async (userName, password) => {
  let userData = {
    Username: userName,
    Pool: UserPool,
  };
  let authenticationData = {
    mobile: userName,
    Password: password,
  };
  let authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(
    authenticationData
  );
  try {
    let result = await asyncAuthenticateUser(authenticationDetails, userData);
    let idToken = result.getIdToken().jwtToken;
    let accessToken = result.getAccessToken().jwtToken;
    AWS.config.region = "us-east-1";
    return { idToken, accessToken };
  } catch (error) {
    return { error };
  }
};

export const signOut = () => {
  try {
    const cognitoUser = UserPool.getCurrentUser();
    if (cognitoUser) {
      cognitoUser.signOut();
      return "success";
    } else {
      return "null";
    }
  } catch (error) {
    return "error";
  }
};
