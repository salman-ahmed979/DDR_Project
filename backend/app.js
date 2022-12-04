const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const { validRole } = require("./middleware/validateRole");
const { validateToken } = require("./middleware/JWT");
const userRoute = require("./routes/userRoute");
const trainRoute = require("./routes/trainRoute");
const bookRoute = require("./routes/bookRoute");

const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });

// Application
const app = express();

// Middlewares
app.use(cors());
app.use(cookieParser());
app.use(express.json());

// Database connection
mongoose.connect("mongodb://0.0.0.0:27017/railway_db");

app.use("/user", userRoute);
app.use("/train", validateToken, validRole, trainRoute);
app.use("/book", validateToken, validRole, bookRoute);

// Error page
app.use("*", (req, res) => {
  res.status(404).json({ message: "No page found!", status: "failed" });
});

module.exports = app;
