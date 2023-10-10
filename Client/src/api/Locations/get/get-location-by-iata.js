import baseApiUrl from "../../TactApiConfig.js";

const getLocationByIata = async (iata, token = "") => {
  const endPoint = "/get_location_by_iata";
  const response = await fetch(`${baseApiUrl}${endPoint}?iata=${iata}`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    console.log("error");
  } else {
    const result = await response.json();
    return result[0];
  }
};

export default getLocationByIata;
