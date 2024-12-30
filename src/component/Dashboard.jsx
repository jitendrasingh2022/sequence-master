import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoOutUser } from "../redux/loginAction";
import { Link, useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Home from "@mui/icons-material/Home";
import { Grid } from "@mui/material";
import "./dashbord.css";
import Navigation from "./navigation";
import Wrapper from "./wrapper";

export default function Dashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginData = useSelector((state) => state.login);
  // useEffect(() => {
  //   const localToken = localStorage.getItem("access_token");
  //   console.log("access_token", localToken);
  //   if (localToken === "undefined" || localToken === null) {
  //     navigate("/login");
  //   }
  // }, [loginData]);
  return (
    <>
      <Wrapper>
        <div>
          <p>Welcome Jitendra</p>
        </div>
        <div>
          <button onClick={() => dispatch(logoOutUser())}>Logout</button>
        </div>
      </Wrapper>
    </>
  );
}
