import * as React from "react";
import { Box, Button, Stack } from "@mui/material";
import { Grid } from "@mui/material";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { useEffect } from "react";

export default function InvoiceButtons() {
  return (
    <Grid padding={10} container>
      <Box sx={{ height: 500, width: "100%", justifyContent: "center" }}>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 3, sm: 2 }}
        >
          <Button size="small" variant="contained">
            Create invoice
          </Button>
          <Button size="small" color="success" variant="contained">
            Export invoice
          </Button>
        </Stack>
      </Box>
    </Grid>
  );
}
