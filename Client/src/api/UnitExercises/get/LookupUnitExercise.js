import baseApiUrl from "../../TactApiConfig.js";

const LookupUnitExercise = async (body,token = "") => {
  const endPoint = "/lookup_unit_exercise";
  const response = await fetch(`${baseApiUrl}${endPoint}?userID=${body}`, {
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

export default LookupUnitExercise;