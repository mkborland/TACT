import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Typography } from "@mui/material";
import TactApi from "../../api/TactApi.js";
import React, { useEffect, useState } from "react";
// hooks
import { texts } from '../../hooks/texts'
import CreateRow from "./CreateRow";

// styles
import '../../styles/PlanningToolPg2.css'

const dedupe = (input) => {
  const result = [];
  const temp = [];
  input.forEach(i => {
    if (!temp.includes(i.id)) {
      temp.push(i.id);
      result.push(i)
    }
  });
  return result;
}

//each aircraft row will get a new
const unitAircraftTemplate = { //will need multiple per unit?
    unitExerciseID: undefined, //push and pull base info to fill this
    aircraftType: undefined, //may be the UUID for the Aircraft table
    aircraftCount: 0,
    personnelCount: 0,
    commercialAirfareCount: 0,
    commercialAirfareCost: 0,
    governmentAirfareCount: 0,
    commercialLodgingCount: 0,
    commercialLodgingCost: 0,
    governmentLodgingCount: 0,
    governmentLodgingCost: 0,
    fieldLodgingCount: 0,
    lodgingPerDiem: 0,
    mealPerDiem: 0,
    mealProvidedCount: 0,
    mealNotProvidedCount: 0
}

const newUnitAircraftObj = (unitExerciseId) => {
  const response = unitAircraftTemplate;
  response.unitExerciseID = unitExerciseId;
  return response;
}

function YourPlan(props) {
  //TODO bring in data so that we can get the unitExerciseID

  //TODO once a row is calculated with the total number personnel - create a new obj with the template from above
  //TODO what to do when Save button is pushed - write to DB?? 
    const { data, updateFileHandler, setSaved } = props
    const { plans } = texts();

    const [airframeList, setAirframeList] = useState([]);
    const [totalPersonnel, setTotalPersonnel] = useState(0);
    const [rows, setRows] = useState([]);
    const [totals, setTotals] = useState([]);
    const [perAircraftTable, setPerAircraftTable] = useState([]); //contains the different numbers for each aircraft selected
    const [unitAircraftTable, setUnitAircraftTable] = useState([]);

console.log('rows', rows)
console.log('table', perAircraftTable)
console.log('test', totals)
console.log('data', data)

    useEffect(() => {
      fetchAircraftData();
    }, []);

    //since the create rows makes a new element each time the number of aircraft is updated, 
    //this dedupes the array so there is only one element per row
    useEffect(() => {
      setTotals(dedupe(perAircraftTable));

    }, [perAircraftTable])

    useEffect(() => {
      let tempPersonnel = 0;
      totals.forEach(t => {
        tempPersonnel += t.personnel
      });
      setTotalPersonnel(tempPersonnel)
    }, [totals])

    const fetchAircraftData = () => {
      TactApi.getAllAircraft().then((data) => {
        setAirframeList(data);
      });
    };

    const handleAddAircraft = () => {
      setSaved(false);
      const newRowProps = {
        rows,
        airframeList,
        setPerAircraftTable
      }
      setRows(prev => [...prev, CreateRow(newRowProps)]);
    };

    const saveUnitAircraft = () => {
      unitAircraftTable.forEach((table) => {
        TactApi.addExerciseAircraft(table).catch((err) => console.log('error in saving aircraft', err));
      });
    };

    const handleSaveClick = () => {
      setSaved(true);
      totals.forEach((total) => {
        const temp = newUnitAircraftObj(data.unitExerciseID);
        temp.aircraftType = total.aircraft;
        temp.aircraftCount = total.numberAircraft;
        temp.personnelCount = total.personnel;
        setUnitAircraftTable(prev => [...prev, temp]);
      })
      updateFileHandler('personnelSum', totalPersonnel);
      saveUnitAircraft();
    };

    return (
        <div className="form-container">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700}} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Airframe Types</StyledTableCell>
                  <StyledTableCell align="center">
                    Number of Airframes
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    Number of Personnel
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>{rows}</TableBody>
            </Table>
            <span>
              <Button onClick={handleAddAircraft}>Add Aircraft</Button>
              <Button onClick={() => handleSaveClick()}>Save</Button>
              <Typography variant="body1">
                Total Personnel: {totalPersonnel}
              </Typography>
            </span>
          </TableContainer>
        </div>
    )
};

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
    },
// hide last border
    "&:last-child td, &:last-child th": {
    border: 0,
    },
}));

export default YourPlan 