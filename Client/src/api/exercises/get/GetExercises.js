import baseApiUrl from "../../TactApiConfig.js";

const GetExercises = async (body, token = "") => {
  const endPoint = "/get_exercise";
  const response = await fetch(`${baseApiUrl}${endPoint}?exerciseID=${body}`, {
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
    return result;
  }
};

export default GetExercises;
