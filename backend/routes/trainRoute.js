const express = require("express");
const router = express.Router();
const { FactoryController } = require("../controller/factoryController");

const controllerFactory = new FactoryController();
const controller = controllerFactory.getController("traincontroller");

router.route("/add").post(controller.addTrain);
router.route("/getTrains").get(controller.getTrains);

module.exports = router;
