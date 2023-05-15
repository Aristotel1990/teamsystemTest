import React, { useState } from "react";
import { Form, FormikProvider, useFormik } from "formik";
// material
import {
  Box,
  Card,
  Stack,
  TextField,
  Button,
  Radio,
  Alert,
  AlertTitle,
} from "@mui/material";
// utils
import { useDispatch, useSelector } from "../redux/store";
import {
  addData,
  clearCustomers,
  clearSingleinvoice,
  createData,
  createInoices,
} from "../redux/slices/data";
import ConvertToCSV from "./ConvertToCSV";

// ----------------------------------------------------------------------

export default function AddInvoiceForm() {
  const dispatch = useDispatch();
  const { customers, items, singleInvoice, invoices, data } = useSelector(
    (state) => state.data
  );

  const [item, setItem] = useState(items[0]);
  const [quantity, setQuantity] = useState(0);
  const [customer, setCustomer] = useState("");
  const total = singleInvoice.reduce((a, v) => (a = a + v.total), 0);
  const nr = singleInvoice.reduce((a, v) => (a = a + v.quantity), 0);
  const [alert, setAlert] = useState(false);

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
    onSubmit: async (values, { setSubmitting, setErrors }) => {
      try {
        await dispatch(addData(values));
        resetForm();
        setSubmitting(false);
      } catch (error) {
        console.error(error);
        setSubmitting(false);
        setErrors(error);
      }
    },
  });
  const onCreateInvoice = async () => {
    const newData = {
      id: data?.length + 1,
      number: data.length + 1,
      date: new Date(),
      customer: customer,
      email: "test@t.com",
      paymenta: "",
      accounting: nr,
      status: "Completed",
      total: total,
    };

    await dispatch(createInoices(newData));
    setAlert(true);
    dispatch(createData(singleInvoice));
  };
  const onAlert = () => {
    return (
      <>
        <Alert onClose={() => setAlert(false)}>
          Invoice is created — check it out!
        </Alert>
      </>
    );
  };
  const onSelectedItem = (id) => {
    const select = items.find((i) => i.id.toString() === id);
    setItem(select);
  };
  const resetForm = () => {
    setItem(items[0]);
    setQuantity(0);
  };
  const { errors, touched, handleSubmit, getFieldProps } = formik;

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
                value={quantity}
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
        <ConvertToCSV array={singleInvoice} total={total} />
      </Stack>
      {alert ? onAlert() : ""}
    </FormikProvider>
  );
}
