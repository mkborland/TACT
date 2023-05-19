import baseApiUrl from "../../TactApiConfig.js";

const GetUser = async (token = "") => {
  const endPoint = "/get_users";
  const response = await fetch(`${baseApiUrl}${endPoint}`, {
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