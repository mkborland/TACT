import knex from "../db/db.js";

const requestAllUsers = async (req, res) => {
    const alluserdata = await knex('users')
        .select('*')
        .innerJoin("roles", "users.roleID", "roles.roleID")
        .then((data) => data)
        res.status(200).send(alluserdata)
}

const addUser = async (req, res) => {
    const { firstName, lastName, email, unit } = req.body
    const userdata = await knex("users")
        .select("*")
        .where({ email: email })
        .then((data) => {
            if (data.length === 0) {
                return knex("users")
                    .insert({ firstName: firstName, lastName: lastName, email: email, unit: unit, roleID: '11111' })
                    .then(res.status(201).send(`${firstName} ${lastName}'s account has been submitted for approval.`))
            } else {
                res.status(202).send(`${email} is already in use, please use a new email or log in with an existing one.`);
            }
        });
};

const requestUser = (req, res) => {
    const email = req.query.email
    knex("users")
        .select("*")
        .where({ email: email })
        .then((data) => {
            if (data.length !== 0) {
                return knex("users")
                    .select('*')
                    .where({ email: email })
                    .innerJoin("roles", "users.roleID", "roles.roleID")
                    .then(data => res.status(200).json(data[0]))
            } else {
                res.status(202).send(`${email} could not be found.`);
            }
        })
}

const updateUser = (req, res) => {
    const { firstName, lastName, email, unit, roleID } = req.body
    knex("users")
        .select("*")
        .where({ email: email })
        .then((data) => {
            if (data.length !== 0) {
                return knex("users")
                    .select('*')
                    .where({ email: email })
                    .update({ firstName: firstName, lastName: lastName, unit: unit, roleID: roleID })
                    .then(res.status(200).send(`User with the email ${email} has been updated successfully.`))
            } else {
                res.status(202).send(`User with the email ${email} could not be found.`);
            }
        })
}

export { addUser, requestAllUsers, requestUser, updateUser };
