const express = require("express");
const Booking = require("../models/Booking");
const Event = require("../models/Event");
const { auth, authorize } = require("../middleware/auth");

const router = express.Router();

router.post("/", auth, authorize("customer"), async (req, res) => {
  const { eventId, tickets } = req.body;

  const event = await Event.findById(eventId);

  if (event.availableTickets < tickets) {
    return res.send("Not enough tickets");
  }

  event.availableTickets -= tickets;
  await event.save();

  const booking = await Booking.create({
    userId: req.user.id,
    eventId,
    tickets
  });

  // Background Task 1
  setTimeout(() => {
    console.log(`📧 Booking confirmation email sent to user ${req.user.id}`);
  }, 0);

  res.send(booking);
});

module.exports = router;