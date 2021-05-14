// const router = require('express').Router();
// const Workout = require('../models/Workout');
const { Workout } = require("../models");
const db = require("../models");

module.exports = (app) => {
  // create new workout
  app.post("/api/workouts", ({ body }, res) => {
    db.Workout.create({ body })
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  // update created workout
  app.put("/api/workouts/:id", ({ body, params }, res) => {
    console.log("params.id:", params.id);
    console.log("body: ", body);
    db.Workout.findByIdAndUpdate(
      params.id,
      { $push: { exercises: body } },
      { new: true }
    )
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  // get stats
  app.get("/api/workouts/range", (req, res) => {
        db.Workout.find({})
        .limit(7)
        .sort({day: -1})
        .then((dbWorkout) => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err)
        })
  });

  // get all workouts
  app.get("/api/workouts", (req, res) => {
    db.Workout.find({})
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });
};
