import React from "react";
import FormNote from "./FormNote";
import Notes from "./Notes";
import {
  Card,
  Button,
  Box,
  Typography,
  Stack,
  Grid,
  CardContent,
  CardActions,
} from "@mui/material";
export default function AddNote() {
  return (
    <Grid margin={5} container spacing={1}>
      <Grid item xs={6}>
        <FormNote />
      </Grid>
      <Grid item xs={12}>
        <Notes />
      </Grid>
    </Grid>
  );
}
