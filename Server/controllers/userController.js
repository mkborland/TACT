import knex from "../db/db.js";

const requestAllUsers = async (req, res) => {
    const alluserdata = await knex('users')
        .select('*')
        .innerJoin("authentication", "users.userID", "authentication.userID")
        .innerJoin("roles", "authentication.authKey", "roles.authKey")
        .then((data) => data)
    if (alluserdata !== undefined) {
        alluserdata.forEach(entry => {
            delete entry.userPass
        });
        res.status(200).send(alluserdata)
    }
}

const addUser = async (req, res) => {
    const { name, pass } = req.body
    const userdata = await knex("users")
        .select("*")
        .where({ userName: name })
        .then((data) => {
            if (data.length === 0) {
                return knex("users")
                    .insert({ userName: name, userPass: pass })
                    .then(() => knex("users").select("*").where({ userName: name }));
            } else {
                res.status(202).send(`${name} already exists.`);
            }
        });
    if (userdata !== undefined) {
        knex("authentication")
            .insert({ userID: userdata[0].userID, authKey: '11111' })
            .then(res.status(201).send(`${name} has been added.`))
    }
};

const requestUser = (req, res) => {
    const name = req.query.name
    knex("users")
        .select("*")
        .where({ userName: name })
        .then((data) => {
            if (data.length !== 0) {
                return knex("users")
                    .select('*')
                    .where({ userName: name })
                    .innerJoin("authentication", "users.userID", "authentication.userID")
                    .innerJoin("roles", "authentication.authKey", "roles.authKey")
                    .then(data => res.status(200).json(data))
            } else {
                res.status(202).send(`${name} could not be found.`);
            }
        })
}

const updateUser = (req, res) => {
    const { userid, authkey } = req.body
    knex("users")
        .select("*")
        .where({ userID: userid })
        .then((data) => {
            if (data.length !== 0) {
                return knex("authentication")
                    .select('*')
                    .where({ userID: userid })
                    .update({ authKey: authkey })
                    .then(res.status(200).send(`User with ID ${userid} has been updated`))
            } else {
                res.status(202).send(`User with ID ${userid} could not be found.`);
            }
        })
}

export { addUser, requestAllUsers, requestUser, updateUser };
