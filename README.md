# Event Booking System (Backend)

## 📌 Overview
This is a backend system for an Event Booking application built using Node.js, Express, and MongoDB.

It supports two types of users:
- Event Organizers → can create and manage events
- Customers → can browse events and book tickets

The system includes authentication, role-based access control, and background task simulation.

---

## 🚀 Features

- JWT-based Authentication
- Role-based Access Control (Organizer / Customer)
- Event Creation and Management
- Event Listing
- Ticket Booking System
- Background Task 1: Booking Confirmation (console log)
- Background Task 2: Event Update Notification (console log)
- MongoDB Integration

---

## 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (Authentication)
- Postman (API Testing)

---

## 📂 Project Setup

### 1. Clone the repository
```bash
git clone https://github.com/coderkutty/event-booking-system.git
cd event-booking-system
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start server
```bash
node server.js
```

Server will run on:
```
http://localhost:3000
```

---

## 🔐 Authentication

JWT-based authentication is used.

After login, a token must be passed in headers:

```
Authorization: <token>
```

---

## 📌 API Endpoints

### 🔹 Auth Routes

**Register**
```
POST /auth/register
```

**Login**
```
POST /auth/login
```

---

### 🔹 Event Routes

**Create Event (Organizer only)**
```
POST /events
```

**Get All Events**
```
GET /events
```

**Update Event (Organizer only)**
```
PUT /events/:id
```

---

### 🔹 Booking Routes

**Book Ticket (Customer only)**
```
POST /bookings
```

---

## ⚙️ Background Tasks

### Booking Confirmation
Triggered when booking is successful  
📧 Booking confirmation email sent (console log)

### Event Update Notification
Triggered when event is updated  
Notifies booked users (console log)

---

## 🧠 Design Decisions

- JWT authentication used
- Role-based access implemented
- MongoDB used for storage
- Background tasks simulated with async logic

---

## ⚠️ Challenges Faced

- Role-based authorization setup
- Handling JWT in headers
- Debugging eventId issues

---

## ⏱ Time Breakdown

- Setup: 30 min  
- Development: 2 hrs  
- Debugging: 1 hr  
- Testing: 1 hr  

---

## 🎯 Conclusion

This project demonstrates a complete backend system with authentication, role-based access, event management, booking logic, and background task processing.

---

## 🔗 Links

GitHub: https://github.com/coderkutty/event-booking-system  
Demo Video: https://www.loom.com/share/142f5e9395a24282b54aa610da3c555e
