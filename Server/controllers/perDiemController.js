import knex from "../db/db.js";

const requestConus = async (req, res) => {
    const yearIn = req.query.year
    const cityIn = req.query.city
    const stateIn = req.query.state
    const countryIn = req.query.country

    if (countryIn === 'USA'){
        const response = await fetch(`https://api.gsa.gov/travel/perdiem/v2/rates/city/${cityIn}/state/${stateIn}/year/${yearIn}`, {
            method: "GET",
            headers: {
                "x-api-key": "Nnp0kqZgQgjKqR9fCP94kfQl2GcJplIRifkgUNap"
            }
        });
        if (!response.ok) {
            res.status(404).send(`There was an error fetching your data server responded with ${response}`)
        } else {
            const data = await response.json();
            const dumbformat = data.rates[0].rate[0];
            const monthlyrates = dumbformat.months.month;
            const mealrate = dumbformat.meals;
            const city = dumbformat.city;
            const state = data.rates[0].state;
            const year = data.rates[0].year;
            const perDiemRates = { monthlyrates, mealrate, city, state, year };
            res.status(200).send(perDiemRates)
        }
    }
    else{
        //OCONUS per diem rates here
        res.status(202).send(`Cant find per diem rates for ${countryIn}`)
    }    
}

const requestAllOconus = async (req, res) => {
    return knex('oconusperdiem')
        .select('*')
        .then(data => res.status(200).json(data))
};

const requestOconusCountry = async (req, res) => {
    const country = req.query.country
    return knex('oconusperdiem')
        .select('*')
        .where({
            country: country
        })
        .then(data => res.status(200).json(data))
}

const requestOconus = async (req, res) => {
    //country is all caps
    const country = req.query.country
    //location first letter is caps rest is lower case
    const location = req.query.location
    return knex('oconusperdiem')
        .select('*')
        .where({
            country: country,
            location: location
        })
        .then(data => res.status(200).json(data))
}

export { requestConus, requestAllOconus, requestOconus, requestOconusCountry };