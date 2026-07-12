const express = require("express");
const router = express.Router();

const controller = require("../controllers/environmentalController");

console.log("Controller:", controller);
console.log("getEnvironmental:", controller.getEnvironmental);

router.get("/", controller.getEnvironmental);

module.exports = router;