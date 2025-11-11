import { Close } from "@mui/icons-material";
import { IconButton, Pagination, Zoom } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   maxWidth: "1000px",
//   width: "100%",
//   outline: "none",
//   boxShadow: "0px 4px 15px 2px rgba(0, 0, 0, 0.35);",
// };

export default function BasicModal({ images, handleClose, open, startIndex }) {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ background: "rgba(49, 49, 49, 0.4)" }}
      >
        <Box
          sx={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100vw",
            height: "100vh",
            bgcolor: "rgba(0, 0, 0, 0.9)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Close button */}
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: 20,
              right: 20,
              color: "#fff",
              zIndex: 10,
            }}
          >
            <Close fontSize="large" />
          </IconButton>

          {/* Swiper Slider */}
          <Swiper
            navigation={true}
            modules={[Navigation]}
            initialSlide={startIndex}
            style={{
              width: "90vw",
              height: "80vh",
            }}
          >
            {images.map((item) => (
              <SwiperSlide
                key={item.id}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  userSelect: "none",
                  WebkitUserSelect: "none",
                  MozUserSelect: "none",
                  msUserSelect: "none",
                }}
              >
                <img
                  src={item.img}
                  alt={`slide-${item.id}`}
                  style={{
                    maxHeight: "80vh",
                    maxWidth: "100%",
                    objectFit: "contain",
                    borderRadius: "10px",
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Modal>
    </div>
  );
}
