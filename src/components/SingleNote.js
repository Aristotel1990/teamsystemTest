import { useState, useEffect } from "react";
import { Typography, Divider, Box, Stack, Grid, Chip } from "@mui/material";
// utils
import dayjs from "dayjs";
// ----------------------------------------------------------------------
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "../redux/store";
import { deleteNote } from "../redux/slices/data";
import EditNote from "./EditNote";

// ----------------------------------------------------------------------

export default function SingleNote({ note }) {
  const dispatch = useDispatch();
  const [x, setX] = useState("outlined");
  const [y, setY] = useState("outlined");
  const [z, setZ] = useState("outlined");

  const handledelete = () => {
    dispatch(deleteNote(note.id));
  };
  useEffect(() => {
    if (note.important === "Very important") {
      setX("");
      setY("outlined");
      setZ("outlined");
    } else if (note.important === "Important") {
      setY("");
      setX("outlined");
      setZ("outlined");
    } else if (note.important === "Not important") {
      setZ("");
      setY("outlined");
      setX("outlined");
    }
  }, [note]);

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: "#eef1ff",
        border: 0.1,
        borderRadius: 5,
      }}
    >
      <Box sx={{ my: 3, mx: 2 }}>
        <Grid container alignItems="center">
          <Grid item xs>
            <Typography gutterBottom variant="h6" component="div">
              {note.title}
            </Typography>
          </Grid>
        </Grid>
        <Typography color="text.secondary" variant="body2">
          {note.note}
        </Typography>
      </Box>
      <Divider variant="middle" />
      <Box sx={{ m: 2 }}>
        <Typography gutterBottom variant="body1">
          Date : {dayjs(note.date).format("YYYY-MM-DD -  HH:mm")}
        </Typography>
        <Stack direction="row" spacing={1}>
          <Chip
            size="small"
            color="primary"
            variant={x}
            label="Very important"
          />
          <Chip size="small" color="primary" variant={y} label="Important" />
          <Chip
            size="small"
            color="primary"
            variant={z}
            label="Not important"
          />
        </Stack>
      </Box>
      <Box sx={{ mt: 3, ml: 1, mb: 1 }}>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 3, sm: 2 }}
          justifyContent="space-between"
        >
          <EditNote note={note} />
          <IconButton onClick={handledelete} aria-label="delete" size="medium">
            <DeleteIcon fontSize="inherit" />
          </IconButton>
        </Stack>
      </Box>
    </Box>
  );
}
