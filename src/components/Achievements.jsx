import { Box, Container, Paper, Stack, Typography } from "@mui/material";
import { achievments } from "../../public/db/Achievments";

const Achievements = () => {
  return (
    <section className="achievements">
      <Container
        maxWidth="xl"
        sx={(theme) => ({
          color: theme.palette.primary.main,
        })}
      >
        <Typography
          variant="sectionTitle"
          component={"h2"}
          sx={(theme) => ({
            color: theme.palette.primary.text,
            "&::after": {
              backgroundColor: theme.palette.primary.text,
            },
          })}
        >
          Наши Достижения
        </Typography>
        <Stack direction={"column"} spacing={3}>
          {achievments.map((item) => (
            <Paper
              key={item.title}
              elevation={1}
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                padding: {
                  xs: "20px 20px 30px 20px",
                  md: "20px 80px 20px 20px",
                },
                gap: 3,
                background: "rgba(15, 82, 186, 0.7)",
                transition: "background 0.3s ease",
                cursor: "pointer",
                "&:hover": {
                  background: "rgba(15, 82, 186, 1)",
                },
              }}
            >
              <Box sx={{ flex: 1 }}>
                <img
                  loading="lazy"
                  src={item.img}
                  alt={item.title}
                  width={"100%"}
                />
              </Box>
              <Box sx={{ flex: 3 }}>
                <Typography variant="h5" color="primary" mb={2}>
                  {item.title}
                </Typography>
                <Typography variant="body1" color="primary">
                  {item.body}
                </Typography>
              </Box>
            </Paper>
          ))}
        </Stack>
      </Container>
    </section>
  );
};

export default Achievements;
