import knex from "../db/db.js";

const requestLocation = async (req, res) => {
    const airport = req.query.airport
    const country = req.query.country
    return knex('locations')
        .select('*')
        .where({
            airport: airport,
            country: country
        })
        .then(data => res.status(200).json(data))
};

const populateRecommended = async (req, res) => {
    return knex('locations')
        .select('*')
        .where({
            country: "United States"
        })
        .then(data => res.status(200).json(data))
}

export { requestLocation, populateRecommended }