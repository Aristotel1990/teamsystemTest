import { useEffect } from "react";
import { useSelector, useDispatch } from "../../redux/store";
import { Box, Grid, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import {
  deleteCustomersByID,
  getdataFromStorage,
} from "../../redux/slices/data";

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
    },
    {
      field: "name",
      headerName: "Fullname",
      width: 300,
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
                pageSize: 10,
              },
            },
          }}
          pageSizeOptions={[10]}
          disableRowSelectionOnClick
        />
      </Box>
    </Grid>
  );
}
