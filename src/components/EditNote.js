import { useState } from "react";
import EditForm from "./EditForm";
import Popover from "@mui/material/Popover";
import Button from "@mui/material/Button";

export default function EditNote({ note }) {
  const [open, setOpen] = useState(false);

  const handleClick = (event) => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="outlined"
        color="success"
        size="small"
        onClick={handleClick}
      >
        Edit Note
      </Button>
      <Popover
        id={note.id}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <EditForm note={note} close={handleClose} />
      </Popover>
    </div>
  );
}
