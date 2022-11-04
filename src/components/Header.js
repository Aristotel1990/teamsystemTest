import { Link } from "react-router-dom";

import { AppBar, Toolbar, Typography } from "@mui/material";

// ----------------------------------------------------------------------

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Link style={{ textDecoration: "none" }} to="/">
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
        <Link style={{ textDecoration: "none" }} to="/home">
          {" "}
          <Typography
            variant="h8"
            sx={{
              mr: 2,
              color: "white",
            }}
          >
            Home
          </Typography>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/all">
          {" "}
          <Typography
            variant="h8"
            sx={{
              mr: 2,

              color: "white",
            }}
          >
            All Notes
          </Typography>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/add">
          {" "}
          <Typography variant="h8" color="white">
            Add Note{" "}
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
}
