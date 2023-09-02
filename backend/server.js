const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const routesForWorkouts = require("./routes/workouts");
//invokes the express function
//aka creates the app
const app = express();

//middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, "some string to make u wonder", req.method);
  next();
});

//routes
app.use("/api/workouts", routesForWorkouts);
//mongoose right below the routes

//connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    //listen to a port

    app.listen(process.env.PORT, () => {
      console.log("connected to the database, listening to port 4000");
    });
  })
  .catch((error) => {
    console.log(error);
  });
