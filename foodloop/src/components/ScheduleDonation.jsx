import React, { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import axios from "axios";

const ScheduleDonation = () => {
  const [donation, setDonation] = useState({
    donorName: "",
    foodType: "",
    quantity: "",
    location: "",
  });

  const handleChange = (e) => {
    setDonation({ ...donation, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/donations", donation);
      alert("Donation scheduled successfully!");
      setDonation({ donorName: "", foodType: "", quantity: "", location: "" });
    } catch (error) {
      console.error("Error scheduling donation:", error);
    }
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Schedule a New Donation
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Donor Name"
          name="donorName"
          value={donation.donorName}
          onChange={handleChange}
          fullWidth
          required
          margin="normal"
        />
        <TextField
          label="Food Type"
          name="foodType"
          value={donation.foodType}
          onChange={handleChange}
          fullWidth
          required
          margin="normal"
        />
        <TextField
          label="Quantity (kg)"
          name="quantity"
          type="number"
          value={donation.quantity}
          onChange={handleChange}
          fullWidth
          required
          margin="normal"
        />
        <TextField
          label="Location"
          name="location"
          value={donation.location}
          onChange={handleChange}
          fullWidth
          required
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">
          Schedule Donation
        </Button>
      </form>
    </Box>
  );
};

export default ScheduleDonation;
