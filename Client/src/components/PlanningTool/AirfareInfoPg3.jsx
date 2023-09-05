import axios from "axios";
import { useState, useEffect } from "react";
import { LocationField } from "./location-field";
import FlightTable from "../FlightTable/FlightTable.js";
import { getFlightOffers } from "../../api/amadeus.api.js";
import dayjs from 'dayjs';
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import LoadingButton from "@mui/lab/LoadingButton";
import InputLabel from "@mui/material/InputLabel";
import Grid from "@mui/material/Grid";
import Slider from "@mui/material/Slider";
import MuiInput from "@mui/material/Input";
import { styled } from "@mui/material/styles";
import { Button, TextField } from "@mui/material";
import { Paper } from "@mui/material";
import { calculateUnitCostSum } from './utils'

// styles
import "../../styles/PlanningToolPg3.css"

function PickAddOns(props) { 
  const { 
    data,
    updateFileHandler,
    setSaved,
    aircraftData,
    setAircraftData,
    updateUnitExerciseAircraft
  } = props

  const [count, setCount] = useState(0);
  const [flightData, setFlightData] = useState([]);
  const [inputs, setInputs] = useState({
    departureDate: dayjs(data.travelStartDate).format("YYYY-MM-DD"),
    returnDate: dayjs(data.travelEndDate).format("YYYY-MM-DD"),
    locationDeparture: data.locationFrom,
    locationArrival: data.locationTo
  });
  const [flightdisable, setFlightDisable] = useState(
    aircraftData.commercialAirfareCount > 0 
      ? false
      : true
  );
  const [flightsloading, setFlightsLoading] = useState(false);

  //TODO set saved to false if there are any changes on this page instead of 
  // the default when page is loaded.
  // In the case that this was already built, and the user just wants to navigate 
  // to the next page, then they should be able to do this
  useEffect(() => {
    setSaved({saved: false, alert: 'Getting Airfare Costs'})
  }, []);

  useEffect(() => {
    setInputs({
      departureDate: dayjs(data.travelStartDate).format("YYYY-MM-DD"),
      returnDate: dayjs(data.travelEndDate).format("YYYY-MM-DD"),
      locationDeparture: data.locationFrom,
      locationArrival: data.locationTo      
    });
  }, [data]);

  useEffect(() => {
    if (aircraftData[0].commercialAirfareCount > 0) {
        setFlightDisable(false);
    } else {
        setFlightDisable(true);
    }
  }, [aircraftData]);

  // useEffect(() => {
  //   console.log('data in PickAddOns', data);
  // }, [inputs, data])

  //need to figure out if airfare is going to be per plane or per unit, will change which table/context we use here

  const Input = styled(MuiInput)`
      width: 42px;
` ;

  const handleSliderChange = (event, newValue) => {
    const temp = aircraftData[0];
    temp.commercialAirfareCount = newValue;
    temp.governmentAirfareCount = data.personnelSum - newValue;
    setAircraftData([temp]);
  };

  const handleMilInputChange = (event) => {
    const temp = aircraftData[0];
    temp.commercialAirfareCount = data.personnelSum - event.target.value;
    temp.governmentAirfareCount = event.target.value;
    setAircraftData([temp]);
  };

  const handleComInputChange = (event) => {
    const temp = aircraftData[0];
    temp.commercialAirfareCount = event.target.value;
    temp.governmentAirfareCount = data.personnelSum - event.target.value;
    setAircraftData([temp]);
  };

//For the flight finder
  useEffect(() => {
    if (count > 0) {
      setFlightsLoading(true);
      const { out, source } = getFlightOffers(inputs);

      out
        .then((res) => {
          if (!res.data.code) {
            setFlightData(res.data);
          }
          setFlightsLoading(false);
        })
        .catch((err) => {
          axios.isCancel(err);
          console.log('error in finding flights', err)
          setFlightsLoading(false);
        });

      return () => {
        source.cancel();
      };
    }
  }, [count]);

  const updateStartDate = (e) => {
    updateFileHandler({travelStartDate: e.$d});
  }

  const updateEndDate = (e) => {
    updateFileHandler({travelEndDate: e.$d});
  };

  const changeDepartLocation = async (e) => {
    updateFileHandler({locationFrom: e.value})
  };

  const changeDestinationLocation = async (e) => {
    updateFileHandler({locationTo: e.value})
  };

  const updateExerciseAircraft = (e) => {
    const temp = aircraftData[0];
    temp[e.key] = e.value;
    setAircraftData([temp]);
  }

  const handleOnSubmit = () => {
    updateFileHandler({unitCostSum: calculateUnitCostSum(aircraftData[0])})
    setSaved({saved: true, alert: 'Saving commercial airfare '})
    updateUnitExerciseAircraft(aircraftData[0]);
  };

  return (
    <div className="form-container new-gap">
      <Paper elevation={3} sx={{ backgroundColor: "white", p: 3 }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Depart Date"
            defaultValue={dayjs(data.travelStartDate)}
            value={dayjs(data.travelStartDate)}
            sx={{ backgroundColor: 'white' }}
            onChange={updateStartDate}
          />
          <span> </span>
          <DatePicker
            label="Return Date"
            defaultValue={dayjs(data.travelEndDate)}
            value={dayjs(data.travelEndDate)}
            sx={{ backgroundColor: 'white' }}
            onChange={updateEndDate}
          />
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <InputLabel id="demo-simple-select-label">Mil Air</InputLabel>
              <Input
                value={aircraftData[0].governmentAirfareCount}
                size="small"
                onChange={handleMilInputChange}
                inputProps={{
                  step: 1,
                  min: 0,
                  max: { totalpersonnel: data.personnelSum },
                  type: "number",
                  "aria-labelledby": "input-slider",
                }}
              />
            </Grid>
            <Grid item xs>
              <Slider
                value={aircraftData[0].commercialAirfareCount}
                onChange={handleSliderChange}
                aria-labelledby="input-slider"
                min={0}
                max={data.personnelSum}
              />
            </Grid>
            <Grid item>
              <InputLabel id="demo-simple-select-label">Comm Air</InputLabel>
              <Input
                // value={value.com}
                value={aircraftData[0].commercialAirfareCount}
                size="small"
                onChange={handleComInputChange}
                inputProps={{
                  step: 1,
                  min: 0,
                  max: { totalpersonnel: data.personnelSum },
                  type: "number",
                  "aria-labelledby": "input-slider",
                }}
              />
            </Grid>
          </Grid>
          <div>
            <br />
          </div>
          <LocationField 
            inputLabel='Departing Location'
            name='departingLocation'
            id='locationFrom'
            onChange={changeDepartLocation}
            locationId={data.locationFrom}
          />
          <LocationField 
            inputLabel='Destination Location'
            name='destination'
            id='locationTo'
            onChange={changeDestinationLocation}
            locationId={data.locationTo}
          />
          <div>
            <TextField
              value={"$" + Number(aircraftData[0].commercialAirfareCost).toFixed(2)}
              disabled
              InputLabelProps={{ shrink: true }}
              id="filled-basic"
              label="Cost Per Person"
              variant="filled"
            />
            <span> </span>
            <TextField
              value={"$" + Number(aircraftData[0].commercialAirfareCost * aircraftData[0].commercialAirfareCount).toFixed(2)}
              disabled
              InputLabelProps={{ shrink: true }}
              id="filled-basic"
              label="Total Cost"
              variant="filled"
            />
          </div>
          <LoadingButton
            loading={flightsloading}
            variant="contained"
            loadingPosition="end"
            disabled={flightdisable}
            onClick={() => setCount(count + 1)}
          >
            <span>Find Flights</span>
          </LoadingButton>
          <Button
            onClick={handleOnSubmit}
          >
            Save
          </Button>
          <FlightTable
            data={flightData}
            updateExerciseAircraft={updateExerciseAircraft}
          />
        </LocalizationProvider>
      </Paper>
    </div>
  )
}

export default PickAddOns