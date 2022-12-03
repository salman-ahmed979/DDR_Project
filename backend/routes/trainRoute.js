const express = require("express");
const router = express.Router();
const { addTrain } = require("../controller/trainController");

router.route("/add").post(addTrain);

module.exports = router;
