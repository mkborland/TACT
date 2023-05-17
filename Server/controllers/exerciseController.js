import knex from "../db/db.js";

const requestExercise = async (req, res) => {
    const { name } = req.body
    return knex('exercises')
        .select('*')
        .where({
            exerciseName: exercisename
        })
        .then(data => res.status(200).json(data))
};

const requestAllExercises = async (req, res) => {
    knex('exercises')
        .select('*')
        .then(data => res.status(200).json(data))
};

export { requestExercise, requestAllExercises }