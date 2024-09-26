import axios from "axios";
import baseApiUrl from "../api/TactApiConfig.js";

const CancelToken = axios.CancelToken;

export const getFlightOffers = async (params) => {
  const { departureDate, returnDate, locationDeparture, locationArrival } =
    params;
  const endPoint = "/flights/";
  const queryString = `?departureDate=${departureDate}&returnDate=${returnDate}&locationDeparture=${locationDeparture}&locationArrival=${locationArrival}`;

  const controller = new AbortController();
  const signal = controller.signal;

  try {
    const response = await fetch(`${baseApiUrl}${endPoint}${queryString}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        // Authorization: `Bearer ${token}`,
      },
      signal: signal,
    });
    const result = await response.json();
    return result;
  } catch (err) {
    console.log("Error getting amadeus flight info", err);
  } finally {
    controller.abort();
  }
};

// This function allow you to make GET request to backend with params we need
export const getAmadeusData = (params) => {
  // Destructuring params
  const { keyword = "", page = 0, city = true, airport = true } = params;

  // Checking for proper subType
  const subTypeCheck =
    city && airport ? "CITY,AIRPORT" : city ? "CITY" : airport ? "AIRPORT" : "";

  // Amadeus API require at least 1 character, so with this we can be sure that we can make this request
  const searchQuery = keyword ? keyword : "a";

  // This is extra tool for cancelation request, to avoid overload API
  const source = CancelToken.source();

  // GET request with all params we need
  const out = axios.get(
    baseApiUrl +
      `/airports/?keyword=${searchQuery}&page=${page}&subType=${subTypeCheck}`,
    {
      cancelToken: source.token,
    }
  );

  return { out, source };
};
