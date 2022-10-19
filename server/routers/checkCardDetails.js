const express = require("express");
const router = express.Router();
const { checkCardDetails } = require("../controllers/checkCardDetails");

// POST Check card details
router.post("/check-details", checkCardDetails);

module.exports = router;
