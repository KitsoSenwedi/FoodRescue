import React from "react";
import { Container, Box, CssBaseline, Typography } from "@mui/material";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <Container maxWidth="lg">
      <CssBaseline />
      <Navbar />
      <Box my={4}>
        <Typography variant="h4" align="center" color="textPrimary">
          Welcome, User!
        </Typography>
        <Dashboard />
      </Box>
    </Container>
  );
}

export default App;
