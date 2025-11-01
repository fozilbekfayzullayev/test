import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    sectionTitle: {
      fontSize: "2rem",
      fontWeight: 600,
      color: "#fff",
      marginBottom: "40px",
      position: "relative",
      display: "inline-block",
      cursor: "pointer",
      "&::after": {
        content: '""',
        position: "absolute",
        left: 0,
        bottom: -4,
        width: "0%",
        height: "2px",
        backgroundColor: "#fff",
        transition: "width 0.3s ease",
      },
      "&:hover::after": {
        width: "50%",
      },
    },
    pageHeading: {
      fontSize: "28px",
      fontWeight: 600,
      color: "#374453",
      marginBottom: "40px",
      position: "relative",
      display: "inline-block",
      cursor: "pointer",
      "&::after": {
        content: '""',
        position: "absolute",
        left: 0,
        bottom: -20,
        width: "100%",
        height: "1.5px",
        backgroundColor: "rgba(85, 85, 85, 0.2)",
      },
    },

    fontFamily: "'Poppins', 'Roboto', sans-serif",
    h1: { fontSize: "2.5rem", fontWeight: 700 },
    h2: { fontSize: "2rem", fontWeight: 600 },
    body1: { fontSize: "1rem", lineHeight: 1.6 },
  },
  palette: {
    primary: { main: "#fff", text: "#374453" },
    background: {
      default: "#f9f9f9",
      navbar: "rgba(15, 82, 186, 1)",
      footer: "rgba(0, 51, 102, 1)", // navbar fon
    },
    text: {
      primary: "#374453",
      secondary: "#fff", // navbar ichidagi matn rangi
      bodyText: "rgba(85, 85, 85, 0.9)",
    },
  },
  spacing: 8, // padding/margin uchun asosiy birlik
});

export default theme;
