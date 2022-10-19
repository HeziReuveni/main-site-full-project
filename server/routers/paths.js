const express = require("express");
const router = express.Router();
const { createDetails } = require("../controllers/detailsController");

// POST Create a new customer
router.post("/", createDetails);

module.exports = router;
