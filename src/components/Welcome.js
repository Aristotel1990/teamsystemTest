import { useEffect } from "react";
import { Typography, Stack } from "@mui/material";
import { useDispatch } from "../redux/store";
import { getNotesFromStorage } from "../redux/slices/notes";
import { Grid } from "@mui/material";

// ----------------------------------------------------------------------

export default function Welcome() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNotesFromStorage());
  }, []);

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
        <Typography variant="h4">Welcome Flex Business Solutions</Typography>
        <Typography variant="h8">Do you want to take a note? </Typography>

        <br />
        <br />
      </Stack>
    </Grid>
  );
}
