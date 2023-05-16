import Amadeus from "amadeus"

const { CLIENT_ID, CLIENT_SECRET } = require('../config');

const amadeus = new Amadeus({
  clientId: CLIENT_ID,
  clientSecret: CLIENT_SECRET
});

// var amadeus = new Amadeus({
//   clientId: 'bDfd8aWbh5FM5U3u6XATzYf4jG2IWT7b',
//   clientSecret: 'lSXjU1GstFcGZ0ia'
// });

const location = async (req, res) => {
  // Airports and City Search (autocomplete)
  amadeus.referenceData.locations.get({
    keyword : req.params['keyword'],
    subType : Amadeus.location.any
  }).then(function(response){
    console.log(response.data);
    res.send(response.data)
  }).catch(function(responseError){
    console.log(responseError.code);
  });

}

const airports = async (req, res) => {
  const { page, subType, keyword } = req.query;
  // API call with params we requested from client app
  const response = await amadeus.client.get("/v1/reference-data/locations", {
    keyword,
    subType,
    "page[offset]": page * 10
  });
  // Sending response for client
  try {
    await res.json(JSON.parse(response.body));
  } catch (err) {
    await res.json(err);
  }
};


const flights = async (req, res) => {
  amadeus.shopping.flightOffersSearch.get({
    originLocationCode: 'SJC',
    destinationLocationCode: 'SAN',
    departureDate: '2023-06-25',
    adults: '2'
  }).then(function(response){
    console.log(response.data);
    res.send(response.data)
  }).catch(function(responseError){
    console.log(responseError.code);
  });

}


export {location, flights, airports};