import knex from "../db/db.js";

const requestAircraft = async (req, res) => {
  const aircraftName = req.query.aircraftName;
  const aircraftCount = req.query.aircraftCount;
  return knex("aircraft")
    .select("*")
    .where({
      aircraftName: aircraftName,
      aircraftCount: aircraftCount,
    })
    .then((data) => res.status(200).json(data));
};

const requestAircraftType = async (req, res) => {
  const aircraftName = req.query.aircraftName;
  return knex("aircraft")
    .select("*")
    .where({
      aircraftName: aircraftName,
    })
    .then((data) => res.status(200).json(data));
};

const requestAllAircraft = async (req, res) => {
  knex("aircraft")
    .select("*")
    .then((data) => res.status(200).json(data));
};

const updateAircraft = async (req, res) => {
  const { aircraftName, aircraftCount, personnelCount } = req.body;
  knex("aircraft")
    .select("*")
    .where({
      aircraftName: aircraftName,
      aircraftCount: aircraftCount,
    })
    .then((data) => {
      if (data.length !== 0) {
        return knex("aircraft")
          .where({ aircraftName: aircraftName, aircraftCount: aircraftCount })
          .update({ personnelCount: personnelCount })
          .then(() => {
            res
              .status(201)
              .send(
                `${aircraftName} has been updated to ${personnelCount} required for exercises.`
              );
          });
      } else {
        res
          .status(202)
          .send(
            `${aircraftName} does not have an entry for ${aircraftCount} aircraft.`
          );
      }
    });
};

const addAirframe = async (req, res) => {
  const { aircraftName, personnelCount } = req.body;
  knex("aircraft")
    .select("*")
    .where({ aircraftName: aircraftName })
    .then((data) => {
      if (data.length === 0) {
        return knex("aircraft")
          .insert({
            aircraftName: aircraftName,
            aircraftCount: "1",
            personnelCount: personnelCount,
          })
          .then(() => {
            res.status(201).send(`${aircraftName} has been successfully added`);
          });
      } else {
        res.status(202).send(`${aircraftName} already exists`);
      }
    });
};

const addAircraftCount = async (req, res) => {
  const { aircraftName, aircraftCount, personnelCount } = req.body;
  knex("aircraft")
    .select("*")
    .where({ aircraftName: aircraftName, aircraftCount: aircraftCount })
    .then((data) => {
      if (data.length === 0) {
        return knex("aircraft")
          .insert({
            aircraftName: aircraftName,
            aircraftCount: aircraftCount,
            personnelCount: personnelCount,
          })
          .then(() => {
            res.status(201).send(`${aircraftName} has been successfully added`);
          });
      } else {
        res
          .status(202)
          .send(
            `${aircraftName} already has an entry for ${aircraftCount}, please go to the update function`
          );
      }
    });
};

export {
  requestAircraft,
  requestAircraftType,
  requestAllAircraft,
  updateAircraft,
  addAirframe,
  addAircraftCount,
};
