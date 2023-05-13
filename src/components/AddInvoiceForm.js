import React, { useState } from "react";
import dayjs from "dayjs";
import { Form, FormikProvider, useFormik } from "formik";
// material
import { Box, Card, Stack, TextField, Button, Radio } from "@mui/material";
// utils
import { useDispatch, useSelector } from "../redux/store";
import {
  addCustomers,
  addData,
  addFakeCustomers,
  adddata,
  clearCustomers,
  createInoices,
} from "../redux/slices/data";
import { FormControlLabel } from "@mui/material";
import { RadioGroup } from "@mui/material";
import { useEffect } from "react";
import InvoiceButtons from "./InvoiceButtons";

// ----------------------------------------------------------------------

export default function AddInvoiceForm() {
  const dispatch = useDispatch();
  const { customers, items, singleInvoice, invoices } = useSelector(
    (state) => state.data
  );

  const [item, setItem] = useState("");
  const [quantity, setQuantity] = useState("");
  const [customer, setCustomer] = useState("");
  const total = singleInvoice.reduce((a, v) => (a = a + v.total), 0);
  const nr = singleInvoice.reduce((a, v) => (a = a + v.quantity), 0);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      id: singleInvoice?.length,
      item: item?.title,
      price: item?.price,
      quantity: quantity,
      total: item?.price * quantity,
    },
    // validationSchema: NewUserSchema,
    onSubmit: async (values, { setSubmitting, resetForm, setErrors }) => {
      try {
        dispatch(addData(values));
        resetForm();
        setSubmitting(false);
      } catch (error) {
        console.error(error);
        setSubmitting(false);
        setErrors(error);
      }
    },
  });
  const onCreateInvoice = () => {
    const data = {
      id: invoices?.length + 1,
      number: invoices.length + 1,
      date: new Date(),
      customer: customer,
      email: "example@example.com",
      eInvoice: "",
      paymenta: "",
      accounting: nr,
      status: "Completed",
      total: total,
    };

    dispatch(createInoices(data));
  };
  const clearData = () => {
    dispatch(clearCustomers());
  };
  const onSelectedItem = (id) => {
    const select = items.find((i) => i.id.toString() === id);

    setItem(select);
  };

  const {
    errors,
    values,
    touched,
    handleSubmit,
    isSubmitting,
    setFieldValue,
    getFieldProps,
  } = formik;

  return (
    <FormikProvider value={formik}>
      <Form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 3, sm: 2 }}
        >
          <Card sx={{ p: 3, bgcolor: "#eeffee", width: "50%" }}>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 3, sm: 2 }}
            >
              <TextField
                size="small"
                select
                fullWidth
                label="Item"
                placeholder="Item"
                SelectProps={{ native: true }}
                error={Boolean(touched.size && errors.size)}
                helperText={touched.size && errors.size}
                onChange={(event) => {
                  onSelectedItem(event.target.value);
                }}
              >
                {items.map((type) => (
                  <option key={type.id} value={type.id}>
                    {type.title}
                  </option>
                ))}
              </TextField>
              <TextField
                size="small"
                label="Quantity"
                type="number"
                onChange={(event) => setQuantity(event.target.value)}
              />
              <Box sx={{ mt: 3, display: "flex", justifyContent: "flex-end" }}>
                <Button type="submit" variant="contained">
                  Add
                </Button>
              </Box>
            </Stack>
          </Card>
          <Card sx={{ p: 3, bgcolor: "#eeffee", width: "50%" }}>
            <Stack>
              <TextField
                size="medium"
                select
                label="Select Customer"
                placeholder="Customer"
                SelectProps={{ native: true }}
                error={Boolean(touched.size && errors.size)}
                helperText={touched.size && errors.size}
                onChange={(event) => {
                  setCustomer(event.target.value);
                }}
              >
                {customers.map((type) => (
                  <option key={type.id} value={type.name}>
                    {type.name}
                  </option>
                ))}
              </TextField>
            </Stack>
          </Card>
        </Stack>
      </Form>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 3, sm: 2 }}
        margin={2}
        justifyContent="flex-end"
      >
        <Button size="small" variant="contained" onClick={onCreateInvoice}>
          Create Invoice
        </Button>
        <Button size="small" color="success" variant="contained">
          Export Invoice
        </Button>
      </Stack>
    </FormikProvider>
  );
}
