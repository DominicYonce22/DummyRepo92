const Workout = require("../models/WorkoutModel");
const mongoose = require("mongoose");
// get all workouts
const getWorkOuts = async (req, res) => {
  const workouts = await Workout.find({}).sort({ createdAt: -1 });
  res.status(200).json(workouts);
};
//get a single workout
const getWorkOut = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "that is not a valid id" });
  }

  const workout = await Workout.findById(id);
  return workout
    ? res.status(200).json(workout)
    : res.status(404).json({ error: "Found 0 workouts with that id" });
};
//create a workout
const createWorkout = async (req, res) => {
  const { title, load, reps } = req.body;
  try {
    //insert the request to db
    const workout = await Workout.create({ title, load, reps });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
//delete
const deleteWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "id entered is not a valid type" });
  }
  const workoutToDelete = await Workout.findByIdAndDelete(id);
  return workoutToDelete
    ? res.status(200).json(workoutToDelete)
    : res.status(404).json({ error: "Found 0 workouts with that id" });
};
//update
const updateWorkOut = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "that is not a valid id" });
  }
  const workout = await Workout.findByIdAndUpdate(id, {
    ...req.body,
  });

  return workout
    ? res.status(200).json(workout)
    : res.status(404).json({ error: "No workout with such an id" });
};

module.exports = {
  createWorkout,
  getWorkOuts,
  getWorkOut,
  deleteWorkout,
  updateWorkOut,
};
