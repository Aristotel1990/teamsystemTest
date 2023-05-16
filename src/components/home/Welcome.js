import { useEffect } from "react";
import { Typography, Stack } from "@mui/material";
import { useDispatch } from "../../redux/store";
import {
  getData,
  getInvoicesFromStorage,
  getItemsFromStorage,
  getdataFromStorage,
} from "../../redux/slices/data";
import Page from "../../utils/Page";

// ----------------------------------------------------------------------

export default function Welcome() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
    dispatch(getInvoicesFromStorage());
    dispatch(getdataFromStorage());
    dispatch(getItemsFromStorage());
  }, [dispatch]);
  return (
    <Page>
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
    </Page>
  );
}
