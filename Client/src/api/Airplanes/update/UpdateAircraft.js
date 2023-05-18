import baseApiUrl from "../../TactApiConfig"

const UpdateAircraft =async (body, token = "") => {
    const endPoint = "/update_aircraft";
    const response = await fetch(`${baseApiUrl}${endPoint}`, {
        method: "POST",
        headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    body: JSON.stringify(body),
  });

  if(!response.ok){
    console.log("Failed to connect to airframe db")
  } else {
    const result = await response.json();
    return result;
  }
};


export default UpdateAircraft;