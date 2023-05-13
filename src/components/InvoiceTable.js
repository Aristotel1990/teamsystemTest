import * as React from "react";
import { Box, Button, Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "../redux/store";
import { formatStatus } from "../utils/formatStatus";

export default function InvoiceTable() {
  const { invoices } = useSelector((state) => state.data);

  const columns = [
    { field: "id", headerName: "ID", width: 30, hide: true },
    {
      field: "number",
      headerName: "Number",
      width: 100,
      editable: true,
    },
    {
      field: "date",
      headerName: "Date",
      width: 150,
      editable: true,
    },
    {
      field: "customer",
      headerName: "Customer",
      width: 110,
      editable: true,
    },
    {
      field: "email",
      headerName: "E-mail",
      sortable: false,
      width: 160,
    },
    {
      field: "eInvoice",
      headerName: "E-Invoice",
      width: 150,
      editable: true,
    },
    {
      field: "date",
      headerName: "Date",
      width: 150,
      editable: true,
    },
    {
      field: "paymenta",
      headerName: "Paymenta",
      width: 110,
      editable: true,
    },
    {
      field: "accounting",
      headerName: "Accounting",
      sortable: false,
      width: 160,
    },
    {
      field: "status",
      headerName: "Status",
      width: 110,
      editable: true,
      renderCell: (params) => formatStatus(params.row.status),
    },
    {
      field: "total",
      headerName: "Total",
      sortable: false,
      width: 160,
    },
  ];
  const rows = [];

  return (
    <Grid padding={2} container>
      <Typography variant="h4">Invoices table</Typography>

      <Box sx={{ height: 500, width: "100%" }}>
        <DataGrid
          rows={invoices}
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
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </Grid>
  );
}
