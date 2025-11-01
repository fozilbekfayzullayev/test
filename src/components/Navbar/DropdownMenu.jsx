// src/components/Navbar/DropdownMenu.jsx
import React from "react";
import {
  Grow,
  Paper,
  ClickAwayListener,
  MenuList,
  MenuItem,
  Popper,
  Button,
} from "@mui/material";
import { Link } from "react-router";

const DropdownMenu = ({
  open,
  anchorEl,
  onClose,
  items,
  onMouseEnter,
  onMouseLeave,
}) => (
  <Popper
    open={open}
    anchorEl={anchorEl}
    placement="bottom"
    transition
    disablePortal={false}
    sx={{ zIndex: 1500 }}
  >
    {({ TransitionProps }) => (
      <Grow
        {...TransitionProps}
        timeout={300}
        style={{ transformOrigin: "top" }}
      >
        <Paper
          elevation={1}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          sx={{
            mt: 1,
            minWidth: "200",
            overflow: "hidden",
            borderRadius: 0,
            padding: "5px 15px",
            fontSize: "0.8rem",
          }}
        >
          <ClickAwayListener onClickAway={onClose}>
            <MenuList>
              {items.map((child, i) => (
                <MenuItem
                  key={`${child.title}-${i}`}
                  onClick={() => {
                    onClose();
                  }}
                  sx={{
                    borderBottom: i !== items.length - 1 ? '1px solid rgba(0, 0, 0, 0.12)' : 'none',
                    padding: "12px",
                  }}
                  component={Link}
                  to={child.path}
                >
                  <Button
                    disableRipple
                    disableElevation
                    sx={(theme) => ({
                      p: 0,
                      color: theme.palette.text.primary,
                    })}
                  >
                    {child.label}
                  </Button>
                </MenuItem>
              ))}
            </MenuList>
          </ClickAwayListener>
        </Paper>
      </Grow>
    )}
  </Popper>
);

export default DropdownMenu;
