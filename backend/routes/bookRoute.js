const express = require("express")
const router = express.Router();
const { FactoryController} = require("../controller/factoryController");

const factoryController = new FactoryController();
const controller = factoryController.getController("bookingcontroller");

router.route("/booking").post(controller.bookTrain);
router.route("/viewBooking").get(controller.viewBookings);
router.route("/cancelBooking").delete(controller.cancelBooking);

module.exports = router;