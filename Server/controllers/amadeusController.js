import Amadeus from "amadeus";

import { CLIENT_ID, CLIENT_SECRET } from "../config.js";

const amadeus = new Amadeus({
  clientId: CLIENT_ID,
  clientSecret: CLIENT_SECRET,
});

const location = async (req, res) => {
  // Airports and City Search (autocomplete)
  amadeus.referenceData.locations
    .get({
      keyword: req.params["keyword"],
      subType: Amadeus.location.any,
    })
    .then(function (response) {
      console.log(response.data);
      res.send(response.data);
    })
    .catch(function (responseError) {
      console.log(responseError.code);
    });
};

const airports = async (req, res) => {
  try {
    const { page, subType, keyword } = req.query;
    // API call with params we requested from client app
    const response = await amadeus.client.get("/v1/reference-data/locations", {
      keyword,
      subType,
      "page[offset]": page * 10,
    });

  // Sending response for client
    // console.log('try res.json')
    await res.json(JSON.parse(response.body));
  } catch (err) {
    // console.log(err)

    const { page, subType, keyword } = req.query;
    if (err.response.statusCode == 429) {
      try {
        await new Promise(r => setTimeout(r, 200));
        // API call with params we requested from client app
        const response2 = await amadeus.client.get("/v1/reference-data/locations", {
          keyword,
          subType,
          "page[offset]": page * 10,
        });

        await res.json(JSON.parse(response2.body));

      } catch (err2) {
        await res.json(err2);
      }

    }
    // await res.json(err);
  }
};

const flights = async (req, res) => {
  const { departureDate, returnDate, locationDeparture, locationArrival } =
    req.query;
  amadeus.shopping.flightOffersSearch
    .get({
      // originLocationCode: 'SJC',
      // destinationLocationCode: 'SAN',
      // departureDate: '2023-06-25',
      // adults: '2'
      originLocationCode: locationDeparture,
      destinationLocationCode: locationArrival,
      departureDate: departureDate,
      returnDate: returnDate,
      adults: "1",
      currencyCode: "USD",
      max: "10",
    })
    .then(function (response) {
      // console.log(response.data);
      res.send(response.data);
    })
    .catch(function (responseError) {
      console.log(responseError.code);
    });
};

export { location, flights, airports };
