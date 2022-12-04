const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
  train: {
    type: String,
    required: true,
  },
  user: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    requied: true,
    unique: true,
  },
  seats: {
    type: Number,
    required: true,
  },
  cost: {
    type: Number,
    required: true,
  },
  dateOfBooking: {
    type: Date,
    required: true,
    unique: true,
  },
});

const model = mongoose.model("BookingData", BookingSchema);
module.exports = model;