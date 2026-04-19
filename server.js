const express = require("express");
const mongoose = require("mongoose");

const authRoutes = require("./routes/authRoutes");
const eventRoutes = require("./routes/eventRoutes");
const bookingRoutes = require("./routes/bookingRoutes");

const app = express();
app.use(express.json());

// DB connection
mongoose.connect("mongodb://127.0.0.1:27017/event-booking")
  .then(() => console.log("DB connected"))
  .catch(err => console.log(err));

// Routes
app.use("/auth", authRoutes);
app.use("/events", eventRoutes);
app.use("/bookings", bookingRoutes);

app.listen(3000, () => console.log("Server running on port 3000"));