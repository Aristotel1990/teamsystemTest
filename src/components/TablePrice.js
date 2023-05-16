import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Button,
  CardHeader,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { GridDeleteIcon } from "@mui/x-data-grid";
import { deleteInvoiceItemsByID } from "../redux/slices/data";

export default function TablePrice() {
  const dispatch = useDispatch();

  const { singleInvoice } = useSelector((state) => state.data);
  const total = singleInvoice.reduce((a, v) => (a = a + v.total), 0);
  const deleteInvoiceItems = (id) => {
    dispatch(deleteInvoiceItemsByID(id));
  };
  return (
    <Grid marginTop={2} container>
      <Box sx={{ height: 500, width: "100%" }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell align="right">Product Name</TableCell>
                <TableCell align="right">Price&nbsp;(€)</TableCell>
                <TableCell align="right">Quantity</TableCell>
                <TableCell align="right">Total&nbsp;(€)</TableCell>
                <TableCell align="right">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {singleInvoice.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell align="right">{row.item}</TableCell>
                  <TableCell align="right">{row.price}</TableCell>
                  <TableCell align="right">{row.quantity}</TableCell>

                  <TableCell align="right">{row.total}</TableCell>
                  <TableCell align="right">
                    <Button
                      color="error"
                      variant="text"
                      onClick={() => deleteInvoiceItems(row.id)}
                    >
                      <GridDeleteIcon />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Stack
          direction="row"
          margin={2}
          justifyContent="space-between"
          marginRight={20}
        >
          <Typography variant="h6">Total Cost</Typography>
          <Typography variant="h6">{total} €</Typography>
        </Stack>
      </Box>
    </Grid>
  );
}
