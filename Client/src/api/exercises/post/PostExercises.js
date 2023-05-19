import baseApiUrl from "../../TactApiConfig.js";

const PostExercises = async (body, token = "") => {
  const endPoint = "/add_exercise";
  console.log(body);
  console.log("====");
  const sending = flatExercises(body);
  console.log(sending);

  const response = await fetch(`${baseApiUrl}${endPoint}`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(sending),
  });

  let responseData;
  const contentType = response.headers.get("content-type");
  if (contentType && contentType.includes("application/json")) {
    responseData = await response.json();
  } else {
    responseData = await response.text();
  }

  console.log(responseData);
  return responseData;
};

// takes in the obj defined in the context and flattens
// it so that it's formatted for the db
export const flatExercises = (Neo) => {
  return {
    exerciseName: Neo.basicInfo.exercise,
    dateCreated: Neo.basicInfo.dateCreated,
    locationStart: Neo.overView.startLocation,
    locationEnd: Neo.overView.endLocation,
    unit: Neo.basicInfo.unit,
    exerciseDateStart: Neo.overView.startEx,
    exerciseDateEnd: Neo.overView.endEx,
    personnelNumber: Neo.overView.totalPersonal,
    commercialAirfare: Neo.perDiem.airFare.comAirFare.occupancy, // this one?
    governmentAirfare: Neo.perDiem.airFare.govAirFare.occupancy,
    airfareCost: Neo.perDiem.airFare.comAirFare.rate,
    kc135Num: Neo.airCraftInventory.airCraftDetails[0].airCraftAmount,
    c130Num: Neo.airCraftInventory.airCraftDetails[1].airCraftAmount,
    c17Num: Neo.airCraftInventory.airCraftDetails[2].airCraftAmount,
    c5Num: Neo.airCraftInventory.airCraftDetails[3].airCraftAmount,
    f22Num: Neo.airCraftInventory.airCraftDetails[4].airCraftAmount,
    f35Num: Neo.airCraftInventory.airCraftDetails[5].airCraftAmount,
    a10Num: Neo.airCraftInventory.airCraftDetails[6].airCraftAmount,
    f15cNum: Neo.airCraftInventory.airCraftDetails[7].airCraftAmount,
    kc135Persons: Neo.airCraftInventory.airCraftDetails[0].airCraftPersonal,
    c130Persons: Neo.airCraftInventory.airCraftDetails[1].airCraftPersonal,
    c17Persons: Neo.airCraftInventory.airCraftDetails[2].airCraftPersonal,
    c5Persons: Neo.airCraftInventory.airCraftDetails[3].airCraftPersonal,
    f22Persons: Neo.airCraftInventory.airCraftDetails[4].airCraftPersonal,
    f35Persons: Neo.airCraftInventory.airCraftDetails[5].airCraftPersonal,
    a10Persons: Neo.airCraftInventory.airCraftDetails[6].airCraftPersonal,
    f15cPersons: Neo.airCraftInventory.airCraftDetails[7].airCraftPersonal,
    govLodging: Neo.perDiem.lodging.govLodgingInfo.Occupancy,
    govLodgingCost: Neo.perDiem.lodging.govLodgingInfo.RatePerOccupancy,
    commercialHotel: Neo.perDiem.lodging.comLodgingInfo.occupancy,
    commercialHotelCost: Neo.perDiem.lodging.comLodgingInfo.ratePerOccupancy,
    fieldConditions: Neo.perDiem.lodging.fieLodgingInfo.occupancy,
    perDiem: Neo.perDiem.total,
    mealsProvided: Neo.perDiem.mAndIE.providedAmount,
    foodPerDiem: Neo.perDiem.mAndIE.ratePer,
    userID: Neo.userId, // this one
  };
};

export default PostExercises;
