import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Typography } from "@mui/material";
import React, { useMemo, useCallback, useRef } from "react";
import CreateRow from './CreateRow.jsx';
// styles
import '../../styles/PlanningToolPg2.css'

//Pivot on 30 Aug 2023
// Allowing only one aircraft type to be entered for a specific unit

function YourPlan(props) {
    const { 
      data,
      updateFileHandler,
      setSaved,
      aircraftData,
      setAircraftData,
      airframeList
     } = props
    const unitAircraftTable = useRef({});

    const aircraftSetter = useCallback((props) => {
      const { key, value } = props;
      const next = unitAircraftTable.current;
      next[key] = value;
      unitAircraftTable.current = next;
    }, []);

    const rows = useMemo(() => {
      const result = [];
      const newRowProps = {
        airframeList,
        setter: aircraftSetter,
        rowData: {}
      };
      if (aircraftData && aircraftData.length > 0) {
        //This will take the last entry from the array
        aircraftData.forEach((aircraft, i) => {
          newRowProps.rowData = aircraft;
          newRowProps.newRecord = false;
        })
      } else { //there does not exist an entry for the specific Unit Exercise
        const newRowData = {
          unitExerciseID: data.unitExerciseID,
          aircraftType: undefined,
          aircraftCount: 0,
          personnelCount: 0,
        }
        newRowProps.rowData = newRowData;
        newRowProps.newRecord = true;
      }
      result.push(CreateRow(newRowProps));
      unitAircraftTable.current = newRowProps.rowData;
      return result;   
    }, [aircraftData, aircraftSetter, airframeList, data.unitExerciseID])

    const handleSaveClick = () => {
      setSaved({ saved: true });
      setAircraftData(unitAircraftTable.current);      
      updateFileHandler({personnelSum: unitAircraftTable.current.personnelCount});
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
              {/* <Button onClick={handleAddAircraft}>Add Aircraft</Button> */}
              <Button onClick={handleSaveClick}>Save</Button>
              <Typography variant="body1">
                Total Personnel: {unitAircraftTable.current.personnelCount}
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

export default YourPlan 