const { TrainService } = require("../services/trainService");

function emptyFields(obj) {
  const { name, source, destination, totalSeats, price, startDate } = obj;
  if (!name || !source || !destination || !totalSeats || !price || !startDate)
    return true;
  return false;
}

const addTrain = async (req, res) => {
  if (emptyFields(req.body)) {
    return res
      .status(200)
      .json({ message: "Fields are empty!", status: "failed" });
  }
  const trainService = new TrainService();
  const train = trainService.addTrainDetails(req.body);
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
