import { Box, Container, Paper, Stack, Typography } from "@mui/material";
import Location from "../components/Location";

const Contact = () => {
  return (
    <section className="partners-page">
      <Container maxWidth="xl">
        <Paper sx={{ px: 4, py: 3 }}>
          <Typography variant="pageHeading" mb={5}>
            Контакты
          </Typography>
          <Stack
            direction={{ xs: "column", md: "row" }}
            justifyContent={"space-between"}
            spacing={2}
            sx={{ flex: 1 }}
            mb={5}
          >
            <Box>
              <Typography fontWeight={600} fontSize={{ xs: 16, md: 18 }}>
                Деканат:
              </Typography>
              <Typography fontSize={{ xs: 14, md: 16 }}>
                +998 71 234-01-36
              </Typography>
            </Box>

            <Box>
              <Typography fontWeight={600} fontSize={{ xs: 16, md: 18 }}>
                Приёмная комиссия:
              </Typography>
              <Typography fontSize={{ xs: 14, md: 16 }}>
                +998 71 234-06-75
                <br />
                +998 71 234-01-91
                <br />
                +998 71 235-12-91
                <br />
                +998 71 235-13-21
                <br />
                +998 71 235-50-66
              </Typography>
            </Box>

            <Box>
              <Typography fontWeight={600} fontSize={{ xs: 16, md: 18 }}>
                Мы в сети:
              </Typography>
              <Typography fontSize={{ xs: 14, md: 16 }}>
                Telegram: @tfipgu
                <br />
                Instagram: @tfi_pgu
              </Typography>
            </Box>

            <Box>
              <Typography fontWeight={600} fontSize={{ xs: 16, md: 18 }}>
                Адрес:
              </Typography>
              <Typography fontSize={{ xs: 14, md: 16 }}>
                Узбекистан проспект 51, Ташкент, Tashkent
              </Typography>
            </Box>
          </Stack>
          <Location />
        </Paper>
      </Container>
    </section>
  );
};

export default Contact;
