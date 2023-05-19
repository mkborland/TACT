// import * as React from 'react';
import { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { useAppContext } from '../../context/AppContext';

class simpleflightoffer{
    constructor(offer){
        // console.log(offer)
        this.departureStartAirport = offer.itineraries[0].segments[0].departure.iataCode
        this.departureStartTime = new Date(offer.itineraries[0].segments[0].departure.at).toTimeString().slice(0,5)
        this.departureEndAirport = offer.itineraries[0].segments.slice(-1)[0].arrival.iataCode
        this.departureEndTime = new Date(offer.itineraries[0].segments.slice(-1)[0].arrival.at).toTimeString().slice(0,5)
        this.departureStopovers = offer.itineraries[0].segments.length - 1

        this.returnStartAirport = offer.itineraries[1].segments[0].departure.iataCode
        this.returnStartTime = new Date(offer.itineraries[1].segments[0].departure.at).toTimeString().slice(0,5)
        this.returnEndAirport = offer.itineraries[1].segments.slice(-1)[0].arrival.iataCode
        this.returnEndTime = new Date(offer.itineraries[1].segments.slice(-1)[0].arrival.at).toTimeString().slice(0,5)
        this.returnStopovers = offer.itineraries[1].segments.length - 1

        this.cost = offer.price.total

        this.id = offer.id
    }
}

const FlightTable = (props) => {
    const {newExerciseObject, setNewExerciseObject} = useAppContext()
    const newExerciseObject2 = newExerciseObject
    const [simple_data, setSimple_Data] = useState([]);


    const selectButtonClick = (cost) => {
        props.updateCost(cost)
        newExerciseObject2.perDiem.airFare.comAirFare.rate = Number(cost)
        newExerciseObject2.perDiem.airFare.govAirFare.rate = 0
        setNewExerciseObject(newExerciseObject2)
        // console.log(newExerciseObject)
        setSimple_Data([])
    };

    useEffect(() => {
        if (props.data === undefined){
            setSimple_Data([])
        }else{
            setSimple_Data( props.data.map(offer => {
                // console.log(offer)
                return new simpleflightoffer(offer)
            })
            )
        }

    }, [props.data]);


  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Flights</TableCell>
            <TableCell align="right">Departure<br />Trip</TableCell>
            <TableCell align="right">Departure<br />Stopovers</TableCell>
            <TableCell align="right">Return<br />Trip</TableCell>
            <TableCell align="right">Return<br />Stopovers</TableCell>
            <TableCell align="right">Cost</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {simple_data.map((offer) => (
            <TableRow
              key={offer.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            //   onClick={(e) => alert(offer.cost)}
            >
              <TableCell component="th" scope="offer">
                    <Button variant="contained" onClick={() => selectButtonClick(offer.cost)}>Select</Button>
                </TableCell>
              <TableCell align="right">{offer.departureStartAirport}: {offer.departureStartTime}<br />{offer.departureEndAirport}: {offer.departureEndTime}</TableCell>
              <TableCell align="right">{offer.departureStopovers}</TableCell>
              <TableCell align="right">{offer.returnStartAirport}: {offer.returnStartTime}<br />{offer.returnEndAirport}: {offer.returnEndTime}</TableCell>
              <TableCell align="right">{offer.returnStopovers}</TableCell>
              <TableCell align="right">${offer.cost}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default FlightTable