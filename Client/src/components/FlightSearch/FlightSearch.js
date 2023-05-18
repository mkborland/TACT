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
    const [inputs, setInputs] = useState({ departureDate: '2023-06-25', returnDate: '2023-06-30', locationDeparture: 'SJC', locationArrival: 'SAN' });

    const chooseInputs = (name, value) => {
        inputs[name] = value
        setInputs(inputs);
    }

    useEffect(() => {
        console.log(count)
        if(count>0){
            // setLoading(true)
            const { out, source } = getFlightOffers(inputs);

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

        }

      }, [count]);


    return(
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <LocationField chooseInputs={chooseInputs} label='To:' name='locationDeparture'/>
            <LocationField chooseInputs={chooseInputs} label='From:' name='locationArrival'/>
            <DatePicker label="Depart" onChange={newValue =>{
                chooseInputs('departureDate', newValue.format('YYYY-MM-DD'))
            }}/>
            <DatePicker label="Return" onChange={newValue =>{
                chooseInputs('returnDate', newValue.format('YYYY-MM-DD'))
            }}/>
            <Button variant="contained" onClick={() => setCount(count + 1)}>
                Find Flights
            </Button>
            <FlightTable data={data}/>
        </LocalizationProvider>


    )

}


export default FlightSearch