import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

const SliderPerson = ({ slides }) => {
  return (
    <div
      style={{
        padding: "20px 20px 60px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Swiper
        modules={[FreeMode]}
        freeMode={true}
        grabCursor={true}
        slidesPerView={"auto"}
        spaceBetween={16}
        className="mySliderPerson"
        style={{ padding: "20px" }}
      >
        {slides.map((s) => (
          <SwiperSlide
            key={s.id}
            style={{
              width: 450, // 'auto' view will use this width; o'zgartiring
              minHeight: 600,
              height: "100%",
              borderRadius: 12,
              overflow: "hidden",
              boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
              background: "#fff",
              marginBottom: "100px",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "stretch",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  flex: "0 0 60%",
                  background: `url(${s.img}) center/cover no-repeat`,
                }}
              />
              <div style={{ padding: 12, flex: "1 1 auto" }}>
                <h4 style={{ margin: 0, fontSize: "1.5rem" }}>{s.title}</h4>
                <p style={{ margin: "6px 0 0", fontSize: "1rem" }}>{s.desc}</p>
                <p style={{ margin: "6px 0 0", fontSize: "1rem" }}>
                  {s.degree}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderPerson;
