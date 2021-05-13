const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    exerciseType: {
        type: String,
        trim: true,
        required: 'Please choose a valid exercise type'
    },

    name: {
        type: String,
        trim: true,
        required: 'Please enter a valid exercise name'
    },

    distance: {
        type: Number,
        required: 'Please enter a valid distance in miles'
    },

    weight: {
        type: Number,
        trim: true,
    },

    sets: {
        type: Number,
        trim: true,
    }, 

    reps: {
        type: Number,
        trim: true,
    }, 

    duration: {
        type: Number,
        required: 'Please enter a valid duration in minutes'
    }
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;