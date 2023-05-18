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
  const { page, subType, keyword } = req.query;
  // API call with params we requested from client app
  const response = await amadeus.client.get("/v1/reference-data/locations", {
    keyword,
    subType,
    "page[offset]": page * 10,
  });
  // Sending response for client
  try {
    await res.json(JSON.parse(response.body));
  } catch (err) {
    await res.json(err);
  }
};

const flights = async (req, res) => {
  const { departureDate, returnDate, locationDeparture, locationArrival } =
    req.query;
  // departureDate = req.body.departureDate;
  // returnDate = req.body.returnDate;
  // locationDeparture = req.body.locationDeparture;
  // locationArrival = req.body.locationArrival;
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
      max: "20",
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
