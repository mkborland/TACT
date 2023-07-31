import knex from "../db/db.js";

const requestExercise = async (req, res) => {
    const exerciseID = req.query.exerciseID
    const exerciseobj = await knex('exercises')
        .select("*")
        .where({ exerciseID: exerciseID })
        .then((data) => {
            if (data.length !== 0) {
                return knex('exercises')
                    .select('*')
                    .where({ exerciseID: exerciseID })
                    .innerJoin("users", "exercises.userID", "users.userID")
                    .then((data) => data[0])
            } else {
                res.status(202).send(`Exercise with an ID of ${exerciseID} could not be found.`);
            }
        })
    if (exerciseobj !== undefined) {
        res.status(200).send(exerciseobj)
    }
};

const requestUnitExercise = async (req, res) => {
    const unitExerciseID = req.query.unitExerciseID
    const exerciseobj = await knex('unitexercises')
        .select("*")
        .where({ unitExerciseID: unitExerciseID })
        .then((data) => {
            if (data.length !== 0) {
                return knex('unitexercises')
                    .select('*')
                    .where({ unitExerciseID: unitExerciseID })
                    .then((data) => data[0])
            } else {
                res.status(202).send({});
            }
        })
    if (exerciseobj !== undefined) {
        res.status(200).send(exerciseobj)
    }
};

const requestUnitExerciseByUnit = async (req, res) => {
    const { exerciseID, unit }= req.query;
    const exerciseobj = await knex('unitexercises')
        .select("*")
        .where({ exerciseID: exerciseID, unit: unit })
        .then((data) => {
            if (data.length !== 0) {
                return knex('unitexercises')
                    .select('*')
                    .where({ exerciseID: exerciseID, unit: unit })
                    .then((data) => data[0])
            } else {
                res.status(202).send({});
            }
        })
    if (exerciseobj !== undefined) {
        res.status(200).send(exerciseobj)
    }
};

const requestExerciseAircraft = async (req, res) => {
    const unitExerciseID = req.query.unitExerciseID
    const aircraftType = req.query.aircraftType
    const exerciseobj = await knex('exerciseaircraft')
        .select("*")
        .where({ unitExerciseID: unitExerciseID, aircraftType: aircraftType })
        .then((data) => {
            if (data.length !== 0) {
                return knex('exerciseaircraft')
                    .select('*')
                    .where({ unitExerciseID: unitExerciseID, aircraftType: aircraftType })
                    .then((data) => data[0])
            } else {
                res.status(202).send(`${aircraftType} with a unit ID of ${unitExerciseID} could not be found.`);
            }
        })
    if (exerciseobj !== undefined) {
        res.status(200).send(exerciseobj)
    }
};

const requestAllExercises = async (req, res) => {
    knex('exercises')
        .select('*')
        .innerJoin("users", "exercises.userID", "users.userID")
        .then(data => res.status(200).json(data))
};

const requestAllUnitExercises = async (req, res) => {
    knex('unitexercises')
        .select('*')
        .then(data => res.status(200).json(data))
};

const requestAllExerciseAircraft = async (req, res) => {
    knex('exerciseaircraft')
        .select('*')
        .then(data => res.status(200).json(data))
};

const addExercise = async (req, res) => {
    const { exerciseName, status, dateCreated, location, exerciseStartDate, exerciseEndDate, userID, personnelSum, costSum } = req.body
    knex('exercises')
        .select("*")
        .where({ exerciseName: exerciseName })
        .then((data) => {
            if (data.length === 0) {
                return knex('exercises')
                    .insert({
                        exerciseName: exerciseName, 
                        status: status, 
                        dateCreated: dateCreated, 
                        location: location, 
                        exerciseStartDate: exerciseStartDate, 
                        exerciseEndDate: exerciseEndDate, 
                        userID: userID, 
                        personnelSum: personnelSum, 
                        costSum: costSum
                    },['exerciseID'])
                    .then((data) => {
                        res.status(201).send(data);
                    });
            } else {
                res.status(202).send(`${exerciseName} already exists.`);
            }
        });
};

const updateExercise = async (req, res) => {
    const { exerciseID, personnelSum, costSum } = req.body
    knex('exercises')
        .select("*")
        .where({ exerciseID: exerciseID })
        .then((data) => {
            if (data.length !== 0) {
                return knex('exercises')
                    .where({ exerciseID: exerciseID})
                    .update({
                        personnelSum: personnelSum, 
                        costSum: costSum
                    })
                    .then(() => {
                        res.status(201).send(`Exercise with ID ${exerciseID} has been updated.`);
                    });
            } else {
                res.status(202).send(`Exercise with ID ${exerciseID} doesn't exist.`);
            }
        });
};

const updateUnitExercise = async (req, res) => {
    const { exerciseID, status, dateCreated, locationFrom, locationTo, travelStartDate, travelEndDate, unit, userID, personnelSum, unitCostSum } = req.body
    knex('unitexercises')
        .select("*")
        .where({ exerciseID: exerciseID, unit: unit })
        .then((data) => {
            if (data.length !== 0) {
                return knex('unitexercises')
                    .select("*")
                    .where({ exerciseID: exerciseID, unit: unit })
                    .update({
                        exerciseID: exerciseID,
                        status: status,
                        dateCreated: dateCreated,
                        locationFrom: locationFrom,
                        locationTo: locationTo,
                        travelStartDate: travelStartDate,
                        travelEndDate: travelEndDate,
                        unit: unit,
                        userID: userID,
                        personnelSum: personnelSum,
                        unitCostSum: unitCostSum
                    })
                    .then(() => {
                        res.status(201).send(`Updated entry for ${unit}'s participation in exercise with ID ${exerciseID}.`);
                    });
            } else {
                res.status(202).send(`Can't find an entry for ${unit} participating in exercise with ID ${exerciseID}.`);
            }
        });
};

const saveUnitExercise = async (req, res) => {
    console.log('req', req.body)
    const { exerciseID, status, dateCreated, locationFrom, locationTo, travelStartDate, travelEndDate, unit, userID, personnelSum, unitCostSum } = req.body
    knex('unitexercises')
        .select("*")
        .where({ exerciseID: exerciseID, unit: unit })
        .then((data) => {
            if (data.length === 0) {
                return knex('unitexercises')
                    .insert({
                        exerciseID: exerciseID,
                        status: status,
                        dateCreated: dateCreated,
                        locationFrom: locationFrom,
                        locationTo: locationTo,
                        travelStartDate: travelStartDate,
                        travelEndDate: travelEndDate,
                        unit: unit,
                        userID: userID,
                        personnelSum: personnelSum,
                        unitCostSum: unitCostSum
                    }, "*")
                    .then((d) => {
                        res.status(200).send(d[0]);
                    });
            } else {
                res.status(201).send(data[0]);
            }
        });
};

const lookupUnitExercise = async (req, res) => {
    const userID = req.query.userID
    knex('unitexercises')
        .select("*")
        .where({ userID: userID, status: false })
        .then((data) => {
            if (data.length !== 0) {
                return knex('unitexercises')
                    .select('*')
                    .where({ userID: userID, status: false })
                    .then((data) => res.status(200).json(data[0]))
            } else {
                res.status(202).send(`No exercise draft found for ${userID}`);
            }
        })
};

const addExerciseAircraft = async (req, res) => {
    const { unitExerciseID, aircraftType, aircraftCount, personnelCount, commercialAirfareCount, commercialAirfareCost, governmentAirfareCount, commercialLodgingCount, commercialLodgingCost, governmentLodgingCount, governmentLodgingCost,fieldLodgingCount, lodgingPerDiem, mealPerDiem, mealProvidedCount, mealNotProvidedCount, rentalCount, rentalCost } = req.body
    knex('exerciseaircraft')
        .select("*")
        .where({ unitExerciseID: unitExerciseID, aircraftType: aircraftType })
        .then((data) => {
            if (data.length === 0) {
                return knex('exerciseaircraft')
                    .insert({
                        unitExerciseID: unitExerciseID,
                        aircraftType: aircraftType,
                        aircraftCount: aircraftCount,
                        personnelCount: personnelCount,
                        commercialAirfareCount: commercialAirfareCount,
                        commercialAirfareCost: commercialAirfareCost,
                        governmentAirfareCount: governmentAirfareCount,
                        commercialLodgingCount: commercialLodgingCount,
                        commercialLodgingCost: commercialLodgingCost,
                        governmentLodgingCount: governmentLodgingCount,
                        governmentLodgingCost: governmentLodgingCost,
                        fieldLodgingCount: fieldLodgingCount,
                        lodgingPerDiem: lodgingPerDiem,
                        mealPerDiem: mealPerDiem,
                        mealProvidedCount: mealProvidedCount,
                        mealNotProvidedCount: mealNotProvidedCount,
                        rentalCount: rentalCount,
                        rentalCost: rentalCost
                    })
                    .then(() => {
                        res.status(201).send(`Created entry for ${aircraftType} in the unit exercise with ID ${unitExerciseID}.`);
                    });
            } else {
                res.status(202).send(`There is already an entry for ${aircraftType} in the unit exercise with ID ${unitExerciseID}.`);
            }
        });
};

export { 
    requestExercise, 
    requestUnitExercise, 
    requestExerciseAircraft, 
    requestAllExercises, 
    requestAllUnitExercises, 
    requestAllExerciseAircraft, 
    addExercise,
    saveUnitExercise,
    addExerciseAircraft,
    updateExercise,
    lookupUnitExercise,
    updateUnitExercise,
    requestUnitExerciseByUnit
 }