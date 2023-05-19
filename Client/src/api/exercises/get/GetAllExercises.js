import baseApiUrl from "../../TactApiConfig.js";
import { ExerciseObjectFormat } from "./GetExercises.js";

const GetAllExercises = async (token = "") => {
  const endPoint = "/get_all_exercises";
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
    return result.map((exercise) =>
      ExerciseObjectFormat(...Object.values(exercise))
    );
  }
};

export default GetAllExercises;
