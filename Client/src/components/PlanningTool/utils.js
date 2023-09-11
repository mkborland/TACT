export const dedupedAircraft = (list) => {
  const result = [];
  const temp = [];
  list &&
    list.forEach((airframe) => {
      if (!temp.includes(airframe.aircraftName)) {
        temp.push(airframe.aircraftName);
        result.push({
          value: result.length,
          label: airframe.aircraftName,
          numbers: [
            {
              label: airframe.aircraftCount,
              value: airframe.personnelCount,
            },
          ],
        });
      } else {
        result[result.length - 1].numbers.push({
          label: airframe.aircraftCount,
          value: airframe.personnelCount,
        });
      }
    });
  return result;
};

export function calculateUnitCostSum(input) {
  // `input` is the unitExerciseAircraft that the cost needs to be determined from
  //will need to do the math on the total cost when saving it here
  //need to cycle through all the fields in the aircraftData and calcuate
  //commercialAirfare - done
  //commercialLodging - done
  //govelodginCost - done
  //rentalCost - done
  //perDiemTotal ?
  let result = 0;
  result += input.commercialAirfareCost
    ? input.commercialAirfareCost * input.commercialAirfareCount
    : 0;
  result += input.commercialLodgingCost
    ? input.commercialLodgingCost * input.commercialLodgingCount
    : 0;
  result += input.governmentLodgingCost
    ? input.governmentLodgingCost * input.governmentLodgingCount
    : 0;
  result += input.rentalCost ? input.rentalCost * input.rentalCount : 0;
  return result;
}
