const { TrainService } = require("../services/trainService");

class TrainController {
  constructor() {}

  async addTrain(req, res) {
    const { name, source, destination, totalSeats, price, startDate, endDate } =
      req.body;
    if (
      !name ||
      !source ||
      !destination ||
      !totalSeats ||
      !price ||
      !startDate ||
      !endDate
    ) {
      return res
        .status(400)
        .json({ message: "Fields are empty!", status: "failed" });
    }

    let trainService = new TrainService();
    try {
      await trainService.addTrainDetails(req.body);
      return res.status(200).json({
        message: "Train Data Added Successfully!",
        status: "success",
      });
    } catch (err) {
      return res
        .status(400)
        .json({ message: "Data already exist!", status: "failed" });
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

  async updateTrain(req, res) {
    const { name, source, destination, totalSeats, price, startDate, endDate } =
      req.body;
    if (
      !name ||
      !source ||
      !destination ||
      !totalSeats ||
      !price ||
      !startDate ||
      !endDate
    ) {
      return res
        .status(200)
        .json({ message: "Fields are empty!", status: "failed" });
    }

    let trainService = new TrainService();
    const train = await trainService.updateTrainData(req.body);
    if (train) {
      return res.status(200).json({
        message: "Train Data Updated Successfully!",
        status: "success",
      });
    } else {
      return res
        .status(200)
        .json({ message: "Update Data Failed", status: "failed" });
    }
  }

  async deleteTrain(req, res) {
    const { name } = req.body;
    if (!name)
      return res
        .status(200)
        .json({ message: "Fields are empty!", status: "failed" });

    let trainService = new TrainService();
    const train = await trainService.deleteTrainData(name);
    if (train) {
      return res.status(200).json({
        message: "Train Data Deleted Successfully!",
        status: "success",
      });
    } else {
      return res
        .status(200)
        .json({ message: "Delete Data Failed", status: "failed" });
    }
  }
}

module.exports = { TrainController };
