import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

// styles
import '../../styles/PlanningToolPg1.css';
import TactApi from '../../api/TactApi';

const defaultLabelValues = {
    exerciseLabels: [{ value: undefined, label: "Select Exercise"}],
    locations: [
        { airport: 'test airport', region: 'test state', country: 'United States' },
        { airport: 'OCONUS airport', region: 'test region', country: 'Germany'}
    ],
}

const generateExerciseLabels = (input) => {
    return input ? 
        input.map((i) => { return {
            value: i.exerciseID,
            label: i.exerciseName,
        }}) :
        defaultLabelValues.exerciseLabels;
};

const generateLocationLabels = (inputs) => {
    return inputs ? 
    inputs.map((input) => { return {
        value: input.locationID,
        label: input.country === 'United States' 
            ? `${input.airport}, ${input.region}`
            : `${input.airport}, ${input.country}`
    }}) :
    defaultLabelValues.locations.map((location, index) => { return {
        value: index,
        label: location.contry === 'United States'
        ? `${location.airport}, ${location.region}`
        : `${location.airport}, ${location.country}`
    }});
};

function YourInfo(props) {
    const { data, updateFileHandler, setSaved } = props;
    const [locations, setLocations ] = useState()
    const [exercises, setExercises] = useState(undefined);
    const [defaultExerciseValue, setDefaultExerciseValue] = useState();
    const [defaultToValue, setDefaultToValue] = useState();
    const [defaultFromValue, setDefaultFromValue] = useState();

    const fetchAllExercises = async () => { 
        const response = await TactApi.getAllExercises();
        setExercises(response);
    };

    const fetchLocationById = async (id) => { 
        return await TactApi.getLocationById(id);
    };

    const fetchLocations = async () => {
        const response = await TactApi.getAllLocations();
        setLocations(response);
    };

    useEffect(() => {
        fetchLocations();
        fetchAllExercises();
        setSaved(false);
    }, [setSaved])

    const exerciseLabels = generateExerciseLabels(exercises);

    const locationlabels = generateLocationLabels(locations);

    //IF the unitExercise already exist, this populates the table values with the 
    //pre-existing data
    useEffect(() => {
        data.exerciseID && exercises
        ? setDefaultExerciseValue({
            value: data.exerciseID,
            label: exerciseLabels.find((label) => label.value === data.exerciseID).label
        })
        : setDefaultExerciseValue({
            label: 'Select an Exercise',
            value: -1
        }) 

        data.locationTo && locations && locationlabels && locationlabels.length > 0 
            ? setDefaultToValue({
                value: data.locationTo,
                label: (locationlabels.find((label) => parseInt(label.value) === parseInt(data.locationTo))).label
            })
            : setDefaultToValue({
                label: 'Select...',
                value: -1
            });

        data.locationFrom && locations &&locationlabels && locationlabels.length > 0 
            ? setDefaultFromValue({
                value: data.locationFrom,
                label: (locationlabels.find((label) => parseInt(label.value) === parseInt(data.locationFrom))).label
            })
            : setDefaultFromValue({
                label: 'Select...',
                value: -1
            })    

    }, [data, locations, locationlabels, exercises, exerciseLabels] )

    const verifyExerciseInputs = (e) => {
        updateFileHandler({exerciseID: e.value}); //fills in template based on key value pair
    };

    const verifyStartDateInputs = (e) => {
        updateFileHandler({travelStartDate: e.$d});
    };

    const verifyEndDateInputs = (e) => {
        updateFileHandler({travelEndDate: e.$d});
    };

    const changeDepartLocation = (e) => {
        updateFileHandler({locationFrom: e.value})
    };

    const changeDestinationLocation = (e) => {
        updateFileHandler({locationTo: e.value})
    };

    return (
        <div className="form-container">
            <div className="input-container">
                <label htmlFor="name" className='inputLabel'>Exercise Name</label>
                <Select
                    className="input"
                    name="exercise-name"
                    placeholder={'Select an Exercise'}
                    value={defaultExerciseValue}
                    onChange={verifyExerciseInputs}
                    isSearchable
                    required
                    options={exerciseLabels}
                />
            </div>
            <div className="input-container">
                <label htmlFor="dates" className='inputLabel'>Start / End Dates</label>
                {/* use the DateRangePicker for this specific component  https://mui.com/x/react-date-pickers/date-range-picker/*/}
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker', 'DatePicker']}>
                        <DatePicker
                            label="Start Date"
                            defaultValue={dayjs(data.travelStartDate)}
                            value={dayjs(data.travelStartDate)}
                            sx={{ backgroundColor: 'white' }}
                            onChange={verifyStartDateInputs}
                        />
                        <DatePicker
                            label="End Date"
                            defaultValue={dayjs(data.travelEndDate)}
                            value={dayjs(data.travelEndDate)}
                            sx={{ backgroundColor: 'white' }}
                            onChange={verifyEndDateInputs}
                        />
                    </DemoContainer>
                </LocalizationProvider>
            </div>
            <div className="input-container">
                <label htmlFor="departingLocation" className='inputLabel'>Departing Location</label>
                <Select
                    className='input'
                    name="departingLocation"
                    id='locationFrom'
                    value={defaultFromValue}
                    onChange={changeDepartLocation}
                    isSearchable
                    options={locationlabels}
                />
            </div>
            <div className="input-container">
                <label htmlFor="destination" className='inputLabel'>Destination</label>
                <Select
                    className="input"
                    name="destination"
                    id="locationTo"
                    value={defaultToValue}
                    onChange={changeDestinationLocation}
                    isSearchable
                    options={locationlabels}
                />
            </div>
        </div>
    );
}

export default YourInfo;