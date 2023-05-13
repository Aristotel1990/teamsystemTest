import { Link } from "react-router-dom";
import React from "react";

import { AppBar, Toolbar, Typography } from "@mui/material";

// ----------------------------------------------------------------------

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Link style={{ textDecoration: "none" }} to="/welcome">
          {" "}
          <Typography
            variant="h8"
            sx={{
              mr: 2,
              color: "white",
            }}
          >
            Welcome
          </Typography>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/customer">
          {" "}
          <Typography
            variant="h8"
            sx={{
              mr: 2,
              color: "white",
            }}
          >
            Customers
          </Typography>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/items">
          {" "}
          <Typography
            variant="h8"
            sx={{
              mr: 2,

              color: "white",
            }}
          >
            Items{" "}
          </Typography>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/all">
          {" "}
          <Typography variant="h8" color="white">
            Invoices{" "}
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
}
