import React from "react";
import FormNote from "./FormNote";
import AddCustomerForm from "./AddCustomerForm";
import CustomersList from "./CustomersList";
import { Grid } from "@mui/material";
export default function AddCustomers() {
  return (
    <Grid padding={2} container>
      <Grid item xs={12}>
        <AddCustomerForm />
      </Grid>
      <Grid item xs={12}>
        <CustomersList />
      </Grid>
    </Grid>
  );
}
