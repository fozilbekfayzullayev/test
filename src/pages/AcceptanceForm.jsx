import { Container, Paper, Typography } from "@mui/material";
import Form from "../components/Form";
import React from "react";

const AcceptanceForm = () => {
  return (
    <section className="acceptance-page">
      <Container maxWidth="xl">
        <Paper sx={{ px: 4, py: 3 }}>
          <Typography variant="pageHeading" mb={3}>
            Приём СОП – бакалавриат ТГЭУ-ПГУ
          </Typography>
          <Form />
        </Paper>
      </Container>
    </section>
  );
};

export default AcceptanceForm;
