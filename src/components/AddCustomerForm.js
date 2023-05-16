import React, { useState } from "react";
import { Form, FormikProvider, useFormik } from "formik";
// material
import { Box, Card, Stack, TextField, Button } from "@mui/material";
// utils
import { useDispatch, useSelector } from "../redux/store";
import {
  addCustomers,
  addFakeCustomers,
  clearCustomers,
} from "../redux/slices/data";

// ----------------------------------------------------------------------

export default function AddCustomerForm() {
  const dispatch = useDispatch();
  const { customers, countries } = useSelector((state) => state.data);

  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [country, setCountry] = useState(countries[2].name);
  const lastElement = customers?.slice(-1)[0];
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      id: lastElement?.id + 1,
      number: number,
      name: name,
      country: country,
    },
    onSubmit: async (values, { setSubmitting, setErrors }) => {
      try {
        dispatch(addCustomers(values));
        resetForm();
        setSubmitting(false);
      } catch (error) {
        console.error(error);
        setSubmitting(false);
        setErrors(error);
      }
    },
  });
  const addfakeData = () => {
    dispatch(addFakeCustomers());
  };
  const clearData = () => {
    dispatch(clearCustomers());
  };
  const resetForm = () => {
    setName("");
    setNumber("");
  };
  const { handleSubmit, getFieldProps, touched, errors } = formik;

  return (
    <FormikProvider value={formik}>
      <Form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          spacing={{ xs: 3, sm: 2 }}
        >
          <Card sx={{ p: 3, bgcolor: "#eeffee", width: "50%" }}>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 3, sm: 2 }}
            >
              <TextField
                size="small"
                label="Number"
                {...getFieldProps("number")}
                onChange={(event) => setNumber(event.target.value)}
              />

              <TextField
                size="small"
                label="Name"
                {...getFieldProps("name")}
                onChange={(event) => setName(event.target.value)}
              />

              <TextField
                size="small"
                select
                label="Country"
                placeholder="Country"
                {...getFieldProps("country")}
                SelectProps={{ native: true }}
                error={Boolean(touched.size && errors.size)}
                helperText={touched.size && errors.size}
                onChange={(event) => {
                  setCountry(event.target.value);
                }}
              >
                {countries.map((type) => (
                  <option key={type.name} value={type.name}>
                    {type.name}
                  </option>
                ))}
              </TextField>
              <Box sx={{ mt: 3, display: "flex", justifyContent: "flex-end" }}>
                <Button type="submit" variant="contained">
                  Add
                </Button>
              </Box>
            </Stack>
          </Card>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 3, sm: 2 }}
            alignItems="center"
          >
            <Button variant="contained" onClick={addfakeData}>
              Add fake customers
            </Button>
            <Button color="error" variant="contained" onClick={clearData}>
              Clear all customers
            </Button>
          </Stack>
        </Stack>
      </Form>
    </FormikProvider>
  );
}
