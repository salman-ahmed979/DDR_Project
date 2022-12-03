const { TrainService } = require("../services/trainService");

class TrainController {
  constructor() {}

  async addTrain(req, res) {
    const { name, source, destination, totalSeats, price, startDate } =
      req.body;
    if (
      !name ||
      !source ||
      !destination ||
      !totalSeats ||
      !price ||
      !startDate
    ) {
      return res
        .status(200)
        .json({ message: "Fields are empty!", status: "failed" });
    }

    let trainService = new TrainService();
    const train = await trainService.addTrainDetails(req.body);
    if (train) {
      return res
        .status(200)
        .json({ message: "Train Data Added Successfully!", status: "success" });
    } else {
      return res
        .status(200)
        .json({ message: "Duplicate Data Exist", status: "failed" });
    }
  }

  async getTrains(req, res) {
    let trainService = new TrainService();
    const trains = await trainService.getTrainsData();
    if (trains) {
      return res.status(200).json({ message: trains, status: "success" });
    } else {
      return res
        .status(200)
        .json({ message: "No train exist", status: "failed" });
    }
  }
}

module.exports = { TrainController };
