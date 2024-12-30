//import React from "react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
// import Table from "@mui/material/Table";

// import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import Stack from "@mui/material/Stack";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonIcon from "@mui/icons-material/Person";
import Wrapper from "./wrapper";
import Search from "./search";
import Table from "./table";
// import "./clientmanagement.css";
import "./Dashboard.css";

const ClientManagement = () => {
  const [search, setSearch] = useState("");

  const handleautoSearch = (event) => {
    let searchText = "";
    if (event.target.value) {
      searchText = event.target.value;
    }
    setSearch(searchText);
    const data = {
      //   ...clientListApiData,
      search: searchText ? searchText : "",
    };
  };
  const navigation = useNavigate();
  const handleClick = () => {
    navigation("/addDivision");
    // window.location.href = "/addDivision"; // Replace '/addDivision' with your desired URL
  };

  return (
    <>
      <Wrapper>
        <Grid container spacing={2}>
          <Grid item xs={3} className="header">
            <h2>Welcome Jitedra</h2>
          </Grid>
          <Grid item xs={7} className>
            <Search />
          </Grid>
          <Grid item xs={1}>
            <NotificationsIcon />
          </Grid>
          <Grid item xs={1}>
            <PersonIcon />
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={10} className="header">
            <h2>Divisions</h2>
          </Grid>
          <Grid item xs={2} className="header">
            <Stack>
              <Button
                sx={{ textTransform: "none" }}
                variant="contained"
                startIcon={<AddIcon />}
                onClick={handleClick}
              >
                Add Division
              </Button>
            </Stack>
          </Grid>
          <Grid item xs={6}>
            <Search />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Table />
        </Grid>

        <>
          {/* <section>
            <div className="comtiner">
              <div className="continer-clients">Clients</div>
              <div className="search-body">
                <div className="searchcaseid">
                  <label htmlFor="search">
                    <span>
                      <SearchIcon />
                    </span>
                    <div>
                      <input
                        id="search"
                        placeholder="Search"
                        type="text"
                        value={search}
                        className=""
                        onChange={handleautoSearch}
                        autoComplete="off"
                      />
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </section> */}
        </>
      </Wrapper>
      {/* <Navigation />
       */}
    </>
  );
};

export default ClientManagement;

// import React, { useEffect, useState } from "react";
// import "./Clint.css";
// import { Link, useNavigate } from "react-router-dom";
// import { login } from "../redux/loginAction";
// import Grid from "@mui/material/Grid";
// import logo from "../asset/login.png";
// import { useDispatch, useSelector } from "react-redux";
// import { Button, FormControl, FormLabel, TextField } from "@mui/material";

// // import LeftImage from "../asset/logo.svg";
// import Typography from "@mui/material/Typography";
// // import Home from "@mui/icons-material/Home";
// import NotificationsIcon from "@mui/icons-material/Notifications";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import Box from "@mui/material/Box";
// const ClintManagement = () => {
//   return (
//     <div className="padding200">
//       <Grid container spacing={2}>
//         <Grid item xs={6} md={3}>
//           <h1>Clint Management</h1>
//         </Grid>
//         <Grid item xs={6} md={6}>
//           {/* <Item>xs=6 md=4</Item> */}
//           {/* <img src={logo} alt="No image found" /> */}
//         </Grid>
//       </Grid>
//     </div>
//   );
// };

// export default ClintManagement;
