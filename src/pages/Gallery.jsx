import { Container, Paper, Stack, Typography } from "@mui/material";
import { gallery } from "../../public/db/gallery";
import PhotoCard from "../components/PhotoCard";
import Modal from "../components/Modal";
import { useState } from "react";

const Gallery = () => {
  const [open, setOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState("");

  const handleClose = () => setOpen(false);

  const imageHandler = (url) => {
    setOpen(true);
    setSelectedImg(url);
  };

  return (
    <section className="gallery">
      <Container maxWidth="xl">
        <Paper sx={{ px: { xs: 2, md: 4 }, py: 3 }}>
          <Typography variant="pageHeading" mb={5}>
            Фотогалерея
          </Typography>
          <Stack
            direction={"row"}
            gap={2}
            flexWrap={"wrap"}
            justifyContent={"center"}
            sx={{}}
          >
            {gallery.map((item) => (
              <PhotoCard
                key={item.id}
                photos={item}
                imageHandler={() => imageHandler(item.img)}
              />
            ))}
          </Stack>
        </Paper>
      </Container>
      <Modal url={selectedImg} open={open} handleClose={handleClose} />
    </section>
  );
};

export default Gallery;
