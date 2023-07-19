import baseApiUrl from "../../TactApiConfig.js";

const GetExerciseAircraft = async (ID, Aircraft,token = "") => {
  const endPoint = "/get_exercise_aircraft";
  const response = await fetch(`${baseApiUrl}${endPoint}?unitExerciseID=${ID}&aircraftType=${Aircraft}`, {
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

export default GetExerciseAircraft;