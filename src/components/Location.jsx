import { Box } from "@mui/material";

const MapLocation = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: { xs: 300, md: 450 },
        borderRadius: 2,
        overflow: "hidden",
      }}
    >
      <iframe
        title="TSUE Location"
        src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d5993.809102883247!2d69.249428!3d41.31094!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDE4JzM5LjQiTiA2OcKwMTQnNTcuOSJF!5e0!3m2!1sru!2s!4v1718031711940!5m2!1sru!2s"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </Box>
  );
};

export default MapLocation;
