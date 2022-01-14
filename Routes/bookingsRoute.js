const express = require("express");
const router = express.Router();
const bookingController = require("../Controllers/bookingController");
router.post("/bookcar", bookingController.bookCar);
router.get("/getallbookings", bookingController.getAllBookings);
module.exports = router;
