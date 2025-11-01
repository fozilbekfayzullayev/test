import { Container, Paper, Typography } from "@mui/material";
import { img7 } from "../assets";

const Courses = () => {
  return (
    <section className="courses-page">
      <Container maxWidth="xl">
        <Paper sx={{ px: { xs: 1.2, md: 3 }, py: 3, pb: 7 }}>
          <Typography variant="pageHeading" mb={5}>
            Подготовительные курсы ТФИ-ПГУ на 2025-2026г.
          </Typography>
          <img
            src={img7}
            alt="students with Uzb flag"
            style={{ maxWidth: "1000px", margin: "auto", marginBottom: "36px" }}
            loading="lazy"
          />
          <Typography
            variant="body1"
            sx={{ fontSize: "1.2rem", maxWidth: "1000px", margin: "auto" }}
          >
            Совместный факультет Ташкентского государственного экономического
            университета и Полоцкого государственного университета приглашают
            абитуриентов на подготовительный курс. Абитуриенты, успешно
            окончившие подготовительный курс, зачисляются непосредственно на
            совместный факультет ТГЭУ-ПГУ
          </Typography>
        </Paper>
      </Container>
    </section>
  );
};

export default Courses;
