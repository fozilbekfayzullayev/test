import { Button, Container, Paper, Stack, Typography } from "@mui/material";
import { build } from "../assets";
import { about } from "../../public/db/About";
import { Link } from "react-router";

const About = () => {
  return (
    <section className="about">
      <Container maxWidth="lg">
        <Typography variant="pageHeading" mb={10}>
          Уважаемые абитуриенты!
          <br /> Приветствуем Вас на информационном сайте Совместного факультета
          ТГЭУ-ПГУ.
        </Typography>
        <Stack direction={"column"} spacing={5}>
          {about.map((item) => (
            <Paper
              key={item.title}
              elevation={0}
              sx={{
                padding: {
                  xs: "20px 30px 30px 20px",
                  md: "10px 80px 40px 40px",
                },
                background: `url(${build}) no-repeat top right`,
                backgroundSize: "contain",
                boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
                position: "relative",
                overflow: "hidden",
                "&::before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  width: "5px",
                  height: "50%",
                  background: "rgba(15, 82, 186, 1)",
                  transition: "height 0.3s ease",
                  left: 0,
                  top: 0,
                },
                "&:hover::before": {
                  height: "100%",
                },
              }}
            >
              <Typography
                sx={{ fontSize: "24px", fontWeight: 600 }}
                gutterBottom
              >
                {item.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{ maxWidth: "800px" }}
                gutterBottom
              >
                {item.body}
              </Typography>
              {item.linkPath ? (
                <Button
                  variant="contained"
                  disableElevation
                  disableRipple
                  component={Link}
                  to={item.linkPath}
                  sx={{
                    bgcolor: "transparent",
                    textDecoration: "underline",
                    color: "rgba(15, 82, 186, 1)",
                  }}
                >
                  больше
                </Button>
              ) : (
                ""
              )}
            </Paper>
          ))}
        </Stack>
      </Container>
    </section>
  );
};

export default About;
