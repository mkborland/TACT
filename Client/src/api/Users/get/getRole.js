import baseApiUrl from "../../TactApiConfig.js";

const getRole = async (ID, token = "") => {
  const endPoint = "/get_role";
  console.log("getrole API", ID);

  try {
    const response = await fetch(`${baseApiUrl}${endPoint}?ID=${ID}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await response.json();
    return result;
  } catch (err) {
    console.log(`error fetching user role ${ID}`);
  }
};

export default getRole;
