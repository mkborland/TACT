import baseApiUrl from "../../TactApiConfig.js";

const getUnitExerciseByUnit = async (body, token = "") => {
  const endPoint = "/get_unit_exercise_by_unit";
  const response = await fetch(`${baseApiUrl}${endPoint}?exerciseID=${body.exerciseID}&unit=${body.unit}`, {
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

export default getUnitExerciseByUnit;