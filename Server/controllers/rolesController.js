import knex from "../db/db.js";

const getRole = (req, res) => {
  const id = parseInt(req.query.ID);

  knex("roles")
    .select("*")
    .where({ roleID: id })
    .then((data) => res.status(200).json(data[0]))
    .catch((err) =>
      res.status(202).send(`User Role ${id} could not be found. ${err}`)
    );
};

export { getRole };
