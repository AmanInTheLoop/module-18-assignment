require("dotenv").config();

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const connectDB = require("./config/db");

const studentRoutes = require("./routes/student.routes");

const logger = require("./middleware/logger.middleware");
const notFound = require("./middleware/notFound.middleware");
const errorHandler = require("./middleware/error.middleware");

const app = express();

// Connect to MongoDB
connectDB();

// Built-in Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Third-party Middleware
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

// Custom Middleware
app.use(logger);

// Routes
app.use("/api/students", studentRoutes);

// Home Route (Optional)
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Student Management API is running",
  });
});

// 404 Middleware
app.use(notFound);

// Error Handling Middleware
app.use(errorHandler);

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
