import { Box, Container, Paper, Typography } from "@mui/material";
import { bannerPsu, logo1 } from "../assets";
import { Language } from "@mui/icons-material";
import { slidesPsu } from "../../public/db/Psu";
import SliderPerson from "../components/SliderPerson";

const Tsue = () => {
  return (
    <section className="psu-page">
      <Container maxWidth="xl">
        <Paper sx={{ overflow: "hidden" }}>
          <Box
            sx={{
              background: `url(${bannerPsu})`,
              flex: "0 0 5%",
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
                Полоцкий государственный университет имени Евфросинии Полоцкой
              </Typography>
              <Typography
                variant="body1"
                component={"a"}
                href="https://www.psu.by"
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
                Имя Полоцкого государственного университета звучит в честь
                одного из древнейших городов Восточной Европы. Впервые в
                исторических источниках Полоцк упоминается под 862 годом, так
                что этот город имеет полное право считаться старейшим культурным
                и духовным центром страны.
                <br />
                <br /> В 1581 году здесь был основан Полоцкий иезуитский
                коллегиум. А в 1812 году на его основе была учреждена Полоцкая
                иезуитская академия, которая стала первым учебным заведением на
                территории современной Беларуси.
                <br />
                <br /> Новополоцк, современный индустриальный город, возник в
                1958 году неподалёку от Полоцка. Через 10 лет здесь было создано
                высшее учебное заведение – Новополоцкий политехнический
                институт, который в своё время считался крупным образовательным
                центром. В Полоцкий государственный университет НПИ был
                преобразован в 1933 году. Корни университета уходят в далёкое
                прошлое, а стремительное развитие его учёной и образовательной
                деятельности позволяет считать университет одним из передовых и
                прогрессивных среди высших учебных заведений белорусской земли.
                <br />
                <br />
                Одним из важнейших приоритетов ПГУ считает развитие
                международной деятельности, благодаря чему университет повышает
                уровень авторитета на мировой образовательной площадке.
                <br />
                <br />
                Особенностью Полоцкого университета можно считать активную
                студенческую жизнь. Университет предоставляет студентам
                возможность реализовывать свой творческий потенциал и раскрывать
                всевозможные способности. В университете пользуются
                популярностью сольные и хореографические коллективы, клуб
                интеллектуальных игр и КВН, заслуженный студенческий театр
                «Арт».
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
              <img src={logo1} alt="Tsue logo" />
            </Box>
          </Box>
          <SliderPerson slides={slidesPsu} />
        </Paper>
      </Container>
    </section>
  );
};

export default Tsue;
