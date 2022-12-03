const express = require("express");
const router = express.Router();
const { addTrain, getTrains } = require("../controller/trainController");

router.route("/add").post(addTrain);
router.route("/getTrains").get(getTrains);

module.exports = router;
