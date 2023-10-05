import baseApiUrl from "../../TactApiConfig.js";

const GetExerciseAircraftById = async (ID, token = "") => {
  const endPoint = "/get_exercise_aircraft_by_id";

  try {
    const response = await fetch(`${baseApiUrl}${endPoint}?unitExerciseID=${ID}`, {
        method: "GET",
        headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
        },
    });
    const result = await response.json();
    return result   
  } catch (err) {
    console.log("error fetching exercise aircraft by id");    
  }
};

export default GetExerciseAircraftById;