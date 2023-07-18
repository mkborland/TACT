import baseApiUrl from "../../TactApiConfig";
const GetUser = async (body, token = "") => {
  const endPoint = "/get_user";
  const response = await fetch(`${baseApiUrl}${endPoint}?email=${body}`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    console.log("error");
    return "error";
  } else {
    const result = await response.json();
    return result;
  }
};

export default GetUser;