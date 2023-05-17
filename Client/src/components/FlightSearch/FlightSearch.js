import LocationField from "../LocationField/LocationField"
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'


const FlightSearch = () => {


    return(
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <span><LocationField label='To:'/></span>
            <span><LocationField label='From:'/></span>
            <span><DatePicker label="Depart" /></span>
            <span><DatePicker label="Return" /></span>
        </LocalizationProvider>
    )

}


export default FlightSearch