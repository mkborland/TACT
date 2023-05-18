import baseApiUrl from "../../TactApiConfig";
const GetAllUsers = async (token = "") => {
  const endPoint = "/get_all_users";
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
    return result;
  }
};

export default GetAllUsers;