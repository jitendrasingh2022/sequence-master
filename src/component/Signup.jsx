import { Link } from "react-router-dom";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import LeftImage from "../asset/login.png";
import "./Signup.css";
const Signup = () => {
  const [formData, setFormData] = useState({
    fName: "",
    lName: "",
    email: "",
    mobile: "",
    password: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const submitData = () => {};

  return (
    <div className="padding200">
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <h1>Create your Safety Cloud Account</h1>
          <form>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <FormControl fullWidth={true}>
                  <FormLabel htmlFor="name" style={{ textAlign: "left" }}>
                    First Name <span style={{ color: "red" }}> *</span>
                  </FormLabel>
                  <TextField
                    className="text"
                    autoComplete="name"
                    name="fName"
                    required
                    fullWidth
                    id="name"
                    placeholder="First Name"
                    value={formData.fname}
                    onChange={onChangeHandler}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl
                  spacing={3}
                  fullWidth={true}
                  style={{ textAlign: "left" }}
                >
                  <FormLabel htmlFor="name">
                    Last Name<span style={{ color: "red" }}>*</span>
                  </FormLabel>
                  <TextField
                    autoComplete="name"
                    name="lName"
                    required
                    fullWidth
                    id="name"
                    spacing={3}
                    value={formData.lName}
                    placeholder="Last Name"
                    onChange={onChangeHandler}
                  />
                </FormControl>
              </Grid>
            </Grid>
            <Grid item xs={12} mt={3}>
              <FormControl fullWidth={true} style={{ textAlign: "left" }}>
                <FormLabel htmlFor="email">
                  Email<span style={{ color: "red" }}>*</span>
                </FormLabel>
                <TextField
                  required
                  fullWidth
                  id="email"
                  placeholder="your@email.com"
                  name="email"
                  autoComplete="email"
                  variant="outlined"
                  value={formData.email}
                  onChange={onChangeHandler}
                />
              </FormControl>
            </Grid>
            <Grid container spacing={2} mt={3}>
              <Grid item xs={6}>
                <FormControl fullWidth={true}>
                  <FormLabel htmlFor="name" style={{ textAlign: "left" }}>
                    Mobile <span style={{ color: "red" }}> *</span>
                  </FormLabel>
                  <TextField
                    className="text"
                    autoComplete="name"
                    name="mobile"
                    required
                    fullWidth
                    id="name"
                    value={formData.mobile}
                    placeholder="+91 644-234-6546"
                    onChange={onChangeHandler}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl
                  spacing={3}
                  fullWidth={true}
                  style={{ textAlign: "left" }}
                >
                  <FormLabel htmlFor="name">
                    Password<span style={{ color: "red" }}>*</span>
                  </FormLabel>
                  <TextField
                    type="password"
                    autoComplete="name"
                    name="password"
                    required
                    fullWidth
                    id="name"
                    spacing={3}
                    value={formData.password}
                    placeholder="Wnter password"
                    onChange={onChangeHandler}
                  />
                </FormControl>
              </Grid>
            </Grid>
          </form>
          <Grid item xs={12} mt={3} textAlign={"left"}>
            <Checkbox label="" /> By signing up you agree to our{" "}
            <Link>Tearms of use</Link> and <Link>Privar policy</Link>
          </Grid>
          <Grid item xs={8} mt={3} textAlign={"left"}>
            <Button
              type="button"
              fullWidth
              variant="contained"
              className="button"
              onClick={submitData}
            >
              Sign up
            </Button>
            <p textAlign={"left"}>
              Already a Sequence Member? <Link to="/login">Login</Link>
            </p>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <img src={LeftImage} alt="No iamge found" />
        </Grid>
      </Grid>
    </div>
  );
};

export default Signup;
