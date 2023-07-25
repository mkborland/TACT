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
    
    async function fetchLocations() {
        //TODO: point this to the db when the table is created
        const response = await Promise.resolve(travelLocations);
        setLocations(response);
    }

    //function to bring back to normal the input
    //that the client filled in correctly

    const verifyExerciseInputs = (e) => {
        updateFileHandler("exerciseID", e.value); //fills in template based on key value pair
    };

    const verifyStartDateInputs = (e) => {
        updateFileHandler("travelStartDate", e.$d); //fills in template based on key value pair
    };

    const verifyEndDateInputs = (e) => {
        updateFileHandler("travelEndDate", e.$d); //fills in template based on key value pair
    };

    const changeDepartLocation = (e) => {
        const newLocation = locationlabels.find((label) => label.value === e.value)
        console.log(newLocation)
        updateFileHandler("locationFrom", e.label)
    }

    const changeDestinationLocation = (e) => {
        const newLocation = locationlabels.find((label) => label.value === e.value)
        console.log(newLocation)
        updateFileHandler("locationTo", e.label)
    }
    return (
        <div className="form-container">
            <div className="input-container">
                <label htmlFor="name" className='inputLabel'>Exercise Name</label>
                <Select
                    className="input"
                    name="exercise-name"
                    defaultValue={exerciseLabels[0].value}
                    onChange={verifyExerciseInputs}
                    isSearchable
                    required
                    options={exerciseLabels}
                />
             </div>

            <div className="input-container">
                <label htmlFor="dates" className='inputLabel'>Start / End Dates</label>

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker', 'DatePicker']}>
                        <DatePicker
                            label="Start Date"
                            value={dayjs(data.travelStartDate).format('DD MMM YYYY')}
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