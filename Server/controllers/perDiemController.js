const requestRates = async (req, res) => {
    const yearIn = req.query.year
    const cityIn = req.query.city
    const stateIn = req.query.state

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

export { requestRates };