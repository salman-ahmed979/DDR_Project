const express = require("express"); //Siraj
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
mongoose.connect(process.env.DATABASE_CONNECTION);

app.use("/user", userRoute);
app.use("/train", validateToken, validRole, trainRoute);
app.use("/book", validateToken, bookRoute);

// Error page
app.use("*", (req, res) => {
  res.status(404).json({ message: "No page found!", status: "failed" });
});

module.exports = app;
