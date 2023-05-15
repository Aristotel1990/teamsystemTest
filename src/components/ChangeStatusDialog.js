import PropTypes from "prop-types";
import { useRef, useState } from "react";
import { useFormik, Form, FormikProvider } from "formik";
// material
import { formatStatus } from "../utils/formatStatus";

// material
import { Menu, Button, TextField, Typography, Stack } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useDispatch } from "../redux/store";
import { editInvoice } from "../redux/slices/data";
// routes

// utils
// ----------------------------------------------------------------------

ChangeStatusDialog.propTypes = {
  params: PropTypes.object,
};

export default function ChangeStatusDialog({ params }) {
  const ref = useRef(null);
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);

  const onChangeStatus = async (status) => {
    if (status === "Confirmed") {
      dispatch(editInvoice({ id: params.row.id, newStatus: "Confirmed" }));
      setIsOpen(false);
    } else if (status === "Draft") {
      dispatch(editInvoice({ id: params.row.id, newStatus: "Draft" }));
      setIsOpen(false);
    } else if (status === "Reversed") {
      dispatch(editInvoice({ id: params.row.id, newStatus: "Reversed" }));
      setIsOpen(false);
    } else if (status === "Completed") {
      dispatch(editInvoice({ id: params.row.id, newStatus: "Completed" }));
      setIsOpen(false);
    }
    return null;
  };
  return (
    <>
      <Button ref={ref} onClick={() => setIsOpen(true)}>
        Edit
      </Button>

      <Menu
        open={isOpen}
        anchorEl={ref.current}
        onClose={() => setIsOpen(false)}
        PaperProps={{
          sx: { width: 280, maxWidth: "100%" },
        }}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Stack
          padding={2}
          direction={{ xs: "column", sm: "column" }}
          spacing={{ xs: 3, sm: 2 }}
        >
          <LoadingButton
            fullWidth
            onClick={() => onChangeStatus("Draft")}
            variant="contained"
          >
            Draft
          </LoadingButton>

          <LoadingButton
            onClick={() => onChangeStatus("Completed")}
            color="warning"
            type="submit"
            variant="contained"
          >
            Completed
          </LoadingButton>
          <LoadingButton
            fullWidth
            color="success"
            onClick={() => onChangeStatus("Confirmed")}
            variant="contained"
          >
            Confirmed
          </LoadingButton>

          <LoadingButton
            onClick={() => onChangeStatus("Reversed")}
            color="error"
            variant="contained"
          >
            Reversed
          </LoadingButton>
        </Stack>
      </Menu>
    </>
  );
}
