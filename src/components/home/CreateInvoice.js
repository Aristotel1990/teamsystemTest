import React from "react";
import { AddInvoiceForm } from "../forms";
import { TablePrice } from "../tables";

import { Grid } from "@mui/material";

export default function CreateInvoice() {
  return (
    <Grid padding={2} container>
      <Grid item xs={12}>
        <AddInvoiceForm />
      </Grid>
      <Grid item xs={8}>
        <TablePrice />
      </Grid>
    </Grid>
  );
}
