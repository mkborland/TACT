import React, {useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography, Button, Divider } from '@mui/material';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}



const rows = [
  createData('KC-135', 159, 6.0, 24, 4.0),
  createData('F-22', 237, 9.0, 37, 4.3),
  createData('F-35', 262, 16.0, 24, 6.0),
  createData('A-10', 305, 3.7, 67, 4.3),
  createData('F-15C', 356, 16.0, 49, 3.9),
];

const EditTables =() => {
    const[airNum, setAirNum] = useState(16)

    // incoming data => [{key, frame, NumFrame, NumPersonel}{...}.....]
    const mockData = [{
        aircraftName: 'KC-135',
        aircraftNumber: '2',
        personnelReq: '145'
      },{
        aircraftName: 'KC-135',
        aircraftNumber: '2',
        personnelReq: '145'
      },{
        aircraftName: 'KC-135',
        aircraftNumber: '2',
        personnelReq: '145'
      },{
        aircraftName: 'KC-135',
        aircraftNumber: '2',
        personnelReq: '145'
      },{
        aircraftName: 'KC-135',
        aircraftNumber: '2',
        personnelReq: '145'
      },{
        aircraftName: 'KC-135',
        aircraftNumber: '14',
        personnelReq: '145'
      },{
        aircraftName: 'KC-135',
        aircraftNumber: '2',
        personnelReq: '145'
      }]
    
      const airNumCells = () => {
        let pain = [];
    
        for(let i = 0 ; i < airNum ; i++ ){
            pain[i] = <TableCell align="right">{i + 1}</TableCell>
        }
    
        return pain
      }

  return (
    <div>
        <Typography variant="h3" component="div" >Required Personel</Typography>
        <Divider/>
    <TableContainer component={Paper} sx={{marginTop:4}}>
        <Typography variant="h6" component="div">Number of Planes</Typography>
      <Table sx={{ minWidth: 650 }} aria-label="PACAF Excersize">
        <TableHead>
          <TableRow>
            <TableCell>Airframe</TableCell>
            {airNumCells()}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button type="submit" color="primary" onClick={() => {}}>
            Save Changes
          </Button>
    </TableContainer>
    </div>
  );
}

export default EditTables
