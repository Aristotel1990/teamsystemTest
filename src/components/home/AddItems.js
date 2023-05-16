import React from "react";

import { Grid } from "@mui/material";
import { ItemsTable } from "../tables";
import { AddItemForm } from "../forms";
export default function AddItems() {
  return (
    <Grid padding={2} container>
      <Grid item xs={12}>
        <AddItemForm />
      </Grid>
      <Grid item xs={12}>
        <ItemsTable />
      </Grid>
    </Grid>
  );
}
