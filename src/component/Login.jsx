import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../redux/loginAction";
import Grid from "@mui/material/Grid";
import logo from "../asset/login.png";
import { useDispatch, useSelector } from "react-redux";
import { Button, FormControl, FormLabel, TextField } from "@mui/material";
const Login = () => {
  const [mobile, setMobile] = useState();
  const [password, setPassword] = useState();
  const [showMobileError, setShowMobileError] = useState(false);
  const [showPasswordError, setShowPasswordError] = useState(false);
  const loginData = useSelector((state) => state.login);
  const navigate = useNavigate();
  // useEffect(() => {
  //   if (loginData.userSuccess === true) {
  //     navigate("/dashboard");
  //   }
  // });

  const dispatch = useDispatch();

  const onChangerHandler = (e) => {
    setMobile(e.target.value);
  };
  const onChangerHandler1 = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    if (!mobile && !password) {
      setShowMobileError(true);
      setShowPasswordError(true);
      return;
    }
    dispatch(login(mobile, password));
  };

  return (
    <div className="padding200">
      <Grid container spacing={2}>
        <Grid item xs={6} md={6}>
          <h1>Welcome to Sequence</h1>
          <form>
            <FormControl fullWidth={true}>
              <FormLabel htmlFor="email/mobile" style={{ textAlign: "left" }}>
                Email/Mobile <span style={{ color: "red" }}> *</span>
              </FormLabel>
              <TextField
                className="text"
                autoComplete="name"
                name="name"
                required
                fullWidth
                id="name"
                placeholder="Email/Mobile"
                value={mobile}
                onChange={(e) => onChangerHandler(e)}
                // error={nameError}
                // helperText={nameErrorMessage}
                // color={nameError ? "error" : "primary"}
              />
            </FormControl>

            {/* <div className="form-group">
              <label htmlFor="mobile">Mobile</label>
              <input
                type="text"
                name="mobile"
                placeholder="+91 Enter Mobile"
                value={mobile}
                onChange={(e) => onChangerHandler(e)}
              />
            </div> */}
            {showMobileError && !mobile ? (
              <p className="eror">Please enter your mobile</p>
            ) : null}
            <FormControl
              spacing={3}
              fullWidth={true}
              style={{ textAlign: "left" }}
            >
              <FormLabel htmlFor="name">
                Password<span style={{ color: "red" }}> *</span>
              </FormLabel>
              <TextField
                type="password"
                autoComplete="name"
                name="password"
                required
                fullWidth
                id="name"
                spacing={3}
                placeholder="Enter password"
                value={password}
                onChange={(e) => onChangerHandler1(e)}
                // error={nameError}
                // helperText={nameErrorMessage}
                // color={nameError ? "error" : "primary"}
              />
              <p textAlign={"right"}>Forget Password</p>
            </FormControl>

            {/* <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => onChangerHandler1(e)}
              />
            </div> */}
            {showPasswordError && !password ? (
              <p className="eror">Please enter your Password</p>
            ) : null}

            <Grid item xs={8} mt={3} textAlign={"left"}>
              <Button
                type="button"
                fullWidth
                variant="contained"
                className="button"
                onClick={handleSubmit}
              >
                Log in
              </Button>
              <p textAlign={"left"}>
                Not a SafetyCloud User? Sign up Now{" "}
                <Link to="/signup">signup</Link>
              </p>
            </Grid>
          </form>
        </Grid>
        <Grid item xs={6} md={6}>
          {/* <Item>xs=6 md=4</Item> */}
          <img src={logo} alt="No image found" />
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;
