import baseApiUrl from "../../TactApiConfig.js";

const GetLocationById = async (query, token = "") => {
  const endPoint = "/get_location_by_id";
  const response = await fetch(`${baseApiUrl}${endPoint}?id=${query}`, {
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
    return result
  }
};

export default GetLocationById;