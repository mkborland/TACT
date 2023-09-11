import React, { useState, useEffect } from "react";
import Select, { createFilter } from "react-select";
import TactApi from "../../api/TactApi";

const defaultLabelValues = {
  exerciseLabels: [{ value: undefined, label: "Select Exercise" }],
  locations: [
    {
      airport: "test airport",
      region: "test state",
      country: "United States",
      iata: `tst`,
    },
    {
      airport: "OCONUS airport",
      region: "test region",
      country: "Germany",
      iata: "ost",
    },
  ],
};

const generateLocationLabels = (inputs) => {
  return inputs
    ? inputs.map((input) => {
        return {
          value: input.iata,
          label:
            input.country === "United States"
              ? `${input.airport}, ${input.region} (${input.iata})`
              : `${input.airport}, ${input.country} (${input.iata})`,
        };
      })
    : defaultLabelValues.locations.map((location, index) => {
        return {
          value: `${index}`,
          label:
            location.contry === "United States"
              ? `${location.airport}, ${location.region}`
              : `${location.airport}, ${location.country}`,
        };
      });
};

export const LocationField = (props) => {
  const { inputLabel, name, id, onChange, locationId } = props;

  const [locationValue, setLocationValue] = useState({
    label: "Select...",
    value: -1,
  });
  const [locationLabels, setLocationLabels] = useState();
  const [locationArray, setLocationArray] = useState([
    {
      locationID: 0,
      region: "Test Region",
      iata: "TST",
      icao: "KTST",
      airport: "Test Airport",
      country: "Test",
    },
  ]);

  const fetchLocations = async () => {
    await TactApi.getAllLocations().then((response) => {
      setLocationArray(response);
    });
  };

  useEffect(() => {
    fetchLocations();
  }, []);

  useEffect(() => {
    setLocationLabels(generateLocationLabels(locationArray));
  }, [locationArray]);

  const findLabel = () => {
    if (locationLabels) {
      const result = locationLabels.find((label) => label.value === locationId);
      return result;
    }
  };

  useEffect(() => {
    if (locationId && locationLabels && locationLabels.length > 3) {
      const test = findLabel();
      setLocationValue(test);
    }
  }, [locationId, locationLabels]);

  const filterConfig = {
    ignoreCase: true,
    ignoreAccents: false,
    trim: false,
  };

  return (
    <div className="input-container">
      <div htmlFor={id} className="inputLabel">
        {inputLabel}
      </div>
      <Select
        className="input"
        name={name}
        id={id}
        value={locationValue}
        onChange={onChange}
        filterOption={createFilter(filterConfig)}
        isSearchable
        options={locationLabels}
      />
    </div>
  );
};
