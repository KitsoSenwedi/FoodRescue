import React from "react";
import { Grid, Button, Typography, Box } from "@mui/material";
import Map from "./Map";
import RecentActivities from "./RecentActivities";

const Dashboard = () => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Button variant="contained" color="success" fullWidth>
          + New Donation
        </Button>
      </Grid>
      <Grid item xs={8}>
        <Box>
          <Typography variant="h5" gutterBottom>
            Real-Time Pickup Map
          </Typography>
          <Map />
        </Box>
      </Grid>
      <Grid item xs={4}>
        <Typography variant="h5" gutterBottom>
          Recent Activities
        </Typography>
        <RecentActivities />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
