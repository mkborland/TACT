import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

// styles
import '../../styles/PlanningToolPg1.css';

function YourInfo({ data, updateFileHandler }) {
    // function to change the className of the input and
    // label to warn that the client has not filled in that field
    const verifyInputsInvalids = (e) => {
        e.target.classList.add('inputInvalid');
        e.target.labels[0].className = 'inputLabel beforeInputInvalid';
    };

    //function to bring back to normal the input
    //that the client filled in correctly
    const verifyInputs = (e) => {
        updateFileHandler(e.target.id, e.target.value);

        e.target.classList.remove("inputInvalid");
        e.target.labels[0].className = 'inputLabel';

    };

    const [startDate, setStartDate] = React.useState(dayjs(new Date().toJSON().slice(0, 10)));
    const [endDate, setEndDate] = React.useState(dayjs(new Date().toJSON().slice(0, 10)));

    return (
        <div className="form-container">
            <div className="input-container">
                <label htmlFor="name" className='inputLabel'>Exercise Name</label>
                <input
                    className="input"
                    type="text"
                    name="name"
                    id="name"
                    value={data.name || ""}
                    onChange={(e) => verifyInputs(e)}
                    placeholder="Exercise Name will auto-convert to upper-case"
                    onInvalid={verifyInputsInvalids}
                    required
                />
            </div>

            <div className="input-container">
                <label htmlFor="dates" className='inputLabel'>Start / End Dates</label>

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker', 'DatePicker']}>
                        <DatePicker
                            label="Start Date"
                            value={startDate}
                            sx={{ backgroundColor: 'white' }}
                            // onChange={(e) => verifyInputs(e)}
                            onChange={(newValue) => setStartDate(newValue)}
                            // onInvalid={verifyInputsInvalids}
                            />
                        <DatePicker
                            label="End Date"
                            value={endDate}
                            sx={{ backgroundColor: 'white' }}
                            // onChange={(e) => verifyInputs(e)}
                            onChange={(newValue) => setEndDate(newValue)}
                            // onInvalid={verifyInputsInvalids}
                            />
                    </DemoContainer>
                </LocalizationProvider>
            </div>


            <div className="input-container">
                <label htmlFor="departingLocation" className='inputLabel'>Departing Location</label>
                <input
                    className="input"
                    type="text"
                    name="departingLocation"
                    id="departingLocation"
                    value={data.departingLocation || ""}
                    onChange={(e) => verifyInputs(e)}
                    placeholder="e.g. March ARB, CA"
                    onInvalid={verifyInputsInvalids}
                    required
                />
            </div>

            <div className="input-container">
                <label htmlFor="destination" className='inputLabel'>Destination</label>
                <input
                    className="input"
                    type="text"
                    name="destination"
                    id="destination"
                    value={data.destination || ""}
                    onChange={(e) => verifyInputs(e)}
                    placeholder="Name of military installation, airfield, city, or region"
                    onInvalid={verifyInputsInvalids}
                    required
                />
            </div>
        </div>
    );
}

export default YourInfo;