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




//each aircraft row will get a new
const unitAircraftTemplate = { //will need multiple per unit?
    unitExerciseID: null, //push and pull base info to fill this
    aircraftType: "F-22", //may be the UUID for the Aircraft table
    aircraftCount: 2,
    personnelCount: 50,
    commercialAirfareCount: 50,
    commercialAirfareCost: "4000.00",
    governmentAirfareCount: 0,
    commercialLodgingCount: 20,
    commercialLodgingCost: "2000.00",
    governmentLodgingCount: 30,
    governmentLodgingCost: "600.00",
    fieldLodgingCount: 0,
    lodgingPerDiem: "600.00",
    mealPerDiem: "400.00",
    mealProvidedCount: 0,
    mealNotProvidedCount: 50
}
function YourPlan(props) {
  //TODO bring in data so that we can get the unitExerciseID
  //TODO pass a setRowData to the Rows so that when one of the rows is updated it pass the
  // so that the aircraft, number and personnel can be captured 
  //TODO once a row is calculated with the total number personnel - create a new obj with the template from above
  //TODO update the total personnel counter at the bottom of the page
  //TODO what to do when Save button is pushed - write to DB?? 
    const { data, updateFileHandler } = props
    const { plans } = texts();

    const [airframeList, setAirframeList] = useState([]);
    const [totalPersonnel, setTotalPersonnel] = useState(0);
    const [rows, setRows] = useState([]);

console.log('rows', rows)

    useEffect(() => {
      fetchAircraftData();
    }, []);

    const fetchAircraftData = () => {
      TactApi.getAllAircraft().then((data) => {
        setAirframeList(data);
      });
    }

    const handlePersonnelOnChange = (e) => {
        let runningTotal = 0;
        // rows.forEach((row) => {
        //     if (row.airCraftType === e.target.name) {
        //         row.airCraftPersonal = e.target.value;
        //     }
        // runningTotal += parseInt(row.airCraftPersonal);
        // });
        setTotalPersonnel(runningTotal);
    };

    const handleAircraftOnChange = (e) => {
        let runningTotal = 0;
        // rows.forEach((row) => {
        //     if (row.airCraftType === e.target.name) {
        //         row.airCraftAmount = e.target.value;
        //     if (!isLoading) {
        //         airframeList.forEach((entry) => {
        //             if (
        //             entry.aircraftName === row.airCraftType &&
        //             parseInt(row.airCraftAmount) === entry.aircraftNumber
        //             ) {
        //             row.airCraftPersonal = entry.personnelReq;
        //             }
        //         });
        //     }
        // }
        //     runningTotal += parseInt(row.airCraftPersonal);
        // });
        setTotalPersonnel(runningTotal);
    };

    const handleAddAircraft = () => {
      const newRowProps = {
        rows,
        airframeList,
      }
      const newRow = CreateRow(newRowProps);
      setRows(prev => [...prev, newRow]);
    }

    const handleSaveClick = () => {
        //save to template/db
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