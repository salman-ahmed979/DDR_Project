const { TrainController } = require("../controller/trainController");
const { UserController } = require("../controller/userController");
const { BookingController } = require("./bookingController");

class FactoryController {
  constructor() {}

  getController(controller) {
    controller = controller.toLowerCase();
    if (controller.includes("traincontroller")) {
      return new TrainController();
    } else if (controller.includes("usercontroller")) {
      return new UserController();
    } else if(controller.includes("bookingcontroller")) {
      return new BookingController();
    }
    return null;
  }
}
module.exports = { FactoryController };
