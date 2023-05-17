import Amadeus from "amadeus"

var amadeus = new Amadeus({
  clientId: 'bDfd8aWbh5FM5U3u6XATzYf4jG2IWT7b',
  clientSecret: 'lSXjU1GstFcGZ0ia'
});

const location = async (req, res) => {
  // Airports and City Search (autocomplete)
  // Find all the cities and airports starting by 'LON'
  amadeus.referenceData.locations.get({
    keyword: 'LON',
    subType: Amadeus.location.any
  }).then(function (response) {
    console.log(response.data);
    res.send(response.data)
  }).catch(function (responseError) {
    console.log(responseError.code);
  });

}

// amadeus.shopping.flightOffersSearch.get({
//     originLocationCode: 'SJC',
//     destinationLocationCode: 'SAN',
//     departureDate: '2023-06-25',
//     adults: '2'
// }).then(function(response){
//   console.log(response.data);
// }).catch(function(responseError){
//   console.log(responseError.code);
// });

export { location };