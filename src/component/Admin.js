import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoOutUser } from "../redux/loginAction";
import { Link, useNavigate } from "react-router-dom";
import logo from "../asset/dasbord.svg";
import Typography from "@mui/material/Typography";
import Home from "@mui/icons-material/Home";
import { Grid } from "@mui/material";
import "./dashbord.css";

export default function Admin() {
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
      <div className="container">
        <div className="Dasleft">
          <img src={logo} alt="No img found" className="img" />
          {/* <img src={home} alt="" className="homeimg" /> */}
          <Grid sx={{ display: "flex" }}>
            <Home className="home" />
            <Grid className="dashbord">
              <Typography>Dashbord</Typography>
            </Grid>
          </Grid>
          <div className="client">
            <Link to="/clientmanagement">Client Management</Link>
          </div>
        </div>
        <h2>hell</h2>
      </div>
    </>
  );
}
