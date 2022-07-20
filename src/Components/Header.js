import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  return (
    <AppBar
      position="static"
      sx={{
        background:
          "transparent linear-gradient(119deg, #5A55F4 0%, #C455F4 100%) 0% 0% no-repeat padding-box",
      }}
    >
      <Toolbar variant="dense" sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6" color="inherit" component="div">
          AppName
        </Typography>

        <IconButton edge="end" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
