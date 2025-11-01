import { Container, Stack, Typography } from "@mui/material";
import CustomCard from "./CustomCard";
import { activity } from "../../public/db/Activity";

const Activity = () => {
  return (
    <section className="activity">
      <Container maxWidth="xl">
        <Typography
          variant="sectionTitle"
          component={"h2"}
          sx={(theme) => ({
            color: theme.palette.primary.text,
            "&::after": {
              backgroundColor: theme.palette.primary.text,
            },
          })}
        >
          Деятельность
        </Typography>
        <Stack
          direction={"row"}
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            justifyContent: "center",
            alignItems: "stretch",
          }}
        >
          {activity.map((item) => (
            <CustomCard key={item.title} item={item} />
          ))}
        </Stack>
      </Container>
    </section>
  );
};

export default Activity;
