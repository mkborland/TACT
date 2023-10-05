import React, { useState, useEffect } from "react";
import Select from "react-select";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// styles
import "../../styles/PlanningToolPg1.css";
import { LocationField } from "./location-field";

const defaultLabelValues = {
  exerciseLabels: [{ value: undefined, label: "Select Exercise" }],
};

const generateExerciseLabels = (input) => {
  return input
    ? input.map((i) => {
        return {
          value: i.exerciseID,
          label: i.exerciseName,
        };
      })
    : defaultLabelValues.exerciseLabels;
};

function YourInfo(props) {
  const { data, updateFileHandler, aircraftData, setAircraftData, exercises } =
    props;
  const [defaultExerciseValue, setDefaultExerciseValue] = useState();

  const exerciseLabels = generateExerciseLabels(exercises);

  //IF the unitExercise already exist, this populates the table values with the
  //pre-existing data
  useEffect(() => {
    data.exerciseID && exercises
      ? setDefaultExerciseValue({
          value: data.exerciseID,
          label: exerciseLabels.find((label) => label.value === data.exerciseID)
            .label,
        })
      : setDefaultExerciseValue({
          label: "Select an Exercise",
          value: -1,
        });
  }, [data, exercises, exerciseLabels]);

  const verifyExerciseInputs = (e) => {
    updateFileHandler({ exerciseID: e.value });
  };

  const resetCommercialAirfareCost = () => {
    const temp = aircraftData ? aircraftData[0] : [];
    if (temp?.unitExerciseID && temp?.aircraftType) {
      temp.commercialAirfareCost = 0;
      setAircraftData([temp]);
    }
  };

  const verifyStartDateInputs = (e) => {
    updateFileHandler({ travelStartDate: e.$d });
    resetCommercialAirfareCost();
  };

  const verifyEndDateInputs = (e) => {
    updateFileHandler({ travelEndDate: e.$d });
    resetCommercialAirfareCost();
  };

  const changeDepartLocation = (e) => {
    updateFileHandler({ locationFrom: e.value });
    resetCommercialAirfareCost();
  };

  const changeDestinationLocation = (e) => {
    updateFileHandler({ locationTo: e.value });
    resetCommercialAirfareCost();
  };

  return (
    <div className="form-container">
      <div className="input-container">
        <div htmlFor="exercise-name" className="inputLabel">
          Exercise Name
        </div>
        <Select
          id="exercise-name"
          className="input"
          name="exercise-name"
          placeholder={"Select an Exercise"}
          value={defaultExerciseValue}
          onChange={verifyExerciseInputs}
          isSearchable
          required
          options={exerciseLabels}
        />
      </div>
      <div className="input-container">
        <div htmlFor="date-container" className="inputLabel">
          Travel Start / End Dates
        </div>
        {/* use the DateRangePicker for this specific component  https://mui.com/x/react-date-pickers/date-range-picker/*/}
        <LocalizationProvider id="date-container" dateAdapter={AdapterDayjs}>
          <DemoContainer
            id="date-container"
            components={["DatePicker", "DatePicker"]}
          >
            <DatePicker
              label="Depart Date"
              defaultValue={dayjs(data.travelStartDate)}
              value={dayjs(data.travelStartDate)}
              sx={{ backgroundColor: "white" }}
              onChange={verifyStartDateInputs}
            />
            <DatePicker
              label="Return Date"
              defaultValue={dayjs(data.travelEndDate)}
              value={dayjs(data.travelEndDate)}
              sx={{ backgroundColor: "white" }}
              onChange={verifyEndDateInputs}
            />
          </DemoContainer>
        </LocalizationProvider>
      </div>
      <LocationField
        inputLabel="Departing Location"
        name="departingLocation"
        id="locationFrom"
        onChange={changeDepartLocation}
        locationId={data.locationFrom}
      />
      <LocationField
        inputLabel="Destination Location"
        name="destination"
        id="locationTo"
        onChange={changeDestinationLocation}
        locationId={data.locationTo}
      />
    </div>
  );
}

export default YourInfo;
