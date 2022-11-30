const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });

// Application
const app = express();

// Middlewares
app.use(cors());
app.use(cookieParser());
app.use(express.json());

// Error page
app.use("*", (req, res) => {
  res.status(404).json({ message: "No page found!", status: "failed" });
});

module.exports = app;
