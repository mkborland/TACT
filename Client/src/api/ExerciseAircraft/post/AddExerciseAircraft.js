import baseApiUrl from "../../TactApiConfig.js";

const AddExerciseAircraft = async (body, token = "") => {
  const endPoint = "/add_exercise_aircraft";
  const response = await fetch(`${baseApiUrl}${endPoint}`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    console.log("Failed to connect to user db");
  } else {
    return response;
  }
};

export default AddExerciseAircraft;
