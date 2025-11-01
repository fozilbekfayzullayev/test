import {
  Box,
  Card,
  CardMedia,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import { partners } from "../../public/db/Partners";

const Partners = () => {
  return (
    <section className="partners">
      <Container
        maxWidth="xl"
        sx={(theme) => ({
          color: theme.palette.primary.main,
        })}
      >
        <Typography variant="sectionTitle" component={"h2"}>
          Партнеры
        </Typography>
        <Stack
          direction={"row"}
          justifyContent={"center"}
          alignItems={"stretch"}
          flexWrap={"wrap"}
          sx={{ gap: 5 }}
        >
          {partners.map((item) => (
            <Box
              key={item.alt}
              sx={(theme) => ({
                maxWidth: "250px",
                width: "100%",
                background: theme.palette.primary.main,
                padding: "20px 30px",
                borderRadius: 1,
                cursor: "pointer",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              })}
            >
              <img
                loading="lazy"
                src={item.img}
                alt={item.alt}
                width={"100%"}
              />
            </Box>
          ))}
        </Stack>
      </Container>
    </section>
  );
};

export default Partners;
