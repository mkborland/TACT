import baseApiUrl from "../../TactApiConfig.js";

const GetFYs = async (emailAddy, token='') => {
  // console.log(`GetFYs`)
  // return await response.json();

  const endPoint = "/get_FYs";
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

export default GetFYs;