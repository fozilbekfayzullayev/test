import { Box, Container, Paper, Typography } from "@mui/material";
import { bannerTsue, logo2 } from "../assets";
import { Language } from "@mui/icons-material";
import { slidesTsue } from "../../public/db/Tsue";
import SliderPerson from "../components/SliderPerson";

const Tsue = () => {
  return (
    <section className="tsue-page">
      <Container maxWidth="xl">
        <Paper sx={{ overflow: "hidden" }}>
          <Box
            sx={{
              background: `url(${bannerTsue})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              maxHeight: "500px",
              height: "100%",
              py: { xs: 20, md: 35 },
            }}
          ></Box>
          <Box
            sx={{
              px: 4,
              py: 3,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ maxWidth: "900px" }}>
              <Typography variant="pageHeading" mb={5}>
                Ташкентский государственный экономический университет
              </Typography>
              <Typography
                variant="body1"
                component={"a"}
                href="https://tsue.uz"
                target="_blank"
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 2,
                  textTransform: "capitalize",
                  background: "rgba(15, 82, 186, 1)",
                  color: "#fff",
                  padding: "5px 10px",
                  borderRadius: "5px",
                  cursor: "pointer",
                  transition: "background 0.3s ease",
                  textDecoration: "none",
                  "&:hover": {
                    background: "#fff",
                    color: "rgba(15, 82, 186, 1)",
                  },
                }}
                mb={2}
              >
                наш сайт
                <Language />
              </Typography>
              <Typography variant="body1">
                Ташкентский государственный экономический университетa был
                образован в 1991 году в результате объединения двух факультетов
                Ташкентского университетa народного хозяйства:
                кредитно-экономического и учётно-экономического. Первым ректором
                стал действительный член Академии наук Республики Узбекистан,
                доктор экономических наук, профессор Мурад Шарифходжаев.
                Первоначально в институте было 3 очных факультета
                (финансово-экономический, кредитно-экономический и
                учётно-экономический) и 2 заочных (кредитно-экономический и
                финансово-учётный экономический факультеты), а также 20 кафедр.{" "}
                <br />
                <br />В 1999 году была создана магистратура. Осознавая важность
                международного сотрудничества, в 2019 году в институте начали
                функционировать два совместных факультета: узбекско-малайзийский
                и узбекско-белорусский.
                <br />
                <br /> Ташкентский государственный экономический университетa
                готовит востребованных на рынке труда кадров в отрасли
                экономики. Выпускники ТГЭУ строят успешную карьеру как в
                государственных учреждениях, так и в частных компаниях. По
                данным общенационального движения «Yuksalish» 5 выпускников ТГЭУ
                возглавляют государственные органы.
                <br />
                <br /> Экономическое образование позволяет выпускникам работать
                в самых разнообразных сферах деятельности. Среди них аудит,
                банковское дело, менеджмент, предпринимательство, аналитика,
                бухгалтерия, налоговые службы.
              </Typography>
            </Box>
            <Box
              sx={{
                maxWidth: "300px",
                mt: 8,
                mx: 5,
                display: { xs: "none", md: "block" },
                flexShrink: 0,
              }}
            >
              <img src={logo2} alt="Tsue logo" />
            </Box>
          </Box>
          <SliderPerson slides={slidesTsue} />
        </Paper>
      </Container>
    </section>
  );
};

export default Tsue;
