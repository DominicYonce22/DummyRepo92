const express = require("express");
const Workout = require("../models/WorkoutModel");
const {
  createWorkout,
  getWorkOuts,
  getWorkOut,
  deleteWorkout,
  updateWorkOut,
} = require("../controllers/WO_Controller");
const router = express.Router();

//get all the workouts
router.get("/", getWorkOuts);

//get a single workout
router.get("/:id", getWorkOut);

//post a new workout
router.post("/", createWorkout);

//delete a workout
router.delete("/:id", deleteWorkout);

//edit a workout
router.patch("/:id", updateWorkOut);

module.exports = router;
