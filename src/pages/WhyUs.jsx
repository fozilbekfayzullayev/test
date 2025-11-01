import { CheckCircleOutline } from "@mui/icons-material";
import { Paper, Typography, Box, Container, Card, List } from "@mui/material";

const Goverment = () => {
  const priority = [
    { item: "Воспитать прогрессивную инициативную молодёжь." },
    { item: "Предложить рынку труда конкурентоспособные кадры." },
    {
      item: "Разработать принципиально новые современные методы подготовки специалистов.",
    },
    {
      item: "Настроить сотрудничество между Республикой Узбекистан и Республикой Беларусь.",
    },
    { item: "Повысить экономическую грамотность среди молодёжи." },
  ];

  return (
    <section className="goverment">
      <Container maxWidth="xl">
        <Paper sx={{ px: 4, py: 3 }}>
          <Typography variant="pageHeading">Почему мы?</Typography>
          <Card
            sx={{
              width: "100%",
              maxWidth: 800,
              mx: "auto",
              borderRadius: 3,
              overflow: "hidden",
              boxShadow: 3,
              marginBottom: "36px",
            }}
          >
            <Box
              sx={{
                position: "relative",
                paddingTop: "56.25%", // 16:9 aspect ratio (height/width)
              }}
            >
              <Box
                component="iframe"
                src="https://sf-tsue-pgu.uz/static/images/pgu/gallery/why-us.mp4"
                title="Responsive Video"
                allowFullScreen
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  border: 0,
                }}
              />
            </Box>
          </Card>
          <Typography
            variant="h6"
            sx={(theme) => ({
              color: theme.palette.text.primary,
              fontWeight: 600,
            })}
            gutterBottom
          >
            Главная цель Совместного факультета – внести свой вклад в
            экономическое развитие Республики Узбекистан и международного
            сообщества.
          </Typography>
          <Typography variant="body1" mb={5}>
            Мы предлагаем актуальный выбор специальностей для тех, кто желает
            стать универсальным профессионалом в экономической сфере
            деятельности..
            <br /> Симбиоз традиций обучения стран-партнёров позволяет
            Совместному факультету предоставлять студентам качественное
            образование и стать дипломированным специалистом в финансовой и
            бухгалтерской сферах деятельности.
            <br /> Наши студенты получают необходимые знания по таким
            дисциплинам, как: психология управления, международное бизнес-право,
            банковское дело и так далее.
          </Typography>

          <Box>
            <Typography variant="h6">Наши приоритеты:</Typography>
            <List>
              {priority.map((item) => (
                <li
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 5,
                    marginBottom: 1,
                  }}
                >
                  <CheckCircleOutline color="success" /> {item.item}
                </li>
              ))}
            </List>
          </Box>
        </Paper>
      </Container>
    </section>
  );
};

export default Goverment;
