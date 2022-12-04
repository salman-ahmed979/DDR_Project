const Booking = require("../models/book.model");
const { TrainService } = require("./trainService");

class BookingService {
  constructor() {}

  async bookTrain(trainObj) {
    const { train, user, email, seats } = trainObj;
    let trainService = new TrainService();

    // Date Validation
    let trainEndDate = await trainService.getEndDate(train);
    let bookingDate = new Date();
    const Year = trainEndDate.getFullYear() >= bookingDate.getFullYear();
    const Month = trainEndDate.getMonth() + 1 >= bookingDate.getMonth() + 1;
    const Dates = trainEndDate.getDate() >= bookingDate.getDate();
    if (!Year || !Month || !Dates)
      return { message: "Date exceeds. Booking Failed", status: false };

    // Seats Availability
    let availableSeatsInTrain = await trainService.getAvailableSeatsOfTrain(
      train
    );
    if (availableSeatsInTrain < seats)
      return { message: "Date exceeds. Booking Failed", status: false };
    availableSeatsInTrain = availableSeatsInTrain - seats;
    await trainService.updateAvailableSeats(train, availableSeatsInTrain);

    // Total Cost
    let trainTicket = await trainService.getTrainTicketPrice(train);
    let totalTicket = trainTicket * seats;

    const booking = await Booking.create({
      train: train,
      user: user,
      email: email,
      seats: seats,
      cost: totalTicket,
      dateOfBooking: bookingDate,
    });
    return { message: booking, status: true };
  }

  async getAllBookings(email) {
    const bookings = await Booking.find({ email: email });
    return bookings;
  }

  async cancelTrainBooking(deleteObj) {
    const { train, email, bookingDate } = deleteObj;
    const userDate = new Date(bookingDate);
    // Find Booking
    const bookings = await Booking.find({ email: email });
    if (bookings.length == 0 || !bookings)
      return { message: "No Booking Found!", status: false };

    let id = null;
    bookings.map((item) => {
      if (
        item.dateOfBooking.getFullYear() == userDate.getFullYear() &&
        item.dateOfBooking.getMonth() == userDate.getMonth() &&
        item.dateOfBooking.getDate() == userDate.getDate()
      ) {
        console.log(item.dateOfBooking.getMonth());
        console.log(userDate.getMonth());
        id = item._id;
      }
    });
    const trainService = new TrainService();

    // Update Seats
    let currentSeats = await trainService.getAvailableSeatsOfTrain(train);
    currentSeats += bookings[0].seats;
    await trainService.updateAvailableSeats(train, currentSeats);

    // Delete
    const deleteTrain = await Booking.findByIdAndDelete({
      _id: id,
    });
    return { message: deleteTrain, status: true };
  }
}

module.exports = { BookingService };
