// import { filledInputClasses } from "@mui/material";

// // new Date().getDate
// export const ExerciseFormat = (
//   index,
//   exerciseName,
//   dateCreated,
//   locationStart,
//   locationEnd,
//   unit,
//   exerciseDateStart,
//   exerciseDateEnd,
//   personnelNumber,
//   comAirFareCost,
//   comAirFareOccupancy,
//   airfareCostGov = 0,
//   govAirFareOccupancy,
//   KC135Num,
//   C130Num,
//   C17Num,
//   C5Num,
//   F22Num,
//   F35Num,
//   A10Num,
//   F15CNum,
//   KC135Persons,
//   C130Persons,
//   C17Persons,
//   C5Persons,
//   F22Persons,
//   F35Persons,
//   A10Persons,
//   F15CPersons,
//   govLodging,
//   govLodgingCost,
//   commercialHotel,
//   commercialHotelCost,
//   fieldConditions,
//   ratePerFieldConditions = 0,
//   perDiem,
//   mealsProvided,
//   foodPerDiem,
//   incidentalExpenses = 5,
//   userID,
//   userName
// ) => {
//   return {
//     id: index,
//     userId: userID,
//     basicInfo: {
//       exercise: exerciseName,
//       unit: unit,
//       dateCreated: dateCreated,
//       author: userName,
//     },
//     overView: {
//       startEx: exerciseDateStart,
//       endEx: exerciseDateEnd,
//       startLocation: locationStart,
//       endLocation: locationEnd,
//       totalPersonal: personnelNumber,
//       totalCost: 0,
//     },
//     airCraftInventory: {
//       airCraftTotal:
//         KC135Num +
//         C130Num +
//         C17Num +
//         C5Num +
//         F22Num +
//         F35Num +
//         A10Num +
//         F15CNum,
//       airCraftPersonalTotal:
//         KC135Persons +
//         C130Persons +
//         C17Persons +
//         C5Persons +
//         F22Persons +
//         F35Persons +
//         A10Persons +
//         F15CPersons,
//       airCraftDetails: [
//         {
//           airCraftType: "KC-135",
//           airCraftAmount: KC135Num,
//           airCraftPersonal: KC135Persons,
//         },
//         {
//           airCraftType: "C-130",
//           airCraftAmount: C130Num,
//           airCraftPersonal: C130Persons,
//         },
//         {
//           airCraftType: "C-17",
//           airCraftAmount: C17Num,
//           airCraftPersonal: C17Persons,
//         },
//         {
//           airCraftType: "C-5",
//           airCraftAmount: C5Num,
//           airCraftPersonal: C5Persons,
//         },
//         {
//           airCraftType: "F-22",
//           airCraftAmount: F22Num,
//           airCraftPersonal: F22Persons,
//         },
//         {
//           airCraftType: "F-35",
//           airCraftAmount: F35Num,
//           airCraftPersonal: F35Persons,
//         },
//         {
//           airCraftType: "A-10",
//           airCraftAmount: A10Num,
//           airCraftPersonal: A10Persons,
//         },
//         {
//           airCraftType: "F-15c",
//           airCraftAmount: F15CNum,
//           airCraftPersonal: F15CNum,
//         },
//       ],
//     },
//     perDiem: {
//       total: 0,
//       mAndIE: {
//         total:
//           (personnelNumber - mealsProvided) * foodPerDiem +
//           incidentalExpenses * personnelNumber,
//         providedAmount: mealsProvided,
//         ratePer: foodPerDiem,
//         incidentalExpenses: incidentalExpenses,
//       },
//       lodging: {
//         total: 0,
//         govLodgingInfo: {
//           Type: "Government Lodging",
//           RatePerOccupancy: govLodgingCost,
//           Occupancy: govLodging,
//           total: govLodging * govLodgingCost,
//         },
//         comLodgingInfo: {
//           type: "Commercial Lodging",
//           ratePerOccupancy: commercialHotelCost,
//           occupancy: commercialHotel,
//           total: commercialHotel * commercialHotel,
//         },
//         fieLodgingInfo: {
//           type: "Field Conditions",
//           ratePerOccupancy: ratePerFieldConditions,
//           occupancy: fieldConditions,
//           total: fieldConditions * ratePerFieldConditions,
//         },
//       },
//       airFare: {
//         total: 0,
//         comAirFare: {
//           total: comAirFareOccupancy * comAirFareCost,
//           occupancy: comAirFareOccupancy,
//           rate: comAirFareCost,
//         },
//         govAirFare: {
//           total: govAirFareOccupancy * airfareCostGov,
//           occupancy: govAirFareOccupancy,
//           rate: airfareCostGov,
//         },
//       },
//     },
//   };
// };

// export const MockExercises = [
//   MockExercisesType(
//     "1",
//     "Test",
//     "01/30/2030",
//     "LAX",
//     "STL",
//     "375 CSPTS",
//     "02/01/2030",
//     "02/04/2030",
//     "9000",
//     "100",
//     "20",
//     "10",
//     "5",
//     "2",
//     "1",
//     "30",
//     "3",
//     "4",
//     "50",
//     "50",
//     "50",
//     "50",
//     "50",
//     "50",
//     "50",
//     "40",
//     "12",
//     "1000",
//     "1",
//     "90000",
//     "85958",
//     "4",
//     "yes",
//     "4",
//     "bob"
//   ),
// ];
