import { CognitoUserPool } from "amazon-cognito-identity-js";

export const poolData = {
  UserPoolId: "us-east-1_MJWRqXgsE",
  ClientId: "1toc4ee70ecmidhmr58rg6kqdd",
};

export default new CognitoUserPool(poolData);
