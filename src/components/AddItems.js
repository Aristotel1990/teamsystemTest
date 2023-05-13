import React from "react";

import AddItemForm from "./AddItemForm";
import ItemsTable from "./ItemsTable";
import { Grid } from "@mui/material";
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
