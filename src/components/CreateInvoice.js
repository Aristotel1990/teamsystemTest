import React from "react";

import AddInvoiceForm from "./AddInvoiceForm";
import SingleInvoiceTable from "./SingleInvoiceTable";
import TablePrice from "./TablePrice";
import { Grid } from "@mui/material";
import InvoiceButtons from "./InvoiceButtons";

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
