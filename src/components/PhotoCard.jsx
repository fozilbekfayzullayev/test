import {
  Card,
  CardHeader,
  CardMedia,
  IconButton,
  Tooltip,
} from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";

const PhotoCard = ({ photos, imageHandler }) => {
  const formattedDate = photos.date.toLocaleDateString("en-US", {
    month: "short", // "Sep"
    day: "numeric", // "21"
    year: "numeric", // "2025"
  });

  return (
    <Card
      sx={{
        maxWidth: "344px",
        width: "100%",
        flex: "1 1 344px",
        transition: "transform 0.3s ease",
        background: "#E9EEF6",
        "&:hover": { transform: "scale(1.025)" },
        boxShadow: "none",
        borderRadius: "10px",
        px: 2,
        pb: 2,
        pt: 1,
      }}
    >
      <CardHeader
        title={
          <Tooltip title={photos.title}>
            <span>{photos.title}</span>
          </Tooltip>
        }
        subheader={formattedDate}
        action={
          <IconButton aria-label="settings" disableRipple>
            <PhotoCamera />
          </IconButton>
        }
        sx={{
          py: 1,
          "& .MuiTypography-root": {
            fontSize: 14,
            fontWeight: 600,
            maxWidth: 200,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          },
          "& .MuiTypography-body1": {
            fontSize: 12,
            color: "#666",
            fontWeight: 400,
          },
        }}
      />

      <CardMedia
        title={photos.title}
        image={photos.img}
        sx={{ height: "300px", cursor: "zoom-in", borderRadius: "10px" }}
        onClick={() => imageHandler(photos.img)}
        loading="lazy"
      />
    </Card>
  );
};

export default PhotoCard;
