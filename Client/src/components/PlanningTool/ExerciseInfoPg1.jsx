import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { travelLocations } from '../Util/locations';
import GetAllExercises from "../../api/exercises/get/GetAllExercises"

// styles
import '../../styles/PlanningToolPg1.css';

const defaultLabelValues = {
    exerciseLabels: [{ value: undefined, label: "Select Exercise"}],
    locations: [{ city: 'test city', state: 'test state', country: 'test country' }],
}

const generateExerciseLabels = (input) => {
    return input ? 
        input.map((i) => { return {
            value: i.exerciseID,
            label: i.exerciseName,
        }}) :
        defaultLabelValues.exerciseLabels;
};

const generateLocationLabels = (input) => {
    return input ? 
    input.map((i, index) => { return {
        value: `${index}`,
        label: i.state ? `${i.city}, ${i.state}` : `${i.city}, ${i.country}`
    }}) :
    defaultLabelValues.locations.map((location, index) => { return {
        value: `${index}`,
        label: location.state ? `${location.city}, ${location.state}` : `${location.city}, ${location.country}`
    }});
};

function YourInfo(props) {
    const { data, updateFileHandler, setSaved } = props;
    const [locations, setLocations ] = useState()
    const [exercises, setExercises] = useState(undefined);
    const [defaultToValue, setDefaultToValue] = useState();
    const [defaultFromValue, setDefaultFromValue] = useState();

    const fetchAllExercises = async () => { 
        const response = await GetAllExercises();
        setExercises(response);
    }

    async function fetchLocations() {
        //TODO: point this to the db when the table is created
        const response = await Promise.resolve(travelLocations);
        setLocations(response);
    };

    useEffect(() => {
        fetchLocations();
        fetchAllExercises();
        setSaved(false); //TODO turn this back on when figued out how to know all is saved
        // setSaved(true);
    }, [setSaved])

    //check for all data complete to changed saved -> true
    useEffect(() => {
        if (
            data.unitExerciseID !== undefined &&
            data.exerciseID !== undefined  &&
            data.dateCreated !== undefined &&
            data.locationFrom !== undefined &&
            data.locationTo !== undefined &&
            data.travelStartDate !== undefined &&
            data.travelEndDate !== undefined
        ) {
            console.log('page 1 data should be saved')
            setSaved(true)
        }
    }, [data, setSaved])

    const exerciseLabels = generateExerciseLabels(exercises);

    const locationlabels = generateLocationLabels(locations);

    useEffect(() => {
        data.locationTo 
            ? setDefaultToValue({
                label: data.locationTo,
                value: locationlabels.findIndex((label) => label.label === data.locationTo)
            })
            : setDefaultToValue({
                label: 'Select...',
                value: -1
            });

        data.locationFrom 
            ? setDefaultFromValue({
                label: data.locationFrom,
                value: locationlabels.findIndex((label) => label.label === data.locationFrom)
            })
            : setDefaultFromValue({
                label: 'Select...',
                value: -1
            })            

    }, [data, locationlabels] )

    // const defaultToValue = data.locationTo ?
    //      :
    //     {label: "test label", value: "test value"}
    
// console.log('def to label', defaultToValue)

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
                    // required
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