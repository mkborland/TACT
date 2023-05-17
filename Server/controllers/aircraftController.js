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

const updateAircraft = async (req, res) => {
    const { aircraftname, aircraftnumber, newPersonnel } = req.body
    knex('aircrafttype')
        .select('*')
        .where({
            aircraftName: aircraftname,
            aircraftNumber: aircraftnumber
        })
        .then(data => {
            if (data.length !== 0) {
                return knex('aircrafttype')
                    .where({ aircraftName: aircraftname, aircraftNumber: aircraftnumber })
                    .update({ personnelReq: newPersonnel })
                    .then(() => {
                        res.status(201).send(`${aircraftname} has been updated to ${newPersonnel} required for exercises.`);
                    });
            } else {
                res.status(202).send(`${aircraftname} does not have an entry for ${aircraftnumber} aircraft.`);
            }
        })
};

export { requestAircraft, requestAllAircraft, updateAircraft }