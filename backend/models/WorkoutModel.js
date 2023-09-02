const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const workOutBlueprint = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    reps: {
      type: Number,
      required: true,
    },
    load: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

//model is a table in the mongoose database
//it absorbs the structure of the schema
module.exports = mongoose.model("Workout", workOutBlueprint);
