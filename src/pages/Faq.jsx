import { ExpandMore } from "@mui/icons-material";
import {
  Paper,
  Typography,
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import * as React from "react";
import { faq } from "../../public/db/Faq";

const Goverment = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <section className="goverment">
      <Container maxWidth="xl">
        <Paper sx={{ px: 4, py: 3 }}>
          <Typography variant="pageHeading">Вопросы и Ответы</Typography>
          {faq.map((item) => {
            const isOpen = expanded === item.id;
            return (
              <Accordion
                key={item.id}
                expanded={isOpen}
                onChange={handleChange(item.id)}
                sx={{
                  boxShadow: "none",
                  backgroundColor: isOpen ? "rgba(15, 82, 186, 0.1)" : "#fff",
                  mb: 2,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: isOpen
                      ? "rgba(15, 82, 186, 0.1)"
                      : "rgba(15, 82, 186, 0.05)",
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMore />}
                  aria-controls={`${item.id}-content`}
                  id={`${item.id}-header`}
                  sx={{
                    border: "none",
                    "&:hover": {
                      backgroundColor: "rgba(15, 82, 186, 0.15)",
                    },
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: isOpen ? 600 : 500,
                      color: isOpen ? "rgba(15,82,186,1)" : "text.primary",
                      transition: "color 0.3s ease",
                    }}
                  >
                    {item.title}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{item.body}</Typography>
                </AccordionDetails>
              </Accordion>
            );
          })}
        </Paper>
      </Container>
    </section>
  );
};

export default Goverment;
