import { Grid, Paper, Typography, Box, Container } from "@mui/material";
import {
  hr,
  academic,
  socialLife,
  volunteering,
  fundraising,
  media,
} from "../assets";

const cards = [
  {
    title: "Human Resources",
    text: "Отвечает за подбор и развитие активистов",
    img: hr,
  },
  {
    title: "Fundraising",
    text: "Ищет партнеров и ресурсы для проектов",
    img: fundraising,
  },
  {
    title: "Social life",
    text: "Организует мероприятия и праздники",
    img: socialLife,
  },
  {
    title: "Academic life",
    text: "Следит за академической жизнью студентов",
    img: academic,
  },
  {
    title: "Volunteering",
    text: "Руководит волонтёрскими проектами",
    img: volunteering,
  },
  {
    title: "Media",
    text: "Ведёт социальные сети и делает контент",
    img: media,
  },
];

const Goverment = () => {
  return (
    <section className="goverment">
      <Container maxWidth="xl">
        <Paper sx={{ px: 4, py: 3 }}>
          <Typography variant="pageHeading" mb={5}>
            Студенческое самоуправление
          </Typography>
          <Typography
            variant="body1"
            mb={5}
            sx={(theme) => ({
              fontSize: "1.1rem",
              color: theme.palette.text.bodyText,
            })}
          >
            Активное участие студентов в жизни своего альма-матер – это
            неотъемлемая часть студенчества, делающая воспоминания об учебном
            заведении ярче, раскрывающая всевозможные навыки и качества,
            необходимые будущим выпускникам в их жизни.
            <br />
            <br /> Ташкентский государственный экономический университетa и
            Полоцкий государственный университет считают необходимостью
            развивать студенческую жизнь и поощрять её активных участников. В
            связи с этим, на Совместном факультете действует студенческий совет,
            принимающий участие в организации, контроле и руководстве
            деятельности факультета.
            <br />
            <br /> Основным руководящим звеном студенчества является Президент
            факультета, которого демократичным путём избирают студенты в начале
            учебного года.
            <br /> Под началом Президента действуют 6 вице-президентов по разным
            направлениям:
          </Typography>

          <Grid container spacing={2} alignItems="stretch" mb={5}>
            {cards.map((card, i) => (
              <Grid key={i} item size={{ xs: 12, md: 4 }}>
                <Paper
                  sx={{
                    width: "100%",
                    // maxWidth: "260px",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "center",
                    textAlign: "center",
                    py: 3,
                    px: 2,
                    borderRadius: "16px",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                    transition: "0.3s",
                    "&:hover": {
                      transform: "translateY(-6px)",
                      boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                    },
                  }}
                >
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: 600, color: "#374453", mb: 1 }}
                    >
                      {card.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#555" }}>
                      {card.text}
                    </Typography>
                  </Box>

                  <Box
                    component="img"
                    src={card.img}
                    alt={card.title}
                    sx={{
                      width: "180px",
                      height: "180px",
                      mt: 2,
                      objectFit: "contain",
                    }}
                  />
                </Paper>
              </Grid>
            ))}
          </Grid>
          <Typography
            variant="body1"
            mb={3}
            sx={(theme) => ({
              fontSize: "1.1rem",
              color: theme.palette.text.bodyText,
            })}
          >
            Студенты самостоятельно организовывают внутрифакультетские
            мероприятия, участвуют в организации мероприятий университетa,
            продвигают талантливых сокурсников, проходят волонтёрские стажировки
            и ведут социальные сети факультета.
            <br />
            <br /> Студенческий совет действует исключительно в рамках
            существующих правил учебного учреждения, на территории которого
            проходит их обучение, а также в тандеме со студенческими советами
            других факультетов. Любой инициативный студент имеет право
            баллотироваться в президенты или вице-президенты факультета по
            желаемому направлению.
            <br />
            <br /> Совместный факультет ТГЭУ-ПГУ – это прежде всего место, где
            инициатива поощеряема, а жадность к знаниям и самореализации
            награждаема.
          </Typography>
        </Paper>
      </Container>
    </section>
  );
};

export default Goverment;
