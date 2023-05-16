import * as React from "react";
import {
  Box,
  Button,
  Pagination,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Grid } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "../redux/store";
import { formatStatus } from "../utils/formatStatus";
import ChangeStatusDialog from "./ChangeStatusDialog";
import { fDate, fDateTime } from "../utils/formatTime";
import { GridDeleteIcon, GridPrinIcon } from "@mui/x-data-grid";
import {
  clearData,
  deleteInvoiceByID,
  getData,
  getInvoicesFromStorage,
} from "../redux/slices/data";
import { filter } from "lodash";
import ConvertToCSV from "./ConvertToCSV";
import ConvertTocsvByID from "./ConvertTocsvByID";

function applySortFilter(array, comparator, query) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  if (query) {
    if (!isNaN(query)) {
    }
    return filter(
      array,
      (_user) =>
        _user.customer.toLowerCase().indexOf(query.toLowerCase()) !== -1 ||
        _user.status.toLowerCase().indexOf(query.toLowerCase()) !== -1 ||
        _user.number.toLowerCase().indexOf(query.toLowerCase()) !== -1 ||
        _user.total.toLowerCase().indexOf(query.toLowerCase()) !== -1
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
export default function InvoiceTable() {
  const { invoices } = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const [filterName, setFilterName] = useState("");
  const [orderBy] = useState("id");
  const [data, setData] = useState(invoices);

  useEffect(() => {
    dispatch(getInvoicesFromStorage());
    dispatch(getData());
    setData(invoices);
  }, []);
  const columns = [
    { field: "id", headerName: "ID", width: 30, hide: true },
    {
      field: "number",
      headerName: "NR",
      width: 40,
    },
    {
      field: "date",
      headerName: "Date",
      width: 120,
      renderCell: (params) => fDate(params?.row?.date),
    },
    {
      field: "customer",
      headerName: "Customer",
      width: 150,
    },
    {
      field: "email",
      headerName: "E-mail",
      sortable: false,
      width: 110,
    },

    {
      field: "paymenta",
      headerName: "Paymenta",
      width: 110,
    },
    {
      field: "accounting",
      headerName: "Accounting Items",
      sortable: false,
      width: 100,
    },
    {
      field: "status",
      headerName: "Status",
      width: 150,
      renderCell: (params) => formatStatus(params?.row?.status),
    },
    {
      field: "total",
      headerName: "Total",
      sortable: false,
      width: 100,
    },
    {
      field: "action1",
      headerName: "Edit",
      width: 100,
      align: "left",
      disableColumnMenu: true,

      renderCell: (params) => (
        <strong>
          <ChangeStatusDialog params={params} />
        </strong>
      ),
    },
    {
      field: "action2",
      headerName: "Delete",
      sortable: false,
      width: 100,
      align: "left",
      disableColumnMenu: true,

      renderCell: (params) => (
        <Button
          color="error"
          variant="text"
          onClick={() => dispatch(deleteInvoiceByID(params?.row?.id))}
        >
          <GridDeleteIcon />
        </Button>
      ),
    },
    {
      field: "action3",
      headerName: "E-Invoice",
      sortable: false,
      width: 180,
      align: "left",
      disableColumnMenu: true,

      renderCell: (params) => <ConvertTocsvByID id={params?.row?.id} />,
    },
  ];

  const allData = applySortFilter(
    invoices,
    getComparator(data, orderBy),
    filterName
  );
  const onFilterName = (event) => {
    const filter = event.target.value;
    setFilterName(filter);
  };

  return (
    <Grid padding={2} container>
      <Typography marginBottom={2} variant="h4">
        Invoices table
      </Typography>
      <Grid
        sx={{
          borderRight: 0.1,
        }}
        padding={2}
        item
        xs={12}
      >
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 3, sm: 2 }}
          justifyContent="space-between"
        >
          <Stack sx={{ width: "30%", justifyContent: "flex-end" }}>
            <TextField
              label="Search by customer,status,number or total"
              size="small"
              fullWidth
              value={filterName}
              onChange={onFilterName}
            />
          </Stack>

          <Button onClick={() => dispatch(clearData())}>Clear all data</Button>
        </Stack>
      </Grid>{" "}
      <Box sx={{ height: 500, width: "100%" }}>
        <DataGrid
          rows={allData}
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
