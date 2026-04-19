const express = require("express");
const Event = require("../models/Event");
const Booking = require("../models/Booking");
const { auth, authorize } = require("../middleware/auth");

const router = express.Router();

// Create event (organizer only)
router.post("/", auth, authorize("organizer"), async (req, res) => {
  const event = await Event.create({
    ...req.body,
    organizerId: req.user.id
  });

  res.send(event);
});

// Get all events
router.get("/", async (req, res) => {
  const events = await Event.find();
  res.send(events);
});

// Update event + notify users
router.put("/:id", auth, authorize("organizer"), async (req, res) => {
  const event = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });

  const bookings = await Booking.find({ eventId: event._id });

  bookings.forEach(b => {
    setTimeout(() => {
      console.log(`🔔 Event updated notification sent to user ${b.userId}`);
    }, 0);
  });

  res.send(event);
});

module.exports = router;