//import React from "react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Grid } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AdUnitsIcon from "@mui/icons-material/AdUnits";
import Wrapper from "./wrapper";
import Search from "./search";
import Filter from "./filter";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import "./clientmanagement.css";

const ClientManagement = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

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
  const handalClick = () => {
    navigate("/addclient");
  };
  return (
    <>
      <Wrapper>
        <Grid container spacing={2}>
          <Grid item xs={5}>
            <h2>Welcome Jitedra</h2>
          </Grid>
          <Grid item xs={5} mt={2}>
            <Search />
          </Grid>
          <Grid item xs={1} mt={2}>
            <NotificationsIcon />
          </Grid>
          <Grid item xs={1} mt={2}>
            <AdUnitsIcon />
          </Grid>
        </Grid>
        <Grid container spacing={2} mt={6}>
          <Grid item xs={10}>
            <h3>Client</h3>
          </Grid>
          <Grid item xs={2}>
            <Button
              onClick={handalClick}
              sx={{ textTransform: "capitalize" }}
              variant="contained"
            >
              <AddIcon />
              Client
            </Button>
            {/* <Link to="/addclient">addclient</Link> */}
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={5}>
            <Search />
          </Grid>
          <Grid item xs={5}></Grid>
        </Grid>
        <Grid container spacing={2} mt={5}>
          <Grid item xs={12}>
            <Filter />
          </Grid>
          <Grid item xs={5}></Grid>
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
    </>
  );
};

export default ClientManagement;
