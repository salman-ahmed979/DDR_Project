const mongoose = require("mongoose");

const TrainData = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  source: {
    type: String,
    required: true,
  },
  destination: {
    type: String,
    required: true,
  },
  totalseats: {
    type: Number,
    required: true,
  },
  availableseats: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  startDate: {
    type: Date,
  },
  endDate: {
    type: Date,
  },
});

const model = mongoose.model("TrainData", TrainData);

module.exports = model;
