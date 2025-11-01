import {
  Box,
  Container,
  Paper,
  Stack,
  Typography,
  IconButton,
  Button,
} from "@mui/material";
import { logo1, logo2 } from "../assets";
import { Download } from "@mui/icons-material";
import { Link } from "react-router";

const PartnersPage = () => {
  return (
    <section className="partners-page">
      <Container maxWidth="xl">
        <Paper sx={{ px: 4, py: 3 }}>
          <Typography variant="pageHeading" mb={10}>
            Вузы Партнеры
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={5}
            alignItems={"center"}
            justifyContent={"space-evenly"}
            mb={6}
          >
            <Box sx={{ maxWidth: "400px" }}>
              <img src={logo2} alt="University2" />
            </Box>
            <Box sx={{ maxWidth: "400px" }}>
              <img src={logo1} alt="University1" />
            </Box>
          </Stack>
          <Typography variant="body1" mb={2}>
            Сотрудничество Ташкентского государственного экономического
            университета и Полоцкого государственного университета завязалось в
            ходе первого визита Юрия Петровича Голубева, проректора по учебной
            работе ПГУ. Стороны были заинтересованы в развитии двухсторонних
            отношений. В связи с этим, с 22 по 22 января 2019 года Ташкентский
            государственный экономический университетa посетили декан факультета
            «Финансы-экономика», доцент Лавриненко Анна Ростиславовна и
            заведующая кафедрой учёта, финансов, логистики и менеджмента к.э.н.,
            доцент Малей Елена Борисовна. В ходе визита обсуждались наиболее
            оптимальные условия осуществления совместных образовательных
            программ.
          </Typography>
          <Typography variant="body1" mb={4}>
            И уже 5 июля 2019 года был подписан ряд документов, официально
            закрепляющих сотрудничество Ташкентского государственного
            экономического университета и Полоцкого государственного
            университета, среди них: программ.
          </Typography>

          <Box
            sx={{
              border: "1px solid rgba(85, 85, 85, 0.5)",
              px: 3,
              py: 2,
            }}
            mb={4}
          >
            <Stack
              direction={"row"}
              spacing={5}
              alignItems={"center"}
              sx={{ pb: 3, mb: 3, borderBottom: "1px solid #999" }}
            >
              <Box>
                <Typography
                  variant="h6"
                  component={"h3"}
                  sx={{ fontWeight: 600 }}
                >
                  Договор
                </Typography>
                <Typography variant="body2">
                  ДОГОВОР о совместной подготовке кадров между учреждением
                  образования «Полоцкий государственный университет» (г.
                  Новополоцк, Республика Беларусь) и высшим учебным заведением
                  «Ташкентский государственный экономический университетa» (г.
                  Ташкент, Республика Узбекистан)
                </Typography>
              </Box>
              <IconButton
                aria-label="download"
                component="a"
                href="https://sf-tsue-pgu.uz/static/files/dogovor-o-sovmestnoj-podgotovke-kadrov.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download sx={{ color: "rgba(15, 82, 186, 1)" }} />
              </IconButton>
            </Stack>

            <Stack direction={"row"} spacing={5} alignItems={"center"}>
              <Box>
                <Typography
                  variant="h6"
                  component={"h3"}
                  sx={{ fontWeight: 600 }}
                >
                  Дополнительное соглашение
                </Typography>
                <Typography variant="body2">
                  ДОПОЛНИТЕЛЬНОЕ СОГЛАШЕНИЕ №3 к Договору о совместной
                  подготовке кадров между учреждением образования «Полоцкий
                  государственный университет» и высшим учебным заведением
                  «Ташкентский государственный экономический университетa».
                </Typography>
              </Box>
              <IconButton
                aria-label="download"
                component="a"
                href="https://sf-tsue-pgu.uz/static/files/dopolnitelnoe-soglashenie-3-k-dogovoru-.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download sx={{ color: "rgba(15, 82, 186, 1)" }} />
              </IconButton>
            </Stack>
          </Box>

          <Typography variant="body1" mb={2}>
            Совместный факультет ТГЭУ-ПГУ осуществляет деятельность с целью
            подготовки высококвалифицированных конкурентоспособных кадров по
            направлениям «Финансы и кредит» и «Бухгалтерский учёт и аудит». По
            окончанию обучения студенты становятся обладателями двойных
            дипломов.
          </Typography>

          <Typography variant="body1" mb={4}>
            Обучение на совместной программе предполагает получение незаменимого
            опыта и фундаментальных знаний, необходимых для построения успешной
            карьеры на международном уровне.
          </Typography>
          <Button
            variant="contained"
            disableElevation
            disableRipple
            component={Link}
            to={"/docs"}
            sx={{
              bgcolor: "transparent",
              textDecoration: "underline",
              color: "rgba(15, 82, 186, 1)",
            }}
          >
            Смотреть все Нормативные документы
          </Button>
        </Paper>
      </Container>
    </section>
  );
};

export default PartnersPage;
