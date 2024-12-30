import { Home } from "@mui/icons-material";
import { Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../asset/dasbord.svg";

export default function Navigation() {
  return (
    <>
      <img src={logo} alt="No img found" className="img" />
      <ul className="list">
        <li>
          <Home className="" />
          <Link to="/dashboard">Dasbboard</Link>
        </li>
        <li>
          <Home className="" />
          <Link to="/clientmanagement">Client Management</Link>
        </li>
      </ul>
    </>
  );
}
