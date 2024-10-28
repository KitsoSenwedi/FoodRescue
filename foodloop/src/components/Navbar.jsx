import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Food Rescue Network
        </Typography>
        <Button color="inherit">Home</Button>
        <Button color="inherit">Schedule Donation</Button>
        <Button color="inherit">Impact Dashboard</Button>
        <Button color="inherit">Messages</Button>
        <Button color="inherit">Settings</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
