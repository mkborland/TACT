import baseApiUrl from "../../TactApiConfig.js";

const PostExercises = async (body, token = "") => {
  const endPoint = "/add_exercise";

  const response = await fetch(`${baseApiUrl}${endPoint}`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    console.log("Failed to connect to user db")
  } else {
    return response;
  }
};

export default PostExercises;
