import knex from "../db/db.js";
import fetch from "node-fetch";
//https://open.gsa.gov/api/perdiem/

const requestConus = async (req, res) => {
  const yearIn = req.query.year;
  const cityIn = req.query.city;
  const stateIn = req.query.state;
  console.log(req.query);

  const response = await fetch(
    `https://api.gsa.gov/travel/perdiem/v2/rates/city/${cityIn}/state/${stateIn}/year/${yearIn}`,
    {
      method: "GET",
      headers: {
        "x-api-key": "Nnp0kqZgQgjKqR9fCP94kfQl2GcJplIRifkgUNap",
      },
    }
  );
  if (!response.ok) {
    console.log("error response", response);
    res
      .status(404)
      .send(
        `There was an error fetching your data server responded with ${response}`
      );
  } else {
    const data = await response.json();
    res.status(200).send(data.rates[0].rate);
  }
};

const requestAllOconus = async (req, res) => {
  return knex("oconusperdiem")
    .select("*")
    .then((data) => res.status(200).json(data));
};

const requestOconusCountry = async (req, res) => {
  const country = req.query.country.toUpperCase();
  return knex("oconusperdiem")
    .select("*")
    .where({
      country: country,
    })
    .then((data) => res.status(200).json(data));
};

const requestOconus = async (req, res) => {
  //country is all caps
  const country = req.query.country;
  //location first letter is caps rest is lower case
  const location = req.query.location;
  return knex("oconusperdiem")
    .select("*")
    .where({
      country: country,
      location: location,
    })
    .then((data) => res.status(200).json(data));
};

export { requestConus, requestAllOconus, requestOconus, requestOconusCountry };
