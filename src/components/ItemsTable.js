import * as React from "react";
import { useSelector, useDispatch } from "../redux/store";
import { Button } from "@mui/material";
import { Box } from "@mui/material";
import { Grid } from "@mui/material";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import {
  deleteCustomersByID,
  deleteItemsByID,
  getItemsFromStorage,
} from "../redux/slices/data";
import { useEffect } from "react";

export default function ItemsTable() {
  const { items } = useSelector((state) => state.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getItemsFromStorage());
  }, [dispatch]);
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "number",
      headerName: "Number",
      width: 150,
    },
    {
      field: "title",
      headerName: "Title",
      width: 300,
    },
    {
      field: "price",
      headerName: "Price",
      width: 150,

      sortable: false,
    },
    {
      field: "Delete",

      renderCell: (params) => (
        <strong>
          <Button
            color="warning"
            variant="text"
            onClick={() => dispatch(deleteItemsByID(params.row.id))}
          >
            delete
          </Button>
        </strong>
      ),
    },
  ];

  return (
    <Grid padding={2} container>
      <Box sx={{ height: 500, width: "100%" }}>
        <DataGrid
          rows={items}
          columns={columns}
          density="compact"
          initialState={{
            pagination: {
              paginationModel: {
                pcountrySize: 10,
              },
            },
          }}
          pcountrySizeOptions={[10]}
          disableRowSelectionOnClick
        />
      </Box>
    </Grid>
  );
}
