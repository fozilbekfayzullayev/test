import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: "1000px",
  width: "100%",
  outline: "none",
  boxShadow: "0px 4px 15px 2px rgba(0, 0, 0, 0.35);",
};

export default function BasicModal({ url, handleClose, open }) {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ background: "rgba(49, 49, 49, 0.4)" }}
      >
        <Box sx={style}>
          <img loading="lazy" src={url} alt="" />
        </Box>
      </Modal>
    </div>
  );
}
