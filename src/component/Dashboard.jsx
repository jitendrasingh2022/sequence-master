import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoOutUser } from "../redux/loginAction";
import { Link, useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Home from "@mui/icons-material/Home";
import { Grid } from "@mui/material";
import "./Dashboard.css";
// import Navigation from "./navigation";
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

// import React from "react";
// import { useDispatch } from "react-redux";
// import { logoOutUser } from "../redux/loginAction";
// import { Link } from "react-router-dom";
// import { Grid } from "@mui/material";
// import LeftImage from "../asset/logo.svg";
// import Typography from "@mui/material/Typography";
// import Home from "@mui/icons-material/Home";
// import Box from "@mui/material/Box";
// import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";

// import "./Dashboard.css";

// export default function Dashboard() {
//   const dispatch = useDispatch();
//   return (
//     <>
//       <div>
//         <Grid container spacing={2}>
//           <Grid item xs={12} sm={3}>
//             <Box>
//               <Grid>
//                 <img className="logo" src={LeftImage} alt="No iamge found" />

//                 <Grid className="icon">
//                   <Grid className="dashboard">
//                     <Home />
//                     <Typography>Dashboard</Typography>
//                   </Grid>
//                 </Grid>
//                 <Grid className="icon">
//                   <Grid className="dashboard">
//                     <AdminPanelSettingsIcon />
//                     <Typography>
//                       Admin
//                       <Link to="/clintmanagement"> Clint Management</Link>
//                     </Typography>
//                   </Grid>
//                 </Grid>
//               </Grid>
//             </Box>
//           </Grid>

//           <Grid item xs={12} sm={9}>
//             <Grid>
//               <Box
//                 sx={{
//                   bgcolor: "secondary.main",
//                   color: "secondary.contrastText",
//                   p: 2,
//                 }}
//               >
//                 <h1 className="name">Welcome Jitendra</h1>
//               </Box>
//             </Grid>

//             {/* <form>
//               <Grid container spacing={2}>
//                 <Grid item xs={6}></Grid>
//                 <Grid item xs={6}></Grid>
//               </Grid>
//               <Grid item xs={12} mt={3}></Grid>
//               <Grid container spacing={2} mt={3}>
//                 <Grid item xs={6}></Grid>
//                 <Grid item xs={6}></Grid>
//               </Grid>
//             </form> */}
//             <div className="logout">
//               <button type="button" onClick={() => dispatch(logoOutUser())}>
//                 Logout
//               </button>
//             </div>
//           </Grid>
//         </Grid>
//       </div>
//     </>
//   );
// }
