import { Typography, Stack } from "@mui/material";

import Page from "../../utils/Page";

// ----------------------------------------------------------------------

export default function Instructions() {
  return (
    <Page>
      <Stack
        direction="column"
        style={{
          padding: 50,
          alignContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Typography variant="h6">
          You can add Items or add fake Items on Items Page. On Items page you
          have Items tab and Add Items tab{" "}
        </Typography>
        <br />
        <Typography variant="h6">
          You can add Customers or add fake customer on Customer Page. On
          Customer page you have Customer tab and Add Customer tab{" "}
        </Typography>

        <br />
        <Typography variant="h6">
          You can create Invoices on Invoice page.On invoice page you have
          invoice tab, that presents the invoices table and the add invoice tab
          ,where you can create invoices.{" "}
        </Typography>
        <br />
      </Stack>
    </Page>
  );
}
