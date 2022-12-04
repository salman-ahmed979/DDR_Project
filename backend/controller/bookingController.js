const { BookingService } = require("../services/bookService");

class BookingController {
  constructor() {}

  async bookTrain(req, res) {
    const bookingService = new BookingService();
    let booking = await bookingService.bookTrain(req.body);
    if (!booking.status)
      return res
        .status(200)
        .json({ message: booking.message, status: "failed" });
    return res
      .status(200)
      .json({ message: booking.message, status: "success" });
  }

  async viewBookings(req, res) {
    const bookingService = new BookingService();
    let bookings = await bookingService.getAllBookings(req.userEmail);
    if (!bookings || bookings.length == 0)
      return res
        .status(200)
        .json({ message: "No bookings exist", status: "failed" });
    return res.status(200).json({ message: bookings, status: "success" });
  }

  async cancelBooking(req, res) {
    const { train, bookingDate } = req.body;
    let deleteObj = {
      train: train,
      email: req.userEmail,
      bookingDate: bookingDate,
    };

    const bookingService = new BookingService();
    const bookingCancelled = await bookingService.cancelTrainBooking(deleteObj);
    if (!bookingCancelled.status)
      return res
        .status(200)
        .json({ message: bookingCancelled.message, status: "failed" });
    return res
      .status(200)
      .json({ message: "Booking Cancel Successfully!", status: "success" });
  }
}

module.exports = { BookingController };
