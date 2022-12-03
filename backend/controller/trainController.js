const Train = require("../models/train.model");

function emptyFields(obj) {
  const { name, source, destination, totalSeats, price, startDate } = obj;
  if (!name || !source || !destination || !totalSeats || !price || !startDate)
    return true;
  return false;
}

const addTrain = async (req, res) => {
  const { name, source, destination, totalSeats, price, startDate } = req.body;
  if (emptyFields(req.body)) {
    return res
      .status(200)
      .json({ message: "Fields are empty!", status: "failed" });
  }

  const train = new Train.create({
    name: name,
    source: source,
    destination: destination,
    totalseats: parseInt(totalSeats),
    price: parseInt(price),
    startDate: startDate,
  });
  if (train) {
    return res
      .status(200)
      .json({ message: "Train Data Added Successfully!", status: "success" });
  } else {
    return res
      .status(200)
      .json({ message: "Duplicate Data Exist", status: "failed" });
  }
};

module.exports = { addTrain };
