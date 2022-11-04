import { useEffect } from "react";

import SingleNote from "./SingleNote";

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
import { useSelector } from "../redux/store";

export default function Notes() {
  const { notes } = useSelector((state) => state.notes);
  useEffect(() => {}, [notes]);
  return (
    <Card sx={{ p: 2 }}>
      <Typography variant="overline" sx={{ display: "block" }}>
        My Notes{" "}
      </Typography>
      <Grid container spacing={2}>
        {notes.map((row, index) => {
          return (
            <Grid key={row.id} item xs={3}>
              <SingleNote note={row} />
            </Grid>
          );
        })}{" "}
      </Grid>
    </Card>
  );
}
