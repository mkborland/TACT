import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Typography } from "@mui/material";
import React, { useMemo, useState, useEffect } from "react";
import CreateRow from "./CreateRow.jsx";
// styles
import "../../styles/PlanningToolPg2.css";

//Pivot on 30 Aug 2023
// Allowing only one aircraft type to be entered for a specific unit

function YourPlan(props) {
  const {
    data,
    updateFileHandler,
    setSaved,
    aircraftData,
    setAircraftData,
    airframeList,
    updateUnitExerciseAircraft,
  } = props;
  const [totalPersonnel, setTotalPersonnel] = useState();

  useEffect(() => {
    console.log("useeffect aircraftData", aircraftData);
    if (aircraftData && aircraftData[0]?.personnelCount) {
      setTotalPersonnel(aircraftData[0].personnelCount);
    } else {
      setTotalPersonnel(0);
    }
  }, [aircraftData]);

  const rows = useMemo(() => {
    const result = [];

    const aircraftSetter = (props) => {
      const { key, value } = props;
      const next = aircraftData[0];
      next[key] = value;
      setAircraftData([next]);
      setSaved({ saved: false, alert: "Please save inputs to continue" });
    };

    const newRowProps = {
      airframeList,
      setter: aircraftSetter,
      rowData: {},
    };

    if (aircraftData && aircraftData.length > 0) {
      //This will take the last entry from the array
      newRowProps.rowData = aircraftData[aircraftData.length - 1];
    } else {
      //there does not exist an entry for the specific Unit Exercise
      const newRowData = {
        unitExerciseID: data.unitExerciseID,
        aircraftType: undefined,
        aircraftCount: 0,
        personnelCount: 0,
      };
      newRowProps.rowData = newRowData;
      newRowProps.newRecord = true;
    }
    result.push(CreateRow(newRowProps));
    return result;
  }, [
    aircraftData,
    airframeList,
    data.unitExerciseID,
    setAircraftData,
    setSaved,
  ]);

  const handleSaveClick = () => {
    setSaved({ saved: true });
    updateFileHandler({
      personnelSum: aircraftData[0].personnelCount,
    });
    updateUnitExerciseAircraft();
  };

  return (
    <div className="form-container">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
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
            Total Personnel: {totalPersonnel}
          </Typography>
        </span>
      </TableContainer>
    </div>
  );
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export default YourPlan;
