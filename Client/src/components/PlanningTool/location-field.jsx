import React, { useState, useEffect } from "react";
import Select, { createFilter } from "react-select";
import TactApi from "../../api/TactApi";

const defaultLabelValues = {
    exerciseLabels: [{ value: undefined, label: "Select Exercise"}],
    locations: [
        { airport: 'test airport', region: 'test state', country: 'United States' },
        { airport: 'OCONUS airport', region: 'test region', country: 'Germany'}
    ],
}

const generateLocationLabels = (inputs) => {
    return inputs ? 
    inputs.map((input) => { return {
        value: input.locationID,
        label: input.country === 'United States' 
            ? `${input.airport}, ${input.region} (${input.iata})`
            : `${input.airport}, ${input.country} (${input.iata})`
    }}) :
    defaultLabelValues.locations.map((location, index) => { return {
        value: index,
        label: location.contry === 'United States'
        ? `${location.airport}, ${location.region}`
        : `${location.airport}, ${location.country}`
    }});
};

export const LocationField = (props) => {
    const {
        inputLabel,
        name,
        id,
        onChange,
        locationId,
    } = props;

    const [locationValue, setLocationValue] = useState(
        {
            label: 'Select...',
            value: -1
        });
    const [locationlabels, setLocationLabels] = useState();

    const fetchLocations = async () => {
        // const response = await TactApi.getAllLocations();
        // setLocations(response);
        await TactApi.getAllLocations()
            .then(response => {
                setLocationLabels(generateLocationLabels(response))
            });
        ;
    };
    
    useEffect(() => {
        fetchLocations();
    }, [])

    useEffect(() => {
        if (locationId && locationlabels)
        setLocationValue({
            value: locationId,
            label: (locationlabels.find((label) => parseInt(label.value) === parseInt(locationId))).label
        })
    }, [locationId, locationlabels])

    const filterConfig = {
        ignoreCase: true,
        ignoreAccents: false,
        trim: false,
      };

    return (
        <div className="input-container">
            <label htmlFor={name} className='inputLabel'>{inputLabel}</label>
            <Select
                className="input"
                name={name}
                id={id}
                value={locationValue}
                onChange={onChange}
                filterOption={createFilter(filterConfig)}
                isSearchable
                options={locationlabels}
            />
        </div>
    )
};