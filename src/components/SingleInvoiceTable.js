import * as React from "react";
import { Box } from "@mui/material";
import { Grid } from "@mui/material";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { useEffect } from "react";
import { useDispatch, useSelector } from "../redux/store";

export default function SingleInvoiceTable() {
  const { singleInvoice } = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const columns = [
    { field: "id", headerName: "ID", width: 90 },

    {
      field: "item",
      headerName: "Product name",
      sortable: false,
      width: 150,
    },
    {
      field: "price",
      headerName: "Price",
      width: 150,
      editable: true,
    },

    {
      field: "quantity",
      headerName: "Quantity	",
      sortable: false,
      width: 200,
    },
    {
      field: "total",
      headerName: "Total	",
      sortable: false,
      width: 200,
    },
  ];

  useEffect(() => {
    // dispatch(getdataFromStorage());
  }, [dispatch]);

  return (
    <Grid padding={2} container>
      <Box sx={{ height: 500, width: "100%" }}>
        <DataGrid
          rows={singleInvoice}
          columns={columns}
          density="compact"
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          pageSizeOptions={[5]}
          disableRowSelectionOnClick
        />
      </Box>
    </Grid>
  );
}
