// src/components/Navbar/Navbar.jsx
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  useMediaQuery,
  Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import { navItems } from "../../../public/db/NavbarItems";
import Logo from "../../assets/logos/logo.svg";
import { Link } from "react-router";

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={(theme) => ({
          overflow: "visible",
          backgroundColor: theme.palette.background.navbar,
          padding: "12px 0px",
        })}
      >
        <Container maxWidth={"xl"}>
          <Toolbar
            sx={{
              justifyContent: "space-between",
              px: { xs: 2, md: 3 },
              overflow: "visible",
            }}
          >
            <Link to={"/"} className="logo-link">
              <img loading="lazy" src={Logo} alt="Logo" width={"200"} />
            </Link>

            {!isMobile ? (
              <DesktopMenu navItems={navItems} />
            ) : (
              <IconButton color="inherit" onClick={() => setDrawerOpen(true)}>
                <MenuIcon
                  sx={(theme) => ({ color: theme.palette.primary.main })}
                />
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      <MobileMenu
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        navItems={navItems}
      />
    </>
  );
};

export default Navbar;
