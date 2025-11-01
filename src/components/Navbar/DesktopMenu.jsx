// src/components/Navbar/DesktopMenu.jsx
import React, { useState, useRef } from "react";
import { Stack, Button, Box } from "@mui/material";
import DropdownMenu from "./DropdownMenu";
import { Link } from "react-router";

const DesktopMenu = ({ navItems }) => {
  const [openMenu, setOpenMenu] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const closeTimer = useRef(null);

  const handleMouseEnter = (event, label) => {
    clearTimeout(closeTimer.current);
    setAnchorEl(event.currentTarget);
    setOpenMenu(label);
  };

  const handleMouseLeave = () => {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => {
      setOpenMenu(null);
      setAnchorEl(null);
    }, 150);
  };

  return (
    <Stack
      direction="row"
      flexWrap={"wrap"}
      spacing={4}
      alignItems="center"
      justifyContent={"end"}
    >
      {navItems.map((item) => {
        const hasChildren = Boolean(item.children);
        return (
          <Box
            key={item.label}
            onMouseEnter={(e) => hasChildren && handleMouseEnter(e, item.label)}
            onMouseLeave={() => hasChildren && handleMouseLeave()}
            sx={{ position: "relative", p: 0 }}
            component={Link}
            to={!hasChildren ? item.path : "#"}
          >
            <Button
              sx={(theme) => ({
                position: "relative",
                fontWeight: 500,
                color: theme.palette.text.secondary,
                backgroundColor: "transparent",
                boxShadow: "none",
                transition: "border 0.2s ease",
                borderRadius: 0,
                borderBottom: `4px solid ${theme.palette.background.navbar}`,
                "&:hover": {
                  borderBottomColor: theme.palette.primary.main,
                },
              })}
              disableRipple
            >
              {item.label}
            </Button>

            {hasChildren && (
              <DropdownMenu
                open={openMenu === item.label}
                anchorEl={anchorEl}
                items={item.children}
                onClose={() => {
                  setOpenMenu(null);
                  setAnchorEl(null);
                }}
                onMouseEnter={() => clearTimeout(closeTimer.current)}
                onMouseLeave={handleMouseLeave}
              />
            )}
          </Box>
        );
      })}
    </Stack>
  );
};

export default DesktopMenu;
