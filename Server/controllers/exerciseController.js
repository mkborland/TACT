import knex from "../db/db.js";

const requestExercise = async (req, res) => {
    const { name } = req.body
    const exerciseobj = await knex('exercises')
        .select("*")
        .where({ exerciseName: name })
        .then((data) => {
            if (data.length !== 0) {
                return knex('exercises')
                    .select('*')
                    .where({ exerciseName: name })
                    .innerJoin("users", "exercises.userID", "users.userID")
                    .then((data) => data[0])
            } else {
                res.status(202).send(`${name} could not be found.`);
            }
        })
    if (exerciseobj !== undefined) {
        delete exerciseobj.userPass
        res.status(200).send(exerciseobj)
    }
};

const requestAllExercises = async (req, res) => {
    knex('exercises')
        .select('*')
        .then(data => res.status(200).json(data))
};

const addExercise = async (req, res) => {
    const { exerciseName, dateCreated, locationStart, locationEnd, unit, exerciseDateStart, exerciseDateEnd, personnelNumber, commercialAirfare, governmentAirfare, airfareCost, kc135Num, c130Num, c17Num, c5Num, f22Num, f35Num, a10Num, f15cNum, kc135Persons, c130Persons, c17Persons, c5Persons, f22Persons, f35Persons, a10Persons, f15cPersons, govLodging, govLodgingCost, commercialHotel, commercialHotelCost, fieldConditions, perDiem, mealsProvided, foodPerDiem, userID } = req.body
    knex('exercises')
        .select("*")
        .where({ exerciseName: exerciseName })
        .then((data) => {
            if (data.length === 0) {
                return knex('exercises')
                    .insert({ exerciseName: exerciseName, dateCreated: dateCreated, locationStart: locationStart, locationEnd: locationEnd, unit: unit, exerciseDateStart: exerciseDateStart, exerciseDateEnd: exerciseDateEnd, personnelNumber: personnelNumber, commercialAirfare: commercialAirfare, governmentAirfare: governmentAirfare, airfareCost: airfareCost, kc135Num: kc135Num, c130Num: c130Num, c17Num: c17Num, c5Num: c5Num, f22Num: f22Num, f35Num: f35Num, a10Num: a10Num, f15cNum: f15cNum, kc135Persons: kc135Persons, c130Persons: c130Persons, c17Persons: c17Persons, c5Persons: c5Persons, f22Persons: f22Persons, f35Persons: f35Persons, a10Persons: a10Persons, f15cPersons: f15cPersons, govLodging: govLodging, govLodgingCost: govLodgingCost, commercialHotel: commercialHotel, commercialHotelCost: commercialHotelCost, fieldConditions: fieldConditions, perDiem: perDiem, mealsProvided: mealsProvided, foodPerDiem: foodPerDiem, userID: userID })
                    .then(() => {
                        res.status(201).send(`${exerciseName} has been added.`);
                    });
            } else {
                res.status(202).send(`${exerciseName} already exists.`);
            }
        });
};

export { requestExercise, requestAllExercises, addExercise }