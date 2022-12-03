const Train = require("../models/train.model");

class TrainService {
  constructor() {}
  async addTrainDetails(trainObj) {
    const { name, source, destination, totalSeats, price, startDate } =
      trainObj;
    const train = await Train.create({
      name: name,
      source: source,
      destination: destination,
      totalseats: parseInt(totalSeats),
      price: parseInt(price),
      startDate: new Date(startDate),
    });
    return train;
  }

  async getTrainsData() {
    const trains = await Train.find({});
    let _trains = [];
    trains.map((item) => {
      _trains.push({
        name: item.name,
        source: item.source,
        destination: item.destination,
        totalseats: item.totalseats,
        price: item.price,
        startDate: item.startDate.toDateString(),
        endDate: item.endDate == null ? null : item.endDate.toDateString(),
      });
    });
    return _trains;
  }

  async updateTrainData(trainObj) {
    const { name, source, destination, totalSeats, price, startDate, endDate } =
      trainObj;
    const filter = { name: name };
    const train = await Train.findOneAndUpdate(filter, {
      name: name,
      source: source,
      destination: destination,
      totalseats: parseInt(totalSeats),
      price: parseInt(price),
      startDate: new Date(startDate),
      endDate: new Date(endDate),
    });
    return train;
  }

  async deleteTrainData(name) {
    const train = await Train.deleteOne({name: name})
    return train;
  }
}
module.exports = { TrainService };
