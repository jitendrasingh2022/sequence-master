import React from "react";
import Navigation from "./Navigation";
import { Grid } from "@mui/material";

export default function Wrapper({ children }) {
  return (
    <Grid container spacing={2} className="wrapper">
      <Grid item xs={3} className="bg-gary">
        <Navigation />
      </Grid>
      <Grid item xs={9}>
        {children}
      </Grid>
    </Grid>
    // <div className="container">
    //   <Navigation />
    //   <div>{children}</div>
    // </div>
  );
}
