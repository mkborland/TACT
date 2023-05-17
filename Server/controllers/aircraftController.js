import knex from "../db/db.js";

const requestAircraft = async (req, res) => {
    const { aircraftname, aircraftnumber } = req.body

    return knex('aircrafttype')
        .select('*')
        .where({
            aircraftName: aircraftname,
            aircraftNumber: aircraftnumber
        })
        .then(data => res.status(200).json(data))
};

const requestAllAircraft = async (req, res) => {
    knex('aircrafttype')
        .select('*')
        .then(data => res.status(200).json(data))
};

export { requestAircraft, requestAllAircraft }