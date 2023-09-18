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
};

const requestAllLocations = async (req, res) => {
    return knex('locations')
        .select('*')
        .then(data => res.status(200).json(data))
};

const requestMilitaryBases = async (req, res) => {
    return knex('locations')
        .select('*')
        .whereILike('airport', '%Air Force Base%')
        .orWhereILike('airport', '%Air Base%')
        .orWhereILike('airport', '%Forward Operating Base%')
        .orWhereILike('airport', 'RAAF Base%')
        .orWhereILike('airport', '%Canadian Forces Base%')
        .orWhereILike('airport', '%Naval Base%')
        .orWhereILike('airport', '%Naval Airbase%')
        .orWhereILike('airport', '%Space Base%')
        .orWhereILike('airport', '%Airbase%')
        .orWhereILike('airport', '%Air Reserve Base%')
        .orWhereILike('airport', '%RNZAF Base%')
        .orWhereILike('airport', '%PAF Base%')
        .orWhereILike('airport', '%National Guard Base%')
        .then(data => res.status(200).json(data))
};

const requestCivilianAirports = async (req, res) => {
    return knex('locations')
        .select('*')
        .except([
            knex('locations')
            .select('*')
            .whereILike('airport', '%Air Force Base%')
            .orWhereILike('airport', '%Air Base%')
            .orWhereILike('airport', '%Forward Operating Base%')
            .orWhereILike('airport', 'RAAF Base%')
            .orWhereILike('airport', '%Canadian Forces Base%')
            .orWhereILike('airport', '%Naval Base%')
            .orWhereILike('airport', '%Naval Airbase%')
            .orWhereILike('airport', '%Space Base%')
            .orWhereILike('airport', '%Airbase%')
            .orWhereILike('airport', '%Air Reserve Base%')
            .orWhereILike('airport', '%RNZAF Base%')
            .orWhereILike('airport', '%PAF Base%')
            .orWhereILike('airport', '%National Guard Base%')
        ])
        .then(data => res.status(200).json(data))
};

const requestDualUseAirports = async (req, res) => {
    return knex('locations')
        .select("*")
        .whereIn(
            'locationID', 
            [2800, 3795, 3803,
                 3868, 3894, 4110,
                  4334, 4335, 4403, 
                  5756, 6728, 7523, 
                  8032, 8233])
        .then(data => res.status(200).json(data))
};

const requestLocationById = async (req, res) => {
    const id = req.query.id;
    return knex('locations')
        .select("*")
        .where({'locationID': id})
        .then(data => res.status(200).json(data))
}  

export { 
    requestLocation,
    populateRecommended,
    requestMilitaryBases,
    requestCivilianAirports,
    requestDualUseAirports,
    requestAllLocations,
    requestLocationById,
 }