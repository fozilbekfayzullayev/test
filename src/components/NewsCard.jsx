import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { CalendarMonth } from "@mui/icons-material";
import { useNavigate } from "react-router";

const NewsCard = ({ item }) => {
  const navigate = useNavigate();
  const formattedDate = item.date.toLocaleDateString("en-US", {
    month: "short", // "Sep"
    day: "numeric", // "21"
    year: "numeric", // "2025"
  });
  return (
    <Card
      sx={{
        cursor: "pointer",
        position: "relative",
        maxWidth: "344px",
        width: "100%",
        flex: "1 1 344px",
        transition: "all 0.3s ease",
        boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 2px 0px",
        borderBottom: "5px solid transparent",
        "&:hover": {
          boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px",
          borderBottomColor: "rgba(15, 82, 186, 1)",
          "& .MuiTypography-root": {
            color: "#003B81",
          },
        },
      }}
      onClick={() => navigate(`/news/${item.id}`)}
    >
      <CardMedia
        sx={{
          width: "100%",
          height: "230px",
          objectFit: "cover",
        }}
        image={item.img}
        title="news photos"
        loading="lazy"
      />
      <CardContent>
        <Typography
          gutterBottom
          component="h3"
          sx={(theme) => ({
            color: theme.palette.primary.text,
            fontWeight: 600,
            fontSize: "1.1rem",
            mb: 4,
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          })}
        >
          {item.title}
        </Typography>
        <Typography
          gutterBottom
          variant="body1"
          sx={(theme) => ({
            fontSize: "0.825rem",
            display: "flex",
            alignItems: "center",
            gap: 1,
            color: theme.palette.text.bodyText,
            position: "absolute",
            bottom: 5,
          })}
        >
          <CalendarMonth /> {formattedDate}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default NewsCard;
