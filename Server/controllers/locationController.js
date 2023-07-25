import knex from "../db/db.js";

const requestLocation = async (req, res) => {
    //add something here for checking if state or baseName are passed in?
    const locationCity = req.query.locationCity
    const locationCountry = req.query.locationCountry
    return knex('locations')
        .select('*')
        .where({
            city: locationCity,
            country: locationCountry
        })
        .then(data => res.status(200).json(data))
};

export { requestLocation }