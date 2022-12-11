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
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
// Database connection
mongoose
  .connect(process.env.DATABASE_CONNECTION)
  .then(() => {
    //Connecting to database
    console.log("Connected to Database");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use("/user", userRoute);
app.use("/train", validateToken, validRole, trainRoute);

// app.use("/book", validateToken, bookRoute);

// Error page
app.use("*", (req, res) => {
  res.status(404).json({ message: "No page found!", status: "failed" });
});

module.exports = app;
