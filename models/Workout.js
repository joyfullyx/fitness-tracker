const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: Date.now,
    },
    exercises: [
      {
        type: {
          type: String,
          trim: true,
        },

        name: {
          type: String,
          trim: true,
        },

        duration: {
          type: Number,
        },

        weight: {
          type: Number,
        },

        reps: {
          type: Number,
        },

        sets: {
          type: Number,
        },

        distance: {
          type: Number,
        },
      },
    ],
    duration: {
        type: Number
    }
  },
  { toJSON: { virtuals: true } }
);

WorkoutSchema.virtual("totalDuration").get(function () {
    return this.exercises.reduce((total, exercise) => {
      return total + exercise.duration;
    }, 0);
    return duration;
  });

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
