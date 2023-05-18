import baseApiUrl from "../../TactApiConfig";
const GetExercises = async (body, token = "") => {
  const endPoint = "/get_exercise";
  const response = await fetch(`${baseApiUrl}${endPoint}?name=${body}`, {
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
    return ExerciseObjectFormat(...Object.values(result));
  }
};

export const ExerciseObjectFormat = (
  index,
  exerciseName,
  dateCreated,
  locationStart,
  locationEnd,
  unit,
  exerciseDateStart,
  exerciseDateEnd,
  personnelNumber,
  comAirFareOccupancy,
  govAirFareOccupancy,
  comAirFareCost,
  KC135Num,
  C130Num,
  C17Num,
  C5Num,
  F22Num,
  F35Num,
  A10Num,
  F15CNum,
  KC135Persons,
  C130Persons,
  C17Persons,
  C5Persons,
  F22Persons,
  F35Persons,
  A10Persons,
  F15CPersons,
  govLodging,
  govLodgingCost,
  commercialHotel,
  commercialHotelCost,
  fieldConditions,
  perDiem, // Total
  mealsProvided,
  foodPerDiem,
  userID,
  userName,
  ratePerFieldConditions = 0,
  airfareCostGov = 0,
  incidentalExpenses = 5
) => {
  return {
    id: index,
    userId: userID,
    basicInfo: {
      exercise: exerciseName,
      unit: unit,
      dateCreated: dateCreated,
      author: userName,
    },
    overView: {
      startEx: exerciseDateStart,
      endEx: exerciseDateEnd,
      startLocation: locationStart,
      endLocation: locationEnd,
      totalPersonal: personnelNumber,
      totalCost: 0,
    },
    airCraftInventory: {
      airCraftTotal:
        KC135Num +
        C130Num +
        C17Num +
        C5Num +
        F22Num +
        F35Num +
        A10Num +
        F15CNum,
      airCraftPersonalTotal:
        KC135Persons +
        C130Persons +
        C17Persons +
        C5Persons +
        F22Persons +
        F35Persons +
        A10Persons +
        F15CPersons,
      airCraftDetails: [
        {
          airCraftType: "KC-135",
          airCraftAmount: KC135Num,
          airCraftPersonal: KC135Persons,
        },
        {
          airCraftType: "C-130",
          airCraftAmount: C130Num,
          airCraftPersonal: C130Persons,
        },
        {
          airCraftType: "C-17",
          airCraftAmount: C17Num,
          airCraftPersonal: C17Persons,
        },
        {
          airCraftType: "C-5",
          airCraftAmount: C5Num,
          airCraftPersonal: C5Persons,
        },
        {
          airCraftType: "F-22",
          airCraftAmount: F22Num,
          airCraftPersonal: F22Persons,
        },
        {
          airCraftType: "F-35",
          airCraftAmount: F35Num,
          airCraftPersonal: F35Persons,
        },
        {
          airCraftType: "A-10",
          airCraftAmount: A10Num,
          airCraftPersonal: A10Persons,
        },
        {
          airCraftType: "F-15c",
          airCraftAmount: F15CNum,
          airCraftPersonal: F15CNum,
        },
      ],
    },
    perDiem: {
      total: 0,
      mAndIE: {
        total:
          (personnelNumber - mealsProvided) * foodPerDiem +
          incidentalExpenses * personnelNumber,
        providedAmount: mealsProvided,
        ratePer: foodPerDiem,
        incidentalExpenses: incidentalExpenses,
      },
      lodging: {
        total: 0,
        govLodgingInfo: {
          Type: "Government Lodging",
          RatePerOccupancy: govLodgingCost,
          Occupancy: govLodging,
          total: govLodging * govLodgingCost,
        },
        comLodgingInfo: {
          type: "Commercial Lodging",
          ratePerOccupancy: commercialHotelCost,
          occupancy: commercialHotel,
          total: commercialHotel * commercialHotel,
        },
        fieLodgingInfo: {
          type: "Field Conditions",
          ratePerOccupancy: ratePerFieldConditions,
          occupancy: fieldConditions,
          total: fieldConditions * ratePerFieldConditions,
        },
      },
      airFare: {
        total: 0,
        comAirFare: {
          total: comAirFareOccupancy * comAirFareCost,
          occupancy: comAirFareOccupancy,
          rate: comAirFareCost,
        },
        govAirFare: {
          total: govAirFareOccupancy * airfareCostGov,
          occupancy: govAirFareOccupancy,
          rate: airfareCostGov,
        },
      },
    },
  };
};

export default GetExercises;
