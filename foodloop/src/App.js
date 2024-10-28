import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container, CssBaseline } from "@mui/material";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import ScheduleDonation from "./components/ScheduleDonation";
import ImpactDashboard from "./components/ImpactDashboard";

function App() {
  return (
    <Router>
      <Container maxWidth="lg">
        <CssBaseline />
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/schedule" element={<ScheduleDonation />} />
          <Route path="/impact" element={<ImpactDashboard />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
