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
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.3041820633184!2d69.28080551203156!3d41.32399847118839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b34353d430d%3A0x3512027741c5a434!2sTashkent%20Institute%20Of%20Finance!5e0!3m2!1sen!2s!4v1762794303654!5m2!1sen!2s"
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
