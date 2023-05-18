const api_url = "https://api.gsa.gov/travel/perdiem/v2/rates/"
const endpoint = "zip/20171/year/2022"

const getPerDiemRates = async () => {
    const response = await fetch(`${api_url}${endpoint} `, {
        method: "GET",
        headers: {
            "x-api-key": "Nnp0kqZgQgjKqR9fCP94kfQl2GcJplIRifkgUNap"
        }
    });

    if (!response.ok) {
        console.log("error");
    } else {
        const data = await response.json();
        console.log(data)

        const monthlyrates = data.rates.rate.months.month.map(item => {
            delete item.short
            delete item.long
        })
        const mealrate = data.rates.rate.meals;
        const city = data.rates.rate.city;

        const perDiemRates = { monthlyrates, mealrate, city };
        return perDiemRates;
    }
}

export default getPerDiemRates;