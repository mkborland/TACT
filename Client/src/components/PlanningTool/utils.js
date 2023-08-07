export const dedupedAircraft = (list) => {
    const result = [];
    const temp =[]
    list && list.forEach((airframe) => {
      if (!temp.includes(airframe.aircraftName)) {
        temp.push(airframe.aircraftName)
        result.push(
          { 
            value: result.length,
            label: airframe.aircraftName,
            numbers: [
              {
                label: airframe.aircraftCount, 
                value: airframe.personnelCount
              }
            ]
          }
        )
      } else {
        result[result.length-1].numbers.push(
          {
            label: airframe.aircraftCount, 
            value: airframe.personnelCount
          }
        )
      }
      });
    return result;
  }