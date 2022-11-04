import { useEffect } from "react";

import SingleNote from "./SingleNote";
import { useDispatch } from "../redux/store";

import { Card, Typography, Grid } from "@mui/material";
import { useSelector } from "../redux/store";
import { getNotesFromStorage } from "../redux/slices/notes";

export default function Notes() {
  const dispatch = useDispatch();

  const { notes } = useSelector((state) => state.notes);
  useEffect(() => {
    dispatch(getNotesFromStorage());
  }, [dispatch]);
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
