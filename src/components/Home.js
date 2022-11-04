import { filter } from "lodash";

import { useState, useEffect } from "react";
import ListNotes from "./ListNotes";
import { Stack, Box, Button, TextField, Typography, Grid } from "@mui/material";

import CategoryNote from "./CategoryNote";
import { useDispatch, useSelector } from "../redux/store";
import { clearData, fakeNotes } from "../redux/slices/notes";

function applySortFilter(array, comparator, query) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  if (query) {
    return filter(
      array,
      (_user) => _user?.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );
  }
  return stabilizedThis.map((el) => el[0]);
}
function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}
function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}
export default function Home() {
  const dispatch = useDispatch();

  const { notes } = useSelector((state) => state.notes);
  const [filterName, setFilterName] = useState("");
  const [orderBy, setOrderBy] = useState("title");
  const [data, setData] = useState(notes);

  useEffect(() => {
    setData(notes);
  }, []);

  const allData = applySortFilter(
    notes,
    getComparator(data, orderBy),
    filterName
  );
  const onFilterName = (event) => {
    const filter = event.target.value;
    setFilterName(filter);
  };
  const deleteStorage = () => {
    dispatch(clearData());
  };
  const addFakeNotes = () => {
    dispatch(fakeNotes());
  };
  return (
    <Grid margin={5} container spacing={2}>
      <Grid
        sx={{
          borderRight: 0.1,
        }}
        item
        xs={4}
      >
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 3, sm: 2 }}
        >
          <TextField
            label="Search note by title"
            multiline
            size="small"
            maxRows={4}
            value={filterName}
            onChange={onFilterName}
          />
          <Box sx={{ mt: 3, display: "flex", justifyContent: "flex-end" }}>
            <Button size="small" type="submit" variant="contained">
              Search
            </Button>
          </Box>
        </Stack>
        <Grid marginTop={2} item>
          <Typography variant="h6">All Notes</Typography>
        </Grid>
        <ListNotes notes={allData} />
      </Grid>
      <Grid item xs={5}>
        <CategoryNote />
      </Grid>
      <Grid item xs={3}>
        <Box>
          <Button onClick={deleteStorage} variant="contained">
            {" "}
            Clear All Data
          </Button>
          &nbsp;&nbsp;
          <Button onClick={addFakeNotes} variant="contained">
            {" "}
            Fake notes
          </Button>
        </Box>{" "}
      </Grid>
    </Grid>
  );
}
