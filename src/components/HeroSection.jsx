import { Box, Typography, Button, Stack } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import { heroSlides } from "../../public/db/HeroSlides";
import { Link, useNavigate } from "react-router";
import {
  AccountBalance,
  CalendarMonth,
  EmojiEvents,
  School,
} from "@mui/icons-material";

const dots = [
  { id: 1, icon: <AccountBalance />, text: "ТГЭУ-ПГУ" },
  { id: 2, icon: <School />, text: "Приём" },
  { id: 3, icon: <CalendarMonth />, text: "Квоты" },
  { id: 4, icon: <EmojiEvents />, text: "ТГЭУ-ПГУ" },
];

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <div style={{ position: "relative" }}>
      <Stack
        direction={"row"}
        gap={5}
        sx={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          bottom: "30px",
          zIndex: 999,
          display: { xs: "none", md: "flex" },
        }}
      >
        {dots.map((item) => (
          <Box
            key={item.id}
            sx={{
              background: "#fff",
              width: 90,
              height: 90,
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              padding: 1,
              cursor: "pointer",
              transition: "opacity 0.3s ease",
              "&:hover": {
                opacity: 0.7,
              },
            }}
            onClick={() => navigate("/")}
          >
            {item.icon}
            <p style={{ margin: 0, fontSize: 12, textTransform: "uppercase" }}>
              {item.text}
            </p>
          </Box>
        ))}
      </Stack>
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
    </div>
  );
}
