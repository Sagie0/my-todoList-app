import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { red } from "@mui/material/colors";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: "5px",
};

export default function TaskModal({ task, toggleTask, setToggleTask }) {
  const handleClose = () => {
    setToggleTask(false);
  };

  return (
    <div className="modal">
      <Modal
        open={toggleTask}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {task.name}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {task.details}
          </Typography>
          <Button
            sx={{
              color: "#212121",
              background: red[300],
              height: "25px",
              mt: 3,
              variant: "button",
            }}
            onClick={handleClose}
          >
            X
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
