const express = require("express");
const router = express.Router();
const { FactoryController } = require("../controller/factoryController");

const controllerFactory = new FactoryController();
const controller = controllerFactory.getController("usercontroller");

router.route("/login").post(controller.login);
router.route("/signup").post(controller.signUp);

module.exports = router;