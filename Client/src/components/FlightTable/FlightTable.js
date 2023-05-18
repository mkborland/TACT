// import * as React from 'react';
import { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

class simpleflightoffer{
    constructor(offer){
        // console.log(offer)
        this.departureStartAirport = offer.itineraries[0].segments[0].departure.iataCode
        this.departureStartTime = offer.itineraries[0].segments[0].departure.at
        this.departureEndAirport = offer.itineraries[0].segments.slice(-1)[0].arrival.iataCode
        this.departureEndTime = offer.itineraries[0].segments.slice(-1)[0].arrival.at
        this.departureStopovers = offer.itineraries[0].segments.length

        this.returnStartAirport = offer.itineraries[1].segments[0].departure.iataCode
        this.returnStartTime = offer.itineraries[1].segments[0].departure.at
        this.returnEndAirport = offer.itineraries[1].segments.slice(-1)[0].arrival.iataCode
        this.returnEndTime = offer.itineraries[1].segments.slice(-1)[0].arrival.at
        this.returnStopovers = offer.itineraries[1].segments.length

        this.cost = offer.price.total

        this.id = offer.id
    }
}

const FlightTable = (props) => {
    const [simple_data, setSimple_Data] = useState([]);

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
            <TableCell align="right">Departure Trip</TableCell>
            <TableCell align="right">Departure Stopovers</TableCell>
            <TableCell align="right">Return Trip</TableCell>
            <TableCell align="right">Return Stopovers</TableCell>
            <TableCell align="right">Cost</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {simple_data.map((offer) => (
            <TableRow
              key={offer.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              onClick={(e) => alert(offer.cost)}
            >
              <TableCell component="th" scope="offer">
                {offer.id}
              </TableCell>
              <TableCell align="right">{offer.departureStartAirport}: {offer.departureStartTime} - {offer.departureEndAirport}: {offer.departureEndTime}</TableCell>
              <TableCell align="right">{offer.departureStopovers}</TableCell>
              <TableCell align="right">{offer.returnStartAirport}: {offer.returnStartTime} - {offer.returnEndAirport}: {offer.returnEndTime}</TableCell>
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