const zip = "20171"
const year = "2022"

const requestRates = async (req, res) => {
    const response = await fetch(`https://api.gsa.gov/travel/perdiem/v2/rates/zip/${zip}/year/${year}`, {
        method: "GET",
        headers: {
            "x-api-key": "Nnp0kqZgQgjKqR9fCP94kfQl2GcJplIRifkgUNap"
        }
    });

    if (!response.ok) {
        res.status(404).send(`There was an error fetching your data server responded with ${response}`)
        // console.log("error");
    } else {
        const data = await response.json();
        // console.log(data)
        // res.status(200).send(data)
        const dumbformat = data.rates[0].rate[0];
        const monthlyrates = dumbformat.months.month;
        const mealrate = dumbformat.meals;
        const city = dumbformat.city;
        const perDiemRates = { monthlyrates, mealrate, city };
        res.status(200).send(perDiemRates)
    }
}

export { requestRates };