import React, { useEffect } from "react";

import SingleNote from "./SingleNote";
import { useDispatch } from "../redux/store";

import { Card, Typography, Grid, Text } from "@mui/material";
import { useSelector } from "../redux/store";
import { getNotesFromStorage } from "../redux/slices/data";
import Demo from "./Demo";

export default function CustomersList() {
  const dispatch = useDispatch();

  const { customers } = useSelector((state) => state.data);
  useEffect(() => {
    // dispatch(getNotesFromStorage());
  }, [dispatch]);
  return (
    <Card sx={{ p: 2 }}>
      <Typography variant="overline" sx={{ display: "block" }}>
        My Customers{" "}
      </Typography>
      <Grid container>
        {customers.map((row, index) => {
          return (
            <Grid key={row.id} item xs={3}>
              <Demo data={row} />
            </Grid>
          );
        })}{" "}
      </Grid>
    </Card>
  );
}
