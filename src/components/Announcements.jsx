import { Container, Stack, Typography } from "@mui/material";
import React from "react";

const Announcements = () => {
  const list = [
    {
      id: 1,
      text: "СОП ТГЭУ-ПГУ (Ташкентского государственного экономического университета - Полоцкого государственного университета)",
    },
    {
      id: 2,
      text: "СОП ТГЭУ – ФИНУНИВЕРСИТЕТ (Ташкентского государственного экономического университета - Финансового университета при Правительстве Российской Федерации",
    },
    {
      id: 3,
      text: "СОП ТГЭУ – ВАВТ (Ташкентского государственного экономического университета - Всероссийской академии внешней торговли)",
    },
    {
      id: 4,
      text: "СОП ТГЭУ – ТГУПБП (Ташкентского государственного экономического университета - Таджикиского государственного университетa права, бизнеса и политики)",
    },
    {
      id: 5,
      text: "СОП ТГЭУ – КЭУ (Ташкентского государственного экономического университета - Кыргызский экономический университет)",
    },
    {
      id: 6,
      text: "СОП ТГЭУ – ПИМТ (Ташкентского государственного экономического университета - Пражского института менеджмента и технологий)",
    },
  ];

  return (
    <section className="announcements">
      <Container maxWidth="xl">
        <Typography
          component={"h2"}
          sx={(theme) => ({
            color: theme.palette.background.navbar,
            fontSize: "32px",
            fontWeight: 600,
            mb: 2,
          })}
        >
          ОБЪЯВЛЕНИЕ!!!
        </Typography>
        <Typography variant="body1" sx={{ fontWeight: 600 }}>
          СОВМЕСТНЫЕ ОБРАЗОВАТЕЛЬНЫЕ ПРОГРАММЫ:
        </Typography>
        <ul style={{ textAlign: "left" }}>
          {list.map((item) => (
            <li key={item.id}>{item.text}</li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default Announcements;
