import baseApiUrl from "../../TactApiConfig.js";

const getOconus = async (props) => {
  const { country, token = "" } = props;
  const endPoint = "/get_oconus_country";
  const query = `${baseApiUrl}${endPoint}?country=${country}`;

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

export default getOconus;
