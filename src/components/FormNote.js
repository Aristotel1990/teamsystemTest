import { useState } from "react";
import dayjs from "dayjs";
import { Form, FormikProvider, useFormik } from "formik";
// material
import { Box, Card, Stack, TextField, Button } from "@mui/material";
// utils
import { useDispatch, useSelector } from "../redux/store";
import { addNotes } from "../redux/slices/notes";
import { Select } from "@mui/material";
import { InputLabel } from "@mui/material";
import { FormControl } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

// ----------------------------------------------------------------------

export default function FormNote() {
  const dispatch = useDispatch();
  const { notes } = useSelector((state) => state.notes);
  const IMPORTANT = ["Important", "Very important", "Not important"];

  const [value, setValue] = useState(new Date());
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      id: notes.length,
      title: "",
      date: value,
      important: "Important",
      note: "",
    },
    // validationSchema: NewUserSchema,
    onSubmit: async (values, { setSubmitting, resetForm, setErrors }) => {
      try {
        dispatch(addNotes(values));
        resetForm();
        setSubmitting(false);
      } catch (error) {
        console.error(error);
        setSubmitting(false);
        setErrors(error);
      }
    },
  });

  const { handleSubmit, isSubmitting, setFieldValue, getFieldProps } = formik;

  return (
    <FormikProvider value={formik}>
      <Form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <Card sx={{ p: 3, bgcolor: "#eeffee" }}>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 3, sm: 2 }}
          >
            <TextField size="small" label="Title" {...getFieldProps("title")} />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateTimePicker
                renderInput={(props) => <TextField size="small" {...props} />}
                label="Select Time and Date"
                {...getFieldProps("date")}
                format="yyyy-MM-dd HH:mm:ss"
                onChange={(newValue) => {
                  setFieldValue(
                    "date",
                    dayjs(newValue).format("YYYY-MM-DDTHH:mm")
                  );
                  setValue(dayjs(newValue).format("YYYY-MM-DDTHH:mm"));
                }}
              />
            </LocalizationProvider>
            <FormControl size="small">
              <InputLabel>Important</InputLabel>
              <Select label="Important" native {...getFieldProps("important")}>
                {IMPORTANT.map((classify) => (
                  <option key={classify} value={classify}>
                    {classify}
                  </option>
                ))}
              </Select>
            </FormControl>
          </Stack>
          <Stack
            marginTop={5}
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 3, sm: 2 }}
          >
            <TextField
              fullWidth
              label="Text"
              multiline
              rows={6}
              {...getFieldProps("note")}
              placeholder="Add text"
            />
          </Stack>
          <Box sx={{ mt: 3, display: "flex", justifyContent: "flex-end" }}>
            <Button type="submit" variant="contained" loading={isSubmitting}>
              Add Note
            </Button>
          </Box>
        </Card>
      </Form>
    </FormikProvider>
  );
}
