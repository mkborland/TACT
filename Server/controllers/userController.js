import knex from "../db/db.js";

const requestAllUsers = async (req, res) => {
    knex('users')
        .select('userName', 'userID')
        .then(data => res.status(200).json(data))
}

const addUser = (req, res) => {
    const { name, pass } = req.body
    knex("users")
        .select("*")
        .where({ userName: name })
        .then((data) => {
            if (data.length === 0) {
                return knex("users")
                    .insert({ userName: name, userPass: pass })
                    .then(() => {
                        res.status(201).send(`${name} has been added.`);
                    });
            } else {
                res.status(202).send(`${name} already exists.`);
            }
        });
};

const requestUser = (req, res) => {
    const { name } = req.body
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

export { addUser, requestAllUsers, requestUser };
