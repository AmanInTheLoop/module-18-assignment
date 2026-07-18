const express = require("express");

const {
  createStudent,
  getAllStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
} = require("../controllers/student.controller");

const router = express.Router();

// Create a new student
router.post("/", createStudent);

// Get all students
router.get("/", getAllStudents);

// Get a single student
router.get("/:id", getStudentById);

// Update a student
router.put("/:id", updateStudent);

// Delete a student
router.delete("/:id", deleteStudent);

module.exports = router;
