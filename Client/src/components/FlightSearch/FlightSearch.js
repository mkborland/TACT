import LocationField from "../LocationField/LocationField"
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import Button from '@mui/material/Button';


const FlightSearch = () => {
    

    return(
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <LocationField label='To:'/>
            <LocationField label='From:'/>
            <DatePicker label="Depart" />
            <DatePicker label="Return" />
            <Button variant="contained"
                onClick={() => {
                    alert('clicked');
                }}
            >
                Find Flights
            </Button>
        </LocalizationProvider>
    )

}


export default FlightSearch