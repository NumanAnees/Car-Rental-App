const express = require("express");
const router = express.Router();
const Booking = require("../models/bookingModel");
router.post("/bookcar", async (req, res) => {
  req.body.transactionId = "1234";
  try {
    const newbooking = new Booking(req.body);
    await newbooking.save();
  } catch (err) {
    return res.status(400).json(err);
  }
});

module.exports = router;
