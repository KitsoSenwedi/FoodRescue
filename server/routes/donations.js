const express = require("express");
const router = express.Router();
const Donation = require("../models/Donation");

// POST - Create a new donation
router.post("/", async (req, res) => {
  try {
    const newDonation = new Donation(req.body);
    await newDonation.save();
    res.status(201).json(newDonation);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET - Get all donations
router.get("/", async (req, res) => {
  try {
    const donations = await Donation.find();
    res.json(donations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
