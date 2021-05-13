const router = require('express').Router();
const Workout = require('../models/Workout');

// create new workout
router.post('/api/workouts', (req, res) => {
    Workout.create({})
    .then(dbWorkout => {
        console.log(dbWorkout);
        res.json(dbWorkout);
    })
    .catch(({ message }) => {
        console.log(message);
    })
})

module.exports = router;