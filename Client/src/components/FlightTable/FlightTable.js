import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';

class simpleflightoffer {
  constructor(offer) {
    
    this.departureStartAirport = offer.itineraries[0].segments[0].departure.iataCode
    this.departureStartTime = new Date(offer.itineraries[0].segments[0].departure.at).toTimeString().slice(0, 5)
    this.departureEndAirport = offer.itineraries[0].segments.slice(-1)[0].arrival.iataCode
    this.departureEndTime = new Date(offer.itineraries[0].segments.slice(-1)[0].arrival.at).toTimeString().slice(0, 5)
    this.departureStopovers = offer.itineraries[0].segments.length - 1

    this.returnStartAirport = offer.itineraries[1].segments[0].departure.iataCode
    this.returnStartTime = new Date(offer.itineraries[1].segments[0].departure.at).toTimeString().slice(0, 5)
    this.returnEndAirport = offer.itineraries[1].segments.slice(-1)[0].arrival.iataCode
    this.returnEndTime = new Date(offer.itineraries[1].segments.slice(-1)[0].arrival.at).toTimeString().slice(0, 5)
    this.returnStopovers = offer.itineraries[1].segments.length - 1

    this.cost = offer.price.total
    this.id = offer.id
  }
}

const FlightTable = (props) => {
  const {
    data,
    updateExerciseAircraft
  } = props

  const [simple_data, setSimple_Data] = useState([]);


  const selectButtonClick = (cost) => {
    updateExerciseAircraft({key: 'commercialAirfareCost', value: Number(cost)})
    setSimple_Data([])
  };

  useEffect(() => {
    if (data === undefined) {
      setSimple_Data([])
    } else {
      setSimple_Data(data.map(offer => {
        return new simpleflightoffer(offer)
      }))
    }
  }, [data]);

  if (simple_data.length >0 ) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Flights</TableCell>
            <TableCell align="center">Departure<br />Trip</TableCell>
            <TableCell align="center">Departure<br />Stopovers</TableCell>
            <TableCell align="center">Return<br />Trip</TableCell>
            <TableCell align="center">Return<br />Stopovers</TableCell>
            <TableCell align="center">Cost</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {simple_data.map((offer) => (
            <TableRow
              key={offer.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="offer">
                <Button variant="contained" onClick={() => selectButtonClick(offer.cost)}>
                  Select
                </Button>
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
  } else {
    return null;
  }

}

export default FlightTable