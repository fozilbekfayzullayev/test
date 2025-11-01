import { Container, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import NewsCard from "../components/NewsCard";
import { news } from "../../public/db/News";

const News = () => {
  return (
    <section className="news">
      <Container maxWidth="xl">
        <Paper sx={{ px: { xs: 2, md: 4 }, py: 3 }}>
          <Typography variant="pageHeading" mb={5}>
            Новости
          </Typography>
          <Stack
            direction={"row"}
            flexWrap={"wrap"}
            justifyContent={"center"}
            gap={2}
          >
            {news.map((item) => (
              <NewsCard key={item.id} item={item} />
            ))}
          </Stack>
        </Paper>
      </Container>
    </section>
  );
};

export default News;
