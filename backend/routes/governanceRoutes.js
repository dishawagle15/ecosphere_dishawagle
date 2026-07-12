const express = require("express");
const router = express.Router();

const { getGovernance } = require("../controllers/governanceController");

router.get("/", getGovernance);

module.exports = router;