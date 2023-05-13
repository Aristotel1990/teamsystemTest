import * as React from "react";
import { useSelector, useDispatch } from "../redux/store";
import { Button } from "@mui/material";
import { Box } from "@mui/material";
import { Grid } from "@mui/material";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { deleteCustomersByID, getdataFromStorage } from "../redux/slices/data";
import { useEffect } from "react";

export default function CustomersTable() {
  const { customers } = useSelector((state) => state.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getdataFromStorage());
  }, [dispatch]);
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "number",
      headerName: "Number",
      width: 150,

      editable: true,
    },
    {
      field: "name",
      headerName: "Fullname",
      width: 300,

      editable: true,
    },
    {
      field: "country",
      headerName: "Country",
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
            onClick={() => dispatch(deleteCustomersByID(params.row.id))}
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
          rows={customers}
          columns={columns}
          density="compact"
          initialState={{
            pagination: {
              paginationModel: {
                pcountrySize: 10,
              },
            },
          }}
          pcountrySizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </Grid>
  );
}
