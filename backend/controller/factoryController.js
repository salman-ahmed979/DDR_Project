const { TrainController } = require("../controller/trainController");
const { UserController } = require("../controller/userController");

class FactoryController {
  constructor() {}

  getController(controller) {
    controller = controller.toLowerCase();
    if (controller.includes("traincontroller")) {
      return new TrainController();
    } else if (controller.includes("usercontroller")) {
      return new UserController();
    }
    return null;
  }
}
module.exports = { FactoryController };
