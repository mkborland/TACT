import baseApiUrl from "../../TactApiConfig.js";

const GetSummaries = async (email, dropdownOption, param, token='') => {
  // console.log(`GetFYs`)
  // return await response.json();

  const endPoint = "/get_summaries";
  const response = await fetch(`${baseApiUrl}${endPoint}?email=${email}&dropdownOption=${dropdownOption}&param=${param}`, {
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

export default GetSummaries;