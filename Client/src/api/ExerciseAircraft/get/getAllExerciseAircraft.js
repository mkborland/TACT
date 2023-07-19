import baseApiUrl from "../../TactApiConfig.js";

const GetAllExerciseAircraft = async (token = "") => {
  const endPoint = "/get_all_exercise_aircraft";
  const response = await fetch(`${baseApiUrl}${endPoint}`, {
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

export default GetAllExerciseAircraft;