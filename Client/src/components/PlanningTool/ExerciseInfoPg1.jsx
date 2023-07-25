import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { travelLocations } from '../Util/locations';

// styles
import '../../styles/PlanningToolPg1.css';

const defaultValues = {
    exerciseLabels: [{ value: 'x', label: "Select Exercise"}],
    locations: [{ city: 'test city', state: 'test state', country: 'test country' }],
}

function YourInfo(props) {
    const { data, exercises, updateFileHandler } = props;
    const [locations, setLocations ] = useState(undefined)

    async function fetchLocations() {
        //TODO: point this to the db when the table is created
        const response = await Promise.resolve(travelLocations);
        setLocations(response);
    };

    useEffect(() => {
        fetchLocations()
    }, [])

    const exerciseLabels = exercises ? 
        exercises.map((exercise) => { return {
            value: exercise.exerciseID,
            label: exercise.exerciseName,
        }}) :
        defaultValues.exerciseLabels;

    const locationlabels = locations ? 
        locations.map((location, i) => { return {
            value: `${i}`,
            label: location.state ? `${location.city}, ${location.state}` : `${location.city}, ${location.country}`
        }}) :
        defaultValues.locations.map((location, i) => { return {
            value: `${i}`,
            label: location.state ? `${location.city}, ${location.state}` : `${location.city}, ${location.country}`
        }})
    
    const verifyExerciseInputs = (e) => {
        updateFileHandler("exerciseID", e.value); //fills in template based on key value pair
    };

    const verifyStartDateInputs = (e) => {
        updateFileHandler("travelStartDate", e.$d);
    };

    const verifyEndDateInputs = (e) => {
        updateFileHandler("travelEndDate", e.$d);
    };

    const changeDepartLocation = (e) => {
        updateFileHandler("locationFrom", e.label)
    };

    const changeDestinationLocation = (e) => {
        updateFileHandler("locationTo", e.label)
    };

    return (
        <div className="form-container">
            <div className="input-container">
                <label htmlFor="name" className='inputLabel'>Exercise Name</label>
                <Select
                    className="input"
                    name="exercise-name"
                    placeholder={'Select an Exercise'}
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
                            value={dayjs(data.travelStartDate)}
                            sx={{ backgroundColor: 'white' }}
                            onChange={verifyStartDateInputs}
                        />
                        <DatePicker
                            label="End Date"
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
                    onChange={changeDepartLocation}
                    placeholder='Select Departure Location'
                    isSearchable
                    required
                    options={locationlabels}
                />
            </div>
            <div className="input-container">
                <label htmlFor="destination" className='inputLabel'>Destination</label>
                <Select
                    className="input"
                    name="destination"
                    id="locationTo"
                    onChange={changeDestinationLocation}
                    placeholder="Select Destination Location"
                    isSearchable
                    required
                    options={locationlabels}
                />
            </div>
        </div>
    );
}

export default YourInfo;