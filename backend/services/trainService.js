const Train = require("../models/train.model");

class TrainService {
  constructor() {}
  addTrainDetails(trainObj) {
    const { name, source, destination, totalSeats, price, startDate } =
      trainObj;
    const train = new Train.create({
      name: name,
      source: source,
      destination: destination,
      totalseats: parseInt(totalSeats),
      price: parseInt(price),
      startDate: startDate,
    });
    return train;
  }
}
module.exports = { TrainService };
