const api_url = "https://api.gsa.gov/travel/perdiem/v2/rates/"
async function getPerDiemRates() {
    const response = await fetch(api_url + "Fairfax/state/VA/year/2019")

    const data = await response.json();
    console.log(data)

}

getPerDiemRates();