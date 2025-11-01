// src/components/Navbar/MobileMenu.jsx
import React, { useState } from "react";
import {
  Drawer,
  Box,
  Typography,
  Divider,
  List,
  ListItemButton,
  ListItemText,
  Collapse,
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Link } from "react-router";

const MobileMenu = ({ open, onClose, navItems }) => {
  const [collapse, setCollapse] = useState({});

  const toggle = (label) => {
    setCollapse((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{ sx: { width: 300 } }}
    >
      <Box sx={{ width: 300, p: 1 }}>
        <Typography variant="h6" sx={{ px: 1, py: 1, color: "#1976d2" }}>
          Меню
        </Typography>
        <Divider />
        <List>
          {navItems.map((item) => {
            const hasChildren = Boolean(item.children);
            return (
              <Box key={item.label}>
                <ListItemButton
                  component={Link}
                  to={!hasChildren ? item.path : "#"}
                  onClick={() => (hasChildren ? toggle(item.label) : onClose())}
                >
                  <ListItemText primary={item.label} />
                  {hasChildren ? (
                    collapse[item.label] ? (
                      <ExpandLess />
                    ) : (
                      <ExpandMore />
                    )
                  ) : null}
                </ListItemButton>

                {hasChildren && (
                  <Collapse
                    in={collapse[item.label]}
                    timeout="auto"
                    unmountOnExit
                  >
                    <List component="div" disablePadding>
                      {item.children.map((child) => (
                        <ListItemButton
                          key={child.label}
                          sx={{ pl: 4 }}
                          component={Link}
                          to={child.path}
                          onClick={onClose}
                        >
                          <ListItemText primary={child.label} />
                        </ListItemButton>
                      ))}
                    </List>
                  </Collapse>
                )}
              </Box>
            );
          })}
        </List>
      </Box>
    </Drawer>
  );
};

export default MobileMenu;
