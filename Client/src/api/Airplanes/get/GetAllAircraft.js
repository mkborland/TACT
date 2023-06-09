import baseApiUrl from "../../TactApiConfig.js"

const GetAllAircraft = async (body, token = "") => {
  const endPoint = "/get_all_aircraft";
  const response = await fetch(`${baseApiUrl}${endPoint}`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    console.log("Failed to connect to airframe db")
  } else {
    const result = await response.json();
    result.sort((a,b) => {
      return a.id - b.id
    })
    return result;
  }
};


export default GetAllAircraft;