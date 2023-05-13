import { useEffect } from "react";
import { Typography, Stack } from "@mui/material";
import { useDispatch } from "../redux/store";
import { getdataFromStorage } from "../redux/slices/data";
import { Grid } from "@mui/material";

// ----------------------------------------------------------------------

export default function Welcome() {
  return (
    <Grid spacing={2}>
      <Stack
        direction="column"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Typography variant="h4">Welcome to Teamsystem test</Typography>
        <Typography variant="h8">Do you want to create an invoice? </Typography>

        <br />
        <br />
      </Stack>
    </Grid>
  );
}
