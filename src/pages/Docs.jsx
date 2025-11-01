import { Download } from "@mui/icons-material";
import {
  Box,
  Container,
  Grid,
  IconButton,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import { docs } from "../../public/db/Docs";

const Docs = () => {
  return (
    <section className="docs-page">
      <Container maxWidth="xl">
        <Paper sx={{ px: { xs: 1.2, md: 3 }, py: 3, pb: 7 }}>
          <Typography variant="pageHeading" mb={10}>
            Нормативная документация
          </Typography>
          <Grid container spacing={5}>
            {docs.map((item, i) => (
              <Grid
                key={i}
                sx={{
                  background: "#fff",
                  width: "100%",
                }}
              >
                <Typography variant="body1" fontWeight={600} gutterBottom>
                  {item.title}
                </Typography>
                <Box
                  sx={{
                    padding: {
                      xs: "5px 25px 5px 5px",
                      md: "10px 15px 10px 10px",
                    },
                    border: "1px solid rgba(85, 85, 85, 0.5)",
                    borderRadius: "10px",
                  }}
                >
                  {item.links.map((link, i) => (
                    <ListItem
                      key={i}
                      disableGutters
                      component={"a"}
                      //   download
                      href={link.linkPath}
                      secondaryAction={
                        <IconButton aria-label="download" sx={{ opacity: 0 }}>
                          <Download sx={{ color: "rgba(85, 85, 85, 0.5)" }} />
                        </IconButton>
                      }
                      sx={{
                        px: 1,
                        color: "#374453",
                        "&:hover": {
                          background: "rgba(85, 85, 85, 0.1)",
                          "& .MuiButtonBase-root": {
                            opacity: 1,
                          },
                        },
                        borderBottom:
                          i !== item.links.length - 1
                            ? "1px solid #999"
                            : "none",
                        py: 1,
                      }}
                    >
                      <ListItemText
                        sx={{
                          "& .MuiTypography-root": {
                            fontSize: "0.85rem",
                            textTransform: "uppercase",
                          },
                        }}
                        primary={link.text}
                      />
                    </ListItem>
                  ))}
                </Box>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Container>
    </section>
  );
};

export default Docs;
