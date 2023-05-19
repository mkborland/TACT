import axios from "axios";
import { useState, useEffect } from "react";
import LocationField from "../LocationField/LocationField.js";
import { useAppContext } from "../../context/AppContext.js";
import FlightTable from "../FlightTable/FlightTable.js";
import { getFlightOffers } from "../../api/amadeus.api.js";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import LoadingButton from "@mui/lab/LoadingButton";
import InputLabel from "@mui/material/InputLabel";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Slider from "@mui/material/Slider";
import MuiInput from "@mui/material/Input";
import { styled } from "@mui/material/styles";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

const FlightSearch = () => {
  const nav = useNavigate();
  const { newExerciseObject, setNewExerciseObject } = useAppContext();
  const newExerciseObject2 = newExerciseObject;

  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  // const [inputs, setInputs] = useState({ departureDate: '2023-06-25', returnDate: '2023-06-30', locationDeparture: 'SJC', locationArrival: 'SAN' });
  const [inputs, setInputs] = useState({});
  const [flightdisable, setFlightDisable] = useState(true);
  const [flightsloading, setFlightsLoading] = useState(false);
  const [currentcost, setCurrentCost] = useState(0);

  const [totalpersonnel, setTotalPersonnel] = useState(newExerciseObject.overView.totalPersonal);
  // const [totalpersonnel, setTotalPersonnel] = useState(100);
  const [value, setValue] = useState({ mil: totalpersonnel, com: 0 });

  const Input = styled(MuiInput)`
    width: 42px;
  `;

  useEffect(() => {
    newExerciseObject2.perDiem.airFare.comAirFare.occupancy = value.com;
    newExerciseObject2.perDiem.airFare.govAirFare.occupancy = value.mil;
    setNewExerciseObject(newExerciseObject2);

    if (value.com > 0) {
      setFlightDisable(false);
    } else {
      setFlightDisable(true);
    }
  }, [value]);

  const updateCost = (cost) => {
    setCurrentCost(cost);
  };

  const handleSliderChange = (event, newValue) => {
    setValue({ com: newValue, mil: totalpersonnel - newValue });
  };

  const handleMilInputChange = (event) => {
    setValue(
      event.target.value === ""
        ? ""
        : {
            com: Number(totalpersonnel - event.target.value),
            mil: Number(event.target.value),
          }
    );
  };

  const handleComInputChange = (event) => {
    setValue(
      event.target.value === ""
        ? ""
        : {
            com: Number(event.target.value),
            mil: Number(totalpersonnel - event.target.value),
          }
    );
  };

  // const handleBlur = () => {
  //   if (value < 0) {
  //     setValue(0);
  //   } else if (value > 100) {
  //     setValue(100);
  //   }
  // };

  const chooseInputs = (name, value) => {
    inputs[name] = value;
    setInputs(inputs);
    switch (name) {
      case "departureDate":
        newExerciseObject2.overView.startEx = value;
        setNewExerciseObject(newExerciseObject2);
        break;
      case "returnDate":
        newExerciseObject2.overView.endEx = value;
        setNewExerciseObject(newExerciseObject2);
        break;
      case "locationDepartureObject":
        newExerciseObject2.overView.startLocation = value.citystate;
        setNewExerciseObject(newExerciseObject2);
        break;
      case "locationArrivalObject":
        newExerciseObject2.overView.endLocation = value.citystate;
        setNewExerciseObject(newExerciseObject2);
        break;
    }
    console.log(newExerciseObject);
  };

  useEffect(() => {
    console.log(count);
    if (count > 0) {
      setFlightsLoading(true);
      const { out, source } = getFlightOffers(inputs);

      out
        .then((res) => {
          if (!res.data.code) {
            setData(res.data);
          }
          setFlightsLoading(false);
        })
        .catch((err) => {
          axios.isCancel(err);
          setFlightsLoading(false);
        });

      return () => {
        source.cancel();
      };
    }

    // setCount(0)
  }, [count]);

  return (
    <Box sx={{ backgroundColor: "#FFFFFF", p: 2 }}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Depart"
          onChange={(newValue) => {
            chooseInputs("departureDate", newValue.format("YYYY-MM-DD"));
          }}
        />
        <span> </span>
        <DatePicker
          label="Return"
          onChange={(newValue) => {
            chooseInputs("returnDate", newValue.format("YYYY-MM-DD"));
          }}
        />
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <InputLabel id="demo-simple-select-label">Mil Air</InputLabel>
            <Input
              value={value.mil}
              size="small"
              onChange={handleMilInputChange}
              // onBlur={handleBlur}
              inputProps={{
                step: 1,
                min: 0,
                max: { totalpersonnel },
                type: "number",
                "aria-labelledby": "input-slider",
              }}
            />
          </Grid>
          <Grid item xs>
            <Slider
              value={typeof value.com === "number" ? value.com : 0}
              onChange={handleSliderChange}
              aria-labelledby="input-slider"
              min={0}
              max={totalpersonnel}
            />
          </Grid>
          <Grid item>
            <InputLabel id="demo-simple-select-label">Comm Air</InputLabel>
            <Input
              value={value.com}
              size="small"
              onChange={handleComInputChange}
              // onBlur={handleBlur}
              inputProps={{
                step: 1,
                min: 0,
                max: { totalpersonnel },
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
          chooseInputs={chooseInputs}
          label="From:"
          name="locationDeparture"
        />
        <LocationField
          chooseInputs={chooseInputs}
          label="To:"
          name="locationArrival"
        />
        <div>
          <TextField
            value={"$" + Number(currentcost).toFixed(2)}
            disabled
            InputLabelProps={{ shrink: true }}
            id="filled-basic"
            label="Cost Per"
            variant="filled"
          />
          <span> </span>
          <TextField
            value={"$" + Number(currentcost * value.com).toFixed(2)}
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
          onClick={() =>
            nav("/Dashboard/NewExercisePage-pg3", { replace: true })
          }
        >
          Submit
        </Button>
        <FlightTable
          disabled={flightdisable}
          data={data}
          updateCost={updateCost}
        />
      </LocalizationProvider>
    </Box>
  );
};

export default FlightSearch;
