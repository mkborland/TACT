import React, {useEffect, useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography, Button, Divider, TextField } from '@mui/material';
import TactApi from "../../api/TactApi";

const EditTables =() => {
    const[airNum, setAirNum] = useState(16)
    const[textArray, setTextArray] = useState([])
    const[airframeList, setAirframeList] = useState([])
    
    useEffect( () => { 
      TactApi.getAllAircraft().then(data => setAirframeList(data))
    },[])

    // incoming data => [{key, frame, NumFrame, NumPersonel}{...}.....]
    
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
        if(airframeList !== []){
        airframeList.map(cell => {
          
        if(name === cell.aircraftName){
            if(counter === 0){
                pain2.push(<TableCell align='left'>{name}</TableCell>)
                counter++
            }
            if(counter !== cell.aircraftNumber){
                    pain2.push(<TableCell align="center">N/A</TableCell>)
                    counter++
            }
            textArray.push([cell.id,cell.personnelReq])
            pain2.push(<TableCell align="right"><TextField onChange={(e) => handleTextChange(e)}name={cell.id.toString()}inputProps={{min: 0, style: { textAlign: 'center' }}} size="small" variant='standard' defaultValue={textArray[cell.id -1][1]} margin='none'></TextField></TableCell>)
            counter++
        } 
           
        })
      }
        return pain2;
      }
    //create the rows the cells will populate
      const personelRows = () => {
        let pain3 = []
        let currentAirframe = "";
        if(airframeList !== []){
        airframeList.map(entry => {
            if(currentAirframe !== entry.aircraftName){
                currentAirframe = entry.aircraftName;
                pain3.push(<TableRow key={currentAirframe} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>{personelCells(currentAirframe)}</TableRow>)
            }
        })
        console.log(airframeList)
      }
        return pain3;
      }
      //the on save :( {aircraftname: "", aircraftnumber: "", newPersonnel: ""}
      const HandleSave = () => {
        
          //TactApi.updateAircraft({aircraftname:"F-35",aircraftnumber:"8",newPersonnel:"200"});
        
      }
      const handleTextChange = (e) => {
             textArray[e.target.name -1] = [parseInt(e.target.name),e.target.value]
      }

  return (
    <div>
        <Typography variant="h3" component="div" >Required Personnel</Typography>
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
      <Button type="submit" color="primary" onClick={() => HandleSave()}>
            Save Changes
          </Button>
    </TableContainer>
    </div>
  );
}

export default EditTables
