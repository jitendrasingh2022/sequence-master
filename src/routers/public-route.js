import React, { useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  DASHBOARD,
  SWDASHBOARD,
  ONBOARDING,
  LANDING_PAGE,
} from "../constant/routeContant";
import { useNavigate } from "react-router-dom";
import * as loginActions from "../redux/actions/loginActions";
import { setRiderctUrls } from "../redux/loginAction";
// for public
const PublicRoutes = () => {
  const token = localStorage.getItem("id_token");
  const isAuth = useSelector((state) => state.login.userSuccess);
  const loginData = useSelector((state) => state.login);
  const isOnboarded = useSelector((state) => state.login.isOnboarded);
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const userInfoProduct = userInfo?.product;
  const data = userInfoProduct?.map((val) => val?.key);

  let navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    // code for redirection handle
    if (loginData?.url?.pathName && data == undefined) {
      dispatch(setRiderctUrls(""));
    }
  }, [loginData]);
  return !isAuth && !token ? (
    <Outlet />
  ) : isOnboarded ? (
    loginData?.url?.pathName ? (
      <Navigate to={loginData?.url?.pathName} replace={false} />
    ) : data?.length > 1 ? (
      <Navigate to={LANDING_PAGE} replace={true} />
    ) : data?.length === 1 && data?.includes(2) ? (
      <Navigate to={SWDASHBOARD} replace={true} />
    ) : (
      <Navigate to={DASHBOARD} replace={true} />
    )
  ) : (
    <Navigate to={ONBOARDING} replace={true} />
  );
};

export default PublicRoutes;
