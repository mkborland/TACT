import baseApiUrl from "../../TactApiConfig.js";

const getConus = async (props) => {
  const { year, city, state, country, token = "" } = props;
  const endPoint = "/get_conus";
  const query = `${baseApiUrl}${endPoint}?year=${year}&city=${city}&state=${state}&country=${country}`;

  try {
    const response = await fetch(query, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await response.json();
    return result;
  } catch (err) {
    console.log(`error fetching conus perdiem`, err);
  }
};

export default getConus;
