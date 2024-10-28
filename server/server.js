require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Database connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Routes
const donationRoutes = require("./routes/donations");
app.use("/api/donations", donationRoutes);

app.listen(5000, () => console.log("Server running on http://localhost:5000"));
