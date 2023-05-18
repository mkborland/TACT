import LocationField from "../LocationField/LocationField"
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';
import FlightTable from "../FlightTable/FlightTable";
import { getFlightOffers } from "../../api/amadeus.api.js"
import axios from 'axios'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';


const FlightSearch = () => {
    const [count, setCount] = useState(0)
    const [data, setData] = useState([]);
    // const [inputs, setInputs] = useState({ departureDate: '2023-06-25', returnDate: '2023-06-30', locationDeparture: 'SJC', locationArrival: 'SAN' });
    const [inputs, setInputs] = useState({});
    const [travelmethod, setTravelMethod] = useState('');
    const [flightdisable, setFlightDisable] = useState('');
    

    const handleChange = (event) => {
        setTravelMethod(event.target.value);
        if (event.target.value === "Military Air") {
            setFlightDisable(true)
        }else{
            setFlightDisable(false)
        }
    };

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
        <Box style={{backgroundColor: "#FFFFFF"}} sx={{ minWidth: 120 }}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker label="Depart" onChange={newValue =>{
                            chooseInputs('departureDate', newValue.format('YYYY-MM-DD'))
                        }}/>
                    <DatePicker label="Return" onChange={newValue =>{
                        chooseInputs('returnDate', newValue.format('YYYY-MM-DD'))
                    }}/>
                    <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Travel Method</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={travelmethod}
                    label="Travel Method"
                    onChange={handleChange}
                    >
                        <MenuItem value="Military Air">Military Air</MenuItem>
                        <MenuItem value="Commercial Air">Commercial Air</MenuItem>
                    </Select>
                    </FormControl>
                    <LocationField disabled={flightdisable} chooseInputs={chooseInputs} label='To:' name='locationDeparture'/>
                    <LocationField disabled={flightdisable} chooseInputs={chooseInputs} label='From:' name='locationArrival'/>
                    <Button disabled={flightdisable} variant="contained" onClick={() => setCount(count + 1)}>
                        Find Flights
                    </Button>
                    <FlightTable disabled={flightdisable} data={data}/>
                </LocalizationProvider>
        </Box>



    )

}


export default FlightSearch