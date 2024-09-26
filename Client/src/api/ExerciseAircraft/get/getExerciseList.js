import baseApiUrl from "../../TactApiConfig.js";

const GetExerciseList = async (emailAddy, token='') => {
  const endPoint = "/get_exercise_list";
  const response = await fetch(`${baseApiUrl}${endPoint}?email=${emailAddy}`, {
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

export default GetExerciseList;