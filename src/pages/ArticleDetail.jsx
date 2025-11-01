import { useParams, useNavigate } from "react-router";
import { news } from "../../public/db/News";
import Typography from "@mui/material/Typography";
import { Box, Button, Container, Paper, Stack } from "@mui/material";
import { ArrowBack, CalendarMonth } from "@mui/icons-material";
import ShareButton from "../components/ShareButton";

const ArticleDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const item = news[id - 1];
  const formattedDate = item.date.toLocaleDateString("en-US", {
    month: "short", // "Sep"
    day: "numeric", // "21"
    year: "numeric", // "2025"
  });
  const currentUrl = window.location.href;

  return (
    <section className="news">
      <Container maxWidth="xl">
        <Paper sx={{ px: { xs: 2, md: 4 }, py: 3 }}>
          <Typography variant="pageHeading" mb={5}>
            {item.title}
          </Typography>
          <Typography
            gutterBottom
            sx={(theme) => ({
              fontSize: "1rem",
              display: "flex",
              alignItems: "center",
              gap: 1,
              color: theme.palette.text.bodyText,
              mb: 2,
            })}
          >
            <CalendarMonth /> {formattedDate}
          </Typography>
          <img
            src={item.img}
            alt="students with Uzb flag"
            loading="lazy"
            style={{
              maxWidth: "1000px",
              margin: "auto",
              marginBottom: "36px",
              borderRadius: 8,
            }}
          />
          <Box sx={{ maxWidth: "1000px", margin: "auto" }}>
            <Typography variant="body1" sx={{ fontSize: "1.2rem" }} mb={2}>
              {item.body}
            </Typography>
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Button
                variant="contained"
                disableElevation
                disableRipple
                onClick={() => navigate("/news")}
                startIcon={<ArrowBack />}
                sx={{
                  color: "rgba(15, 82, 186, 1)",
                  transition: "all 0.3s ease",
                  "& .MuiButton-icon": {
                    transition: "transform 0.5s ease",
                  },
                  "&:hover": {
                    background: "rgba(15, 82, 186, 1)",
                    color: "#fff",
                    "& .MuiButton-icon": {
                      transform: "translateX(-5px)",
                    },
                  },
                }}
              >
                Назад
              </Button>
              <ShareButton url={currentUrl} title={item.title} />
            </Stack>
          </Box>
        </Paper>
      </Container>
    </section>
  );
};

export default ArticleDetail;
