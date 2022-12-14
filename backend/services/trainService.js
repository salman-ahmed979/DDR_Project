const { exists } = require("../models/train.model");
const Train = require("../models/train.model");

class TrainService {
  constructor() {}
  async addTrainDetails(trainObj) {
    const { name, source, destination, totalSeats, price, startDate, endDate } =
      trainObj;
    const Exist = await Train.findOne({ name, source, destination });
    if (Exist) throw Error(Exist);
    const train = await Train.create({
      name: name,
      source: source,
      destination: destination,
      totalseats: parseInt(totalSeats),
      availableseats: parseInt(totalSeats),
      price: parseInt(price),
      startDate: new Date(startDate),
      endDate: new Date(endDate),
    });
    return train;
  }

  async getTrainsData() {
    const trains = await Train.find({});
    let _trains = [];
    trains.map((item) => {
      _trains.push({
        _id: item._id,
        name: item.name,
        source: item.source,
        destination: item.destination,
        totalseats: item.totalseats,
        availableseats: item.availableseats,
        price: item.price,
        startDate:
          item.startDate == null ? null : item.startDate.toDateString(),
        endDate: item.endDate == null ? null : item.endDate.toDateString(),
      });
    });
    return _trains;
  }

  async updateTrainData(trainObj, _id) {
    const { name, source, destination, totalSeats, price, startDate, endDate } =
      trainObj;
    const train = await Train.findOneAndUpdate(
      { _id: _id },
      {
        name: name,
        source: source,
        destination: destination,
        totalseats: parseInt(totalSeats),
        availableseats: parseInt(totalSeats),
        price: parseInt(price),
        startDate: new Date(startDate),
        endDate: new Date(endDate),
      }
    );
    return train;
  }

  async deleteTrainData(_id) {
    const train = await Train.deleteOne({ _id: _id });
    return train;
  }

  async getTrainNames() {
    const trains = await Train.find({});
    let _trains = [];
    trains.map((item) => {
      _trains.push({
        name: item.name,
      });
    });
    return _trains;
  }

  async getAvailableSeatsOfTrain(train) {
    const seatsAvailable = await Train.find(
      { name: train },
      { _id: 0, availableseats: 1 }
    );
    return seatsAvailable[0].availableseats;
  }

  async getEndDate(train) {
    const endDate = await Train.find({ name: train }, { _id: 0, endDate: 1 });
    return endDate[0].endDate;
  }

  async getTrainTicketPrice(train) {
    const ticket = await Train.find({ name: train }, { _id: 0, price: 1 });
    return ticket[0].price;
  }

  async updateAvailableSeats(train, availableseats) {
    const filter = { name: train };
    const _train = await Train.findOneAndUpdate(filter, {
      availableseats: availableseats,
    });
  }
}
module.exports = { TrainService };
