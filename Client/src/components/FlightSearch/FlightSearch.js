import LocationField from "../LocationField/LocationField"
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';
import FlightTable from "../FlightTable/FlightTable";
// import data from "./rawdata.json";
import { getFlightOffers } from "../../api/amadeus.api.js"
import axios from 'axios'


const FlightSearch = () => {
    const [count, setCount] = useState(0)
    const [data, setData] = useState([]);

    useEffect(() => {
        console.log(count)

        // setLoading(true)
        const { out, source } = getFlightOffers({ departureDate: '2023-06-25', returnDate: '2023-06-30', locationDeparture: 'SJC', locationArrival: 'SAN' });

    
        out.then(res => {
          if (!res.data.code) {
            // setOptions(res.data.data);
            setData(res.data);
          }
        //   setLoading(false)
        }).catch(err => {
          axios.isCancel(err);
        //   setOptions([]);
        //   setLoading(false)
    
        });
    
        return () => {
          source.cancel()
        };
      }, [count]);


    return(
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <LocationField label='To:'/>
            <LocationField label='From:'/>
            <DatePicker label="Depart" />
            <DatePicker label="Return" />
            <Button variant="contained" onClick={() => setCount(count + 1)}>
                Find Flights
            </Button>
            <FlightTable data={data}/>
        </LocalizationProvider>


    )

}


export default FlightSearch