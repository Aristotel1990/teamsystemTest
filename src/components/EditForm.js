import { useState } from "react";
import dayjs from "dayjs";
import { Form, FormikProvider, useFormik } from "formik";
// material
import { Box, Card, Stack, TextField, Button } from "@mui/material";
// utils
import { useDispatch } from "../redux/store";
import { editNote } from "../redux/slices/notes";
import { Select } from "@mui/material";
import { InputLabel } from "@mui/material";
import { FormControl } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

// ----------------------------------------------------------------------

export default function EditForm({ note, close }) {
  const dispatch = useDispatch();
  const IMPORTANT = ["Important", "Very important", "Not important"];

  const [setValue] = useState(new Date());
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      id: note.id,
      title: note.title,
      date: note.date,
      important: note.important,
      note: note.note,
    },
    onSubmit: async (values, { setSubmitting, resetForm, setErrors }) => {
      try {
        dispatch(editNote(values));
        close();
        resetForm();
        setSubmitting(false);
      } catch (error) {
        console.error(error);
        setSubmitting(false);
        setErrors(error);
      }
    },
  });

  const { values, handleSubmit, isSubmitting, setFieldValue, getFieldProps } =
    formik;

  return (
    <FormikProvider value={formik}>
      <Form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <Card sx={{ p: 3, bgcolor: "#F7EFD2" }}>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 3, sm: 2 }}
          >
            <TextField size="small" label="Title" {...getFieldProps("title")} />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateTimePicker
                renderInput={(props) => <TextField size="small" {...props} />}
                label="DateTimePicker"
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
              <Select
                label="Important"
                native
                {...getFieldProps("important")}
                value={values.important}
              >
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
              size="small"
              label="Note"
              multiline
              rows={6}
              {...getFieldProps("note")}
            />
          </Stack>

          <Box sx={{ mt: 3, display: "flex", justifyContent: "flex-end" }}>
            <Button type="submit" variant="contained" loading={isSubmitting}>
              Save
            </Button>
          </Box>
        </Card>
      </Form>
    </FormikProvider>
  );
}
