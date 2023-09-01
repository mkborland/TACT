import baseApiUrl from "../../TactApiConfig.js"

const UpdateExerciseAircraft = async (body, token = "") => {
  const endPoint = "/update_exercise_aircraft";
  try {
    await fetch(`${baseApiUrl}${endPoint}`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(body),
      })
      .then(async (data) => {
            const result = await data.json();
            return result; 
        })
  } catch (err) {
        console.log(`Failed to update exercise aircraft: ${err}`)
  }
};

export default UpdateExerciseAircraft;