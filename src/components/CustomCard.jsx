import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function CustomCard({ item }) {
  return (
    <Card
      sx={{
        cursor: "pointer",
        maxWidth: "350px",
        width: "100%",
        flex: "1 1 350px",
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
    >
      <CardMedia
        sx={{
          width: "100%",
          height: "350px",
          objectFit: "cover",
        }}
        image={item.img}
        title="students photos"
        loading="lazy"
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="h3"
          sx={(theme) => ({
            color: theme.palette.primary.text,
            fontWeight: 600,
          })}
        >
          {item.title}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            maxWidth: "100%",
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {item.body}
        </Typography>
      </CardContent>
    </Card>
  );
}
