import React, { useEffect, useState } from "react";
import { Modal, Box, Typography, Button } from "@mui/material";
import Announcements from "./Announcements";

const WelcomeModal = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");

    if (!hasVisited) {
      setOpen(true);
      localStorage.setItem("hasVisited", "true");
    }
  }, []);

  const handleClose = () => setOpen(false);

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          maxWidth: 900,
          width: "100%",
          bgcolor: "background.paper",
          borderRadius: 3,
          boxShadow: 24,
          p: 4,
          textAlign: "center",
          outline: "none",
        }}
      >
        <Announcements />
        <Button
          onClick={handleClose}
          variant="contained"
          disableRipple
          disableElevation
          sx={(theme) => ({
            background: theme.palette.background.navbar,
            color: theme.palette.text.secondary,
            borderRadius: 0,
            fontWeight: 600,
            px: 2,
            py: 1,
            transition: "background 0.5 ease",
            "&:hover": {
              background: theme.palette.text.secondary,
              color: theme.palette.background.navbar,
            },
          })}
        >
          Закрыть
        </Button>
      </Box>
    </Modal>
  );
};

export default WelcomeModal;
