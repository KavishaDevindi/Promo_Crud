const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config(); // Load environment variables

const app = express();
const port = 3000;

// Configure CORS
app.use(
  cors({
    origin: "http://localhost:5173", // Replace with the URL of your frontend
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB Connection
const mongoURI =
  process.env.MONGO_URI ||
  "mongodb+srv://kavisliit16:yYchRcC3NyB1R9nx@cluster0.fq53fyh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose
  .connect(mongoURI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Routes
const promotionRoutes = require("./routes/promotions");
app.use("/api/promotions", promotionRoutes);

// Test route
app.get("/test", (req, res) => {
  res.send("Server is working");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
