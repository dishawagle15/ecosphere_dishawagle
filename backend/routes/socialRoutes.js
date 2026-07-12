const express = require("express");
const router = express.Router();

const { getSocial } = require("../controllers/socialController");

router.get("/", getSocial);

module.exports = router;