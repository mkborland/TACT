import React, {useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography, Button, Divider, TextField } from '@mui/material';

const EditTables =() => {
    const[airNum, setAirNum] = useState(16)
    const[textArray, setTextArray] = useState([])

    // incoming data => [{key, frame, NumFrame, NumPersonel}{...}.....]
    const mockData = [{
        id:1,
        aircraftName: 'KC-135',
        aircraftNumber: '1',
        personnelReq: '85'
      },{
        id:2,
        aircraftName: 'KC-135',
        aircraftNumber: '2',
        personnelReq: '145'
      },{
        id:3,
        aircraftName: 'KC-135',
        aircraftNumber: '3',
        personnelReq: '200'
      },{
        id:4,
        aircraftName: 'KC-135',
        aircraftNumber: '4',
        personnelReq: '225'
      },{
        id:5,
        aircraftName: 'KC-135',
        aircraftNumber: '5',
        personnelReq: '240'
      },{
        id:6,
        aircraftName: 'KC-135',
        aircraftNumber: '6',
        personnelReq: '245'
      },{
        id:7,
        aircraftName: 'KC-135',
        aircraftNumber: '7',
        personnelReq: '250'
      },{
        id:8,
        aircraftName: 'F-22',
        aircraftNumber: '2',
        personnelReq: '50'
      },{
        id:9,
        aircraftName: 'F-22',
        aircraftNumber: '4',
        personnelReq: '75'
      },{
        id:10,
        aircraftName: 'F-22',
        aircraftNumber: '6',
        personnelReq: '90'
      },{
        id:11,
        aircraftName: 'F-22',
        aircraftNumber: '8',
        personnelReq: '100'
      }]
      //create number of columns the dumb way (time and brain power constraint)
      const airNumCells = () => {
        let pain = [];
        for(let i = 0 ; i < airNum ; i++ ){
            pain[i] = <TableCell align="center" variant='head'>{i + 1}</TableCell>
        }
        return pain
      }
      //create the individual cells
      const personelCells = (name) => {
        let pain2 = [];
        let counter = 0;
        mockData.map(cell => {
        if(name === cell.aircraftName){
            if(counter === 0){
                pain2.push(<TableCell align='left'>{name}</TableCell>)
                counter++
            }
            if(counter.toString() !== cell.aircraftNumber){
                    pain2.push(<TableCell align="center">N/A</TableCell>)
                    counter++
            }
        
            textArray.push([cell.id,cell.personnelReq])
            
            pain2.push(<TableCell align="right"><TextField onChange={(e) => handleTextChange(e)}name={cell.id.toString()}inputProps={{min: 0, style: { textAlign: 'center' }}} size="small" variant='standard' defaultValue={textArray[cell.id -1][1]} margin='none'></TextField></TableCell>)
            counter++
        }    
        })
        return pain2;
      }
    //create the rows the cells will populate
      const personelRows = () => {
        let pain3 = []
        let currentAirframe = "";
        mockData.map(entry => {
            if(currentAirframe !== entry.aircraftName){
                currentAirframe = entry.aircraftName;
                pain3.push(<TableRow key={currentAirframe} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>{personelCells(currentAirframe)}</TableRow>)
            }
        })
        return pain3;
      }

      const handleSave = () => {

      }
      const handleTextChange = (e) => {
             textArray[e.target.name -1] = [parseInt(e.target.name),e.target.value]
             console.log(textArray)
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
          {personelRows()}
        </TableBody>
      </Table>
      <Button type="submit" color="primary" onClick={() => handleSave()}>
            Save Changes
          </Button>
    </TableContainer>
    </div>
  );
}

export default EditTables
