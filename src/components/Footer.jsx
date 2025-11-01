import {
  Box,
  Container,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import Logo from "../assets/logos/logo.svg";
import { Link } from "react-router";
import theme from "../theme/AppTheme";
import { footerItems } from "../../public/db/FooterItems";
import { footerSocialMediaIcons } from "../../public/db/FooterSmIcons";

const Footer = () => {
  return (
    <Box
      sx={(theme) => ({
        background: theme.palette.background.footer,
        color: theme.palette.text.navbar,
        py: { xs: 5, md: 8 },
      })}
    >
      <Container maxWidth="xl">
        <Stack
          direction={{ sm: "column", md: "row" }}
          spacing={{ xs: 3, md: 4 }}
          alignItems={"start"}
          justifyContent={"space-between"}
        >
          <Link to={"/"}>
            <img loading="lazy" src={Logo} alt="Logo" />
          </Link>
          <Box>
            <Typography variant="h6" color="primary">
              © СФ - Совместный факультет ТГЭУ-ПГУ
            </Typography>
            <List>
              {footerItems.map((item) => (
                <ListItem
                  key={item.id}
                  disableGutters
                  sx={{
                    py: 0,
                    display: "flex",
                    gap: 1,
                    alignItems: "center",
                    color: theme.palette.text.secondary,
                    opacity: 0.6,
                  }}
                >
                  {item.icon}
                  <ListItemText
                    sx={{
                      "& .MuiTypography-root": {
                        fontSize: 14,
                      },
                    }}
                    primary={`${item.text}`}
                  />
                </ListItem>
              ))}
            </List>
          </Box>
          <Box>
            <Typography variant="h6" color="primary">
              Контакты:
            </Typography>
            <List sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              {footerSocialMediaIcons.map((item) => (
                <ListItem key={item.id} sx={{ p: 0 }}>
                  <IconButton aria-label={item.ariraLabel} color="primary">
                    {item.icon}
                  </IconButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
