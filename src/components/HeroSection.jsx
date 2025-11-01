import { Box, Typography, Button } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import { heroSlides } from "../../public/db/HeroSlides";
import { Link } from "react-router";

export default function HeroSection() {
  return (
    <Swiper
      navigation={true}
      modules={[Autoplay]}
      autoplay={{ delay: 4000 }}
      loop
      style={{ width: "100%", height: "70vh" }}
      className="hero"
    >
      {heroSlides.map((slide, index) => (
        <SwiperSlide key={index}>
          <Box
            sx={(theme) => ({
              height: "70vh",
              // backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              px: { xs: 2, sm: 5, md: 8 },
              color: theme.palette.text.secondary,
              // textShadow: "0 2px 6px rgba(0,0,0,0.6)",
            })}
          >
            <Typography
              variant="h2"
              sx={{
                fontWeight: "bold",
                mb: 2,
                maxWidth: "900px",
                textTransform: "capitalize",
              }}
            >
              {slide.title}
            </Typography>
            <Typography
              component={"p"}
              sx={{
                mb: 3,
                maxWidth: "1000px",
                fontSize: 18,
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {slide.subtitle}
            </Typography>
            <Button
              component={Link}
              to={"/about"}
              variant="contained"
              disableRipple
              disableElevation
              sx={(theme) => ({
                background: theme.palette.background.navbar,
                color: theme.palette.text.secondary,
                borderRadius: 0,
                fontWeight: 600,
                px: 2,
                py: 1,
                transition: "background 0.5 ease",
                "&:hover": {
                  background: theme.palette.text.secondary,
                  color: theme.palette.background.navbar,
                },
              })}
            >
              Читать далее
            </Button>
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
