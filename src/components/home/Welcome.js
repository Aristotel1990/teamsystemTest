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
import { Link } from "react-router-dom";

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
          alignItems: "center",
          marginTop: 200,
          justifyContent: "center",
          alignSelf: "center",
          textAlign: "center",
        }}
      >
        <Typography variant="h4">Welcome to Teamsystem test</Typography>
        <Typography variant="h8">Do you want to create an invoice? </Typography>
        <Link style={{ textDecoration: "none" }} to="/instruction">
          {" "}
          <Typography
            variant="h8"
            sx={{
              mr: 2,
            }}
          >
            Go to instructions{" "}
          </Typography>
        </Link>
        <br />
        <br />
      </Stack>
    </Page>
  );
}
