// hooks
import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import TactApi from "../../api/TactApi";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

//styles
import "../../styles/PlanningToolPg4.css";
import { statesObj } from "../Util/states";
import { Paper, TableContainer, TableHead, Typography } from "@mui/material";
import { convertToCurrency } from "./utils";

//perdiem data = []{
//   city, ex "Denver / Aurora"
//   county, "Denver / Adams / Arapahoe / Jefferson"
//   meals, 79
//   standardRate, "false"
//   zip, null
//   months [] {
//     value, this is the dollar amount for the lodging
//     number, month number
//     short, 'Jan'
//     long, 'January'
//   }
// }

// Oconus perdiem data = []
//   {
//     "country": "ITALY",
//     "location": "Ferrara",
//     "lodging": "163",
//     "mAndI": "107",
//     "perDiem": "270",
//     "locationCode": "11460"
// }

const getPerDiem = async (params) => {
  if (params.country === "none") {
    console.log("None for country");
    return;
  }

  if (params.country === "United States") {
    const stateAbbv = statesObj.find((state) => {
      return state.name === params.state;
    }).abbreviation;
    params.state = stateAbbv;
    const response = await TactApi.getConus(params);
    return response;
  } else {
    //get OCONUS perdiems
    console.log("Getting per diem for outside US");
    const response = await TactApi.getOconus(params);
    console.log("OCONUS perdiem response", response);
    return response;
  }
};

const parseOcousPerdiem = (props) => {
  console.log("parsePerdiem props", props);
  const { raw, perdiemCity } = props;
  const result = { mealPerDiem: 0, lodgingPerDiem: 0, city: "Standard Rate" };
  let temp;
  let standardRate;
  //if there is only one element in the array => use that one element
  if (raw.length === 1) {
    result.mealPerDiem = raw[0].mAndI;
    result.lodgingPerDiem = raw[0].lodging;
    result.city = raw[0].location;
  } else if (raw.length > 1) {
    raw.forEach((rate) => {
      if (rate.location.includes(perdiemCity)) {
        temp = rate;
        return;
      }
      if (rate.location === "Standard Rate") standardRate = rate;
    });
    console.log("temp, standardRate", temp, standardRate);
    if (temp.location) {
      result.mealPerDiem = temp.mAndI;
      result.lodgingPerDiem = temp.lodging;
      result.city = temp.location;
    } else if (standardRate.location) {
      result.mealPerDiem = standardRate.mAndI;
      result.lodgingPerDiem = standardRate.lodging;
      result.city = standardRate.location;
    } else {
      //didn't find the city or standard rate
      console.log("did not find a city or standard rate for the perdiem");
      result.mealPerDiem = 0;
      result.lodgingPerDiem = 0;
      result.city = "No city found";
    }
  }
  return result;
};

const parsePerdiem = (props) => {
  console.log("parse perdiem", props);
  const { raw, perdiemCity, perdiemStartMonth, perDiemStopMonth } = props;
  //process the array of results to find the correct city
  const result = { mealPerDiem: 0, lodgingPerDiem: 0, city: "Standard Rate" };
  let temp;
  let standardRate;
  //if there is only one element in the array => use that one element
  if (raw.length === 1) {
    const hotelPerdiemStart = raw[0].months.month.find((month) => {
      return month.number === perdiemStartMonth;
    }).value;
    const hotelPerdiemStop = raw[0].months.month.find((month) => {
      return month.number === perDiemStopMonth;
    }).value;
    const hotelPerdiem = (hotelPerdiemStart + hotelPerdiemStop) / 2;
    console.log(
      "hotelperdiem with only one array element in raw",
      perdiemStartMonth,
      perDiemStopMonth,
      hotelPerdiem
    );
    result.mealPerDiem = raw[0].meals;
    result.lodgingPerDiem = hotelPerdiem;
    result.city = raw[0].city;
    return result;
  } else if (raw.length > 1) {
    raw.forEach((rate) => {
      const cities = rate.city.split("/");
      cities.forEach((city) => {
        if (perdiemCity.includes(city)) {
          temp = rate;
        }
        if (city === "Standard Rate") standardRate = rate;
      });
    });
    if (temp?.city && temp?.meals) {
      const hotelPerdiemStart = temp.months.month.find((month) => {
        return month.number === perdiemStartMonth;
      }).value;
      const hotelPerdiemStop = temp.months.month.find((month) => {
        return month.number === perDiemStopMonth;
      }).value;
      const hotelPerdiem = (hotelPerdiemStart + hotelPerdiemStop) / 2;
      console.log(
        "hotelperdiem with a found city",
        perdiemStartMonth,
        perDiemStopMonth,
        hotelPerdiem
      );
      result.mealPerDiem = temp.meals;
      result.lodgingPerDiem = hotelPerdiem;
      result.city = temp.city;
    } else if (standardRate?.city && standardRate.meals) {
      console.log("using the standard rate");
      const hotelPerdiemStart = standardRate.months.month.find((month) => {
        return month.number === perdiemStartMonth;
      }).value;
      const hotelPerdiemStop = standardRate.months.month.find((month) => {
        return month.number === perDiemStopMonth;
      }).value;
      const hotelPerdiem = (hotelPerdiemStart + hotelPerdiemStop) / 2;
      result.mealPerDiem = standardRate.meals;
      result.lodgingPerDiem = hotelPerdiem;
      result.city = standardRate.city;
    } else {
      //didn't find the city or standard rate
      console.log("did not find a city or standard rate for the perdiem");
      result.mealPerDiem = 0;
      result.lodgingPerDiem = 0;
      result.city = "No city found";
    }
  }
  return result;
};

const Lodging = (props) => {
  const { data, aircraftData, setAircraftData, updateUnitExerciseAircraft } =
    props;
  const [startDate, setStartDate] = useState(); // {year, month}
  const [stopDate, setStopDate] = useState(); // {year, month}
  //TODO set location to a default value to process when there is none selected from previous steps
  const [location, setLocation] = useState(); // {city, state, country}
  const [totalLodgingCost, setTotalLodgingCost] = useState(0);
  const [totalMealCost, setTotalMealCost] = useState(0);
  const [totalPerdiemCost, setTotalPerdiemCost] = useState(0);
  const [totalDays, setTotalDays] = useState(0);
  const [comLodgeCost, setComLodgeCost] = useState();
  const [govLodgeCost, setGovLodgeCost] = useState();

  useEffect(() => {
    initializeData();
  }, [data]);

  useEffect(() => {
    calculateCost();
  }, [aircraftData]);

  useEffect(() => {
    setAircraftData([
      {
        ...aircraftData[0],
        commercialLodgingCost: comLodgeCost,
        governmentLodgingCost: govLodgeCost,
      },
    ]);
  }, [comLodgeCost, govLodgeCost]);

  const initializeData = () => {
    if (!aircraftData[0].governmentLodgingCount) {
      setAircraftData([
        {
          ...aircraftData[0],
          governmentLodgingCount: data.personnelSum,
          commercialLodgingCount: 0,
          fieldLodgingCount: 0,
        },
      ]);
    }

    if (!aircraftData[0].mealProvidedCount) {
      setAircraftData([
        {
          ...aircraftData[0],
          mealProvidedCount: data.personnelSum,
          mealNotProvidedCount: 0,
        },
      ]);
    }

    setTotalDays(
      Math.round(
        (new Date(data.travelEndDate) - new Date(data.travelStartDate)) /
          (1000 * 60 * 60 * 24)
      )
    );

    setStartDate({
      year: parseInt(data.travelStartDate.slice(0, 4)),
      month: parseInt(data.travelStartDate.slice(5, 7)),
    });

    setStopDate({
      year: parseInt(data.travelEndDate.slice(0, 4)),
      month: parseInt(data.travelEndDate.slice(5, 7)),
    });

    if (data?.location) {
      TactApi.getLocationByIata(data.locationTo).then((result) => {
        console.log("location To", result);
        setLocation({
          city: result.airport,
          state: result.region,
          country: result.country,
        });
      });
    } else {
      setLocation({
        city: "none",
        state: "none",
        country: "none",
      });
    }

    calculateCost();
    console.log("intitial data:", startDate, stopDate, location);
  };

  const [perdiemCity, setPerdiemCity] = useState("Not Defined");
  useEffect(() => {
    console.log("prior to getting perdiem", startDate, location);
    if (startDate && location) {
      const params = {
        year: startDate.year,
        city: location.city,
        state: location.state,
        country: location.country,
      };
      getPerDiem(params).then((perDiem) => {
        const perdiemParams = {
          raw: perDiem ? perDiem : [],
          perdiemCity: location.city,
          perdiemStartMonth: startDate.month,
          perDiemStopMonth: stopDate.month,
        };
        let result = {};
        if (params.country === "none") {
          setPerdiemCity("No Location Selected");
          result = {
            mealPerDiem: 0,
            lodgingPerDiem: 0,
            city: "No Location Selected",
          };
        } else if (params.country === "United States") {
          result = parsePerdiem(perdiemParams);
          setPerdiemCity(result.city);
        } else {
          perdiemParams.perdiemCity = location.state;
          result = parseOcousPerdiem(perdiemParams);
          setPerdiemCity(result.city);
        }
        setAircraftData([
          {
            ...aircraftData[0],
            lodgingPerDiem: result.lodgingPerDiem,
            mealPerDiem: result.mealPerDiem,
          },
        ]);
      });
    } else {
      console.log("pending getting the perdiem");
    }
    calculateCost();
  }, [startDate, stopDate, location]);

  const handleGovLodge = (e) => {
    const value = parseInt(e.target.value);
    if (value > data.personnelSum || value < 0) {
      return;
    } else {
      const tempGov = value;
      let tempCom;
      let tempField;
      const checkSum =
        data.personnelSum -
        value -
        aircraftData[0].commercialLodgingCount -
        aircraftData[0].fieldLodgingCount;
      // IF reducing the number in gov lodging, those excess should go to commercial
      // IF adding to the number in gov lodging, those should come first from field, then commercial
      if (checkSum >= 0) {
        // reducing from gov lodging
        tempCom = aircraftData[0].commercialLodgingCount + checkSum;
        tempField = aircraftData[0].fieldLodgingCount;
      } else {
        //adding to gov lodging
        if (aircraftData[0].fieldLodgingCount >= -1 * checkSum) {
          //there are available field lodging to move to gov
          tempCom = aircraftData[0].commercialLodgingCount;
          tempField = aircraftData[0].fieldLodgingCount + checkSum;
        } else {
          tempCom = aircraftData[0].commercialLodgingCount + checkSum;
          tempField = 0;
        }
      }
      setAircraftData([
        {
          ...aircraftData[0],
          governmentLodgingCount: tempGov,
          commercialLodgingCount: tempCom,
          fieldLodgingCount: tempField,
        },
      ]);
    }
  };

  const handleComLodge = (e) => {
    const value = parseInt(e.target.value);
    console.log(value);
    if (value > data.personnelSum || value < 0) {
      return;
    } else {
      const tempCom = value;
      //don't go below 0 in tempGov
      let tempGov;
      let tempField;
      const checkSum =
        data.personnelSum - value - aircraftData[0].fieldLodgingCount;
      if (checkSum >= 0) {
        tempGov = checkSum;
        tempField = aircraftData[0].fieldLodgingCount;
      } else {
        tempGov = 0;
        tempField = data.personnelSum - tempCom;
      }
      setAircraftData([
        {
          ...aircraftData[0],
          governmentLodgingCount: tempGov,
          commercialLodgingCount: tempCom,
          fieldLodgingCount: tempField,
        },
      ]);
    }
  };

  const handleFieldLodge = (e) => {
    const value = parseInt(e.target.value);
    console.log(value);
    if (value > data.personnelSum || value < 0) {
      return;
    } else {
      const tempField = value;
      //don't go below 0 in tempGov
      let tempGov;
      let tempCom;
      const checkSum =
        data.personnelSum - value - aircraftData[0].commercialLodgingCount;
      console.log("checksum", checkSum);
      if (checkSum >= 0) {
        tempGov = checkSum;
        tempCom = aircraftData[0].commercialLodgingCount;
      } else {
        tempGov = 0;
        tempCom = data.personnelSum - tempField;
      }
      setAircraftData([
        {
          ...aircraftData[0],
          governmentLodgingCount: tempGov,
          commercialLodgingCount: tempCom,
          fieldLodgingCount: tempField,
        },
      ]);
    }
  };

  const handleMealsProvided = (e) => {
    const value = isNaN(parseInt(e.target.value))
      ? 0
      : parseInt(e.target.value);
    console.log(value);
    if (value > data.personnelSum || value < 0) {
      return;
    } else {
      setAircraftData([
        {
          ...aircraftData[0],
          mealProvidedCount: value,
          mealNotProvidedCount: data.personnelSum - value,
        },
      ]);
    }
  };

  const calculateCost = () => {
    setComLodgeCost(
      aircraftData[0].commercialLodgingCount *
        aircraftData[0].lodgingPerDiem *
        (totalDays - 1)
    );
    setGovLodgeCost(
      aircraftData[0].governmentLodgingCount *
        aircraftData[0].lodgingPerDiem *
        (totalDays - 1)
    );
    const lodging = comLodgeCost + govLodgeCost;
    const meals =
      totalDays *
      aircraftData[0].mealNotProvidedCount *
      aircraftData[0].mealPerDiem;
    setTotalLodgingCost(lodging);
    setTotalMealCost(meals);
    setTotalPerdiemCost(lodging + meals);
  };

  const handleSubmit = () => {
    updateUnitExerciseAircraft();
  };

  const card = (
    <div>
      <CardContent>
        <TableContainer component={Paper}>
          <TableHead>{`Perdiem for ${perdiemCity}`}</TableHead>
        </TableContainer>
        <StyledTableRow key="totals-row">
          <StyledTableCell component="th" scope="row">
            <Typography>{`Totals`}</Typography>
          </StyledTableCell>
          <StyledTableCell component="th" scope="row">
            <Typography>Days</Typography>

            <TextField
              disabled
              id="numPeopleTotal"
              // label="Total People"
              // variant="outlined"
              margin="normal"
              value={totalDays}
            />
          </StyledTableCell>
          <StyledTableCell component="th" scope="row">
            <Typography>Personnel</Typography>

            <TextField
              disabled
              id="numPeopleTotal"
              // label="Total People"
              // variant="outlined"
              margin="normal"
              value={data.personnelSum}
            />
          </StyledTableCell>
          <StyledTableCell component="th" scope="row">
            <Typography>Cost</Typography>
            <TextField
              disabled
              id="totalPerdiemCost"
              // label="Total Perdiem Cost"
              // variant="filled"
              margin="normal"
              value={convertToCurrency(totalPerdiemCost)}
            />
          </StyledTableCell>
          <StyledTableCell component="th" scope="row">
            <Typography>Cost/Person</Typography>

            <TextField
              disabled
              id="total-cost-per-person"
              // label="Meals Total Cost"
              variant="outlined"
              margin="normal"
              value={convertToCurrency(totalPerdiemCost / data.personnelSum)}
            />
          </StyledTableCell>
        </StyledTableRow>
        <StyledTableRow key="lodging-row">
          <StyledTableCell component="th" scope="row" />

          <StyledTableCell component="th" scope="row">
            <Typography>Lodging</Typography>
          </StyledTableCell>
          <StyledTableCell component="th" scope="row">
            <Typography>Perdiem</Typography>
            <TextField
              disabled
              id="lodgingCost"
              // label="Lodging Perdiem"
              variant="outlined"
              margin="normal"
              value={convertToCurrency(aircraftData[0].lodgingPerDiem)}
            />
          </StyledTableCell>
          <StyledTableCell component="th" scope="row">
            <Typography>Cost</Typography>

            <TextField
              disabled
              id="hotelTotalCost"
              // label="Lodging Total Cost"
              variant="outlined"
              margin="normal"
              value={convertToCurrency(totalLodgingCost)}
            />
          </StyledTableCell>
          <StyledTableCell component="th" scope="row">
            <Typography>Cost/Person</Typography>

            <TextField
              disabled
              id="lodging-cost-per-person"
              // label="Meals Total Cost"
              variant="outlined"
              margin="normal"
              value={convertToCurrency(totalLodgingCost / data.personnelSum)}
            />
          </StyledTableCell>
        </StyledTableRow>
        <StyledTableRow key="meal-perdiem-row">
          <StyledTableCell component="th" scope="row" />
          <StyledTableCell component="th" scope="row">
            <Typography>Meals</Typography>
          </StyledTableCell>

          <StyledTableCell component="th" scope="row">
            <Typography>Perdiem</Typography>

            <TextField
              disabled
              id="mealCost"
              // label="Meal Perdiem"
              variant="outlined"
              margin="normal"
              value={convertToCurrency(aircraftData[0].mealPerDiem)}
            />
          </StyledTableCell>
          <StyledTableCell component="th" scope="row">
            <Typography>Cost</Typography>

            <TextField
              disabled
              id="mealTotalCost"
              // label="Meals Total Cost"
              variant="outlined"
              margin="normal"
              value={convertToCurrency(totalMealCost)}
            />
          </StyledTableCell>
          <StyledTableCell component="th" scope="row">
            <Typography>Cost/Person</Typography>

            <TextField
              disabled
              id="meals-cost-per-person"
              // label="Meals Total Cost"
              variant="outlined"
              margin="normal"
              value={convertToCurrency(totalMealCost / data.personnelSum)}
            />
          </StyledTableCell>
        </StyledTableRow>
      </CardContent>
      <StyledTableRow key="perdiem-inputs-row">
        <StyledTableCell component="th" scope="row">
          <TextField
            // disabled
            id="numGovLodge"
            label="Government Lodging"
            variant="outlined"
            margin="normal"
            type="number"
            value={aircraftData[0].governmentLodgingCount}
            onChange={handleGovLodge}
          />
        </StyledTableCell>
        <StyledTableCell component="th" scope="row">
          <TextField
            id="numComLodge"
            label="Commercial Lodging"
            variant="outlined"
            margin="normal"
            type="number"
            value={aircraftData[0].commercialLodgingCount}
            onChange={handleComLodge}
          />
        </StyledTableCell>
        <StyledTableCell component="th" scope="row">
          <TextField
            id="numFieldCon"
            label="Field Conditions"
            variant="outlined"
            margin="normal"
            type="number"
            value={aircraftData[0].fieldLodgingCount}
            onChange={handleFieldLodge}
          />
        </StyledTableCell>
        <StyledTableCell component="th" scope="row">
          {/* <Typography>Government Meals Provided</Typography> */}
          <TextField
            id="numMealsProv"
            label="Government Meals Provided"
            variant="outlined"
            margin="normal"
            type="number"
            value={aircraftData[0].mealProvidedCount}
            onChange={handleMealsProvided}
          />
        </StyledTableCell>
      </StyledTableRow>

      <CardActions>
        <Button onClick={handleSubmit} size="small">
          Submit
        </Button>
      </CardActions>
    </div>
  );

  return (
    <div>
      <Card>{card}</Card>
    </div>
  );
};

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default Lodging;
