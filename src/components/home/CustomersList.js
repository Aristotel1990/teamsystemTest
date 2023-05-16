import React from "react";

import { Card, Typography, Grid } from "@mui/material";
import { useSelector } from "../../redux/store";
import Demo from "./Demo";

export default function CustomersList() {
  const { customers } = useSelector((state) => state.data);

  return (
    <Card sx={{ p: 2, marginTop: 2 }}>
      <Typography variant="overline" sx={{ display: "block" }}>
        My Customers
      </Typography>
      <Grid container>
        {customers.map((row, index) => {
          return (
            <Grid key={row.id} item xs={3}>
              <Demo data={row} />
            </Grid>
          );
        })}
      </Grid>
    </Card>
  );
}
