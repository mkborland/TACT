import baseApiUrl from "../../TactApiConfig.js";

const GetUnitExercise = async (body,token = "") => {
  const endPoint = "/get_unit_exercise";
  const response = await fetch(`${baseApiUrl}${endPoint}?unitExerciseID=${body}`, {
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

export default GetUnitExercise;