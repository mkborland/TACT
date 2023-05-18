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
    const[airframeList, setAirframeList] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    
    useEffect( () => { 
      TactApi.getAllAircraft().then(data => {
        setAirframeList(data)
        setIsLoading(false);
      });
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
        if(!isLoading){

        airframeList.forEach(entry => {
          
        if(name === entry.aircraftName){
            if(counter === 0){
                pain2.push(<TableCell align='left'>{name}</TableCell>)
                counter++
            }
            if(counter !== entry.aircraftNumber){
                    pain2.push(<TableCell align="center">N/A</TableCell>)
                    counter++
            }
            const obj = {id:entry.id, pr:entry.personnelReq}
            pain2.push(
              <TableCell align="right" key={entry.id}>
                <TextField 
                  onChange={(e) => handleTextChange(e)} 
                  name={entry.id} 
                  inputProps={{min: 0, style: { textAlign: 'center' }}} 
                  size="small" 
                  variant='standard' 
                  defaultValue={entry.personnelReq} 
                  margin='none'/>
              </TableCell>
            )
            counter++
        } 
           
        }
        )
      }
        return pain2;
      }
    //create the rows the cells will populate
      const personelRows = () => {
        let pain3 = []
        let currentAirframe = "";
        if(!isLoading){
          console.log("?")
          console.log(airframeList)
        airframeList.forEach(entry => {
            if(currentAirframe !== entry.aircraftName){
                currentAirframe = entry.aircraftName;
                pain3.push(<TableRow key={currentAirframe} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>{personelCells(currentAirframe)}</TableRow>)
            }
        })
      }
        return pain3;
      }
      //the on save :( {aircraftname: "", aircraftnumber: "", newPersonnel: ""}
      const HandleSave = () => {
        //todo fix
          // airframeList.forEach(cell => {
          //   TactApi.updateAircraft({aircraftName:cell.aircraftName, aircraftNumber:cell.aircraftNumber, newPersonnel:cell.personnelReq})
          // })
      }
      const handleTextChange = (e) => {
             airframeList[e.target.name].personnelReq = e.target.value
             console.log(airframeList[e.target.name])
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
