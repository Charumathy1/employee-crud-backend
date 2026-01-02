const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const employeeRoutes = require("./routes/employeeRoutes");
app.use("/api/employees", employeeRoutes);

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/employeeDB")
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log(err);
  });

// Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
