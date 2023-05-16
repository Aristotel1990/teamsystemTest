import React, { useState } from "react";
import { Form, FormikProvider, useFormik } from "formik";
// material
import {
  Box,
  Card,
  Stack,
  TextField,
  Button,
  InputAdornment,
} from "@mui/material";
// utils
import { useDispatch, useSelector } from "../../redux/store";
import { addFakeItems, addItems, clearItems } from "../../redux/slices/data";

// ----------------------------------------------------------------------

export default function AddItemForm() {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.data);

  const [number, setNumber] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const lastElement = items?.slice(-1)[0];

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      id: lastElement?.id + 1 || 0,
      number: number || "",
      title: title || "",
      price: price,
    },
    // validationSchema: NewUserSchema,
    onSubmit: async (values, { setSubmitting, setErrors }) => {
      try {
        dispatch(addItems(values));
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
    dispatch(addFakeItems());
  };
  const clearData = () => {
    dispatch(clearItems());
  };

  const { handleSubmit, getFieldProps } = formik;
  const resetForm = () => {
    setPrice("");
    setTitle("");
    setNumber("");
  };
  return (
    <FormikProvider value={formik}>
      <Form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          spacing={{ xs: 3, sm: 2 }}
          marginX={2}
        >
          <Card sx={{ p: 3, bgcolor: "#eeffee", width: "50%" }}>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 3, sm: 2 }}
            >
              <TextField
                size="small"
                label="Number/Code"
                {...getFieldProps("number")}
                onChange={(event) => setNumber(event.target.value)}
              />
              <TextField
                size="small"
                label="Title"
                {...getFieldProps("title")}
                onChange={(event) => setTitle(event.target.value)}
              />
              <TextField
                size="small"
                label="Price"
                {...getFieldProps("price")}
                onChange={(event) => setPrice(event.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">€</InputAdornment>
                  ),
                  type: "number",
                }}
              />
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
              Add fake Items
            </Button>
            <Button color="error" variant="contained" onClick={clearData}>
              Clear all Items
            </Button>
          </Stack>
        </Stack>
      </Form>
    </FormikProvider>
  );
}
