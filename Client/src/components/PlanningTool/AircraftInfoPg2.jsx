import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import CreateRow from "./CreateRow.jsx";
// styles
import "../../styles/PlanningToolPg2.css";
import { dedupedAircraft } from "./utils.js";

//Pivot on 30 Aug 2023
// Allowing only one aircraft type to be entered for a specific unit

function YourPlan(props) {
  const {
    updateFileHandler,
    setSaved,
    aircraftData,
    setAircraftData,
    airframeList,
    updateUnitExerciseAircraft,
  } = props;
  const [numberLabels, setNumberLabels] = useState([]);
  const [defaultValues, setDefaultValues] = useState({
    aircraft: undefined,
    numOfAircraft: undefined,
    numOfPersonnel: 0,
  });
  const aircraftLabels = dedupedAircraft(airframeList);

  useEffect(() => {
    setDefaultValues(getDefaultValues(aircraftData[0]));
  }, [aircraftData]);

  const getNumberLabels = (numbers) => {
    const temp = [];
    numbers.forEach((num, i) => {
      const labelObj = {
        value: i,
        label: num.label,
        number: num.value,
      };
      temp.push(labelObj);
    });
    return temp;
  };

  const getDefaultValues = (input) => {
    const result = {
      aircraft: undefined,
      numOfAircraft: undefined,
      numOfPersonnel: 0,
    };
    if (input.aircraftType) {
      result.aircraft = aircraftLabels.findIndex(
        (label) => label.label === input.aircraftType
      );
    }
    if (input.aircraftCount > 0) {
      const tempNumberLabels = getNumberLabels(
        aircraftLabels[result.aircraft].numbers
      );
      setNumberLabels(tempNumberLabels);
      result.numOfAircraft = tempNumberLabels.findIndex(
        (label) => label.label === input.aircraftCount
      );
      result.numOfPersonnel = input.personnelCount;
    }
    return result;
  };

  const handleSaveClick = () => {
    setSaved({ saved: true });
    updateFileHandler({
      personnelSum: aircraftData[0].personnelCount,
    });
    updateUnitExerciseAircraft();
  };

  return (
    <div className="form-container">
      {/* <TableContainer component={Paper}> */}
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
        <TableBody>
          <CreateRow
            aircraftLabels={aircraftLabels}
            numberLabels={numberLabels}
            setNumberLabels={setNumberLabels}
            defaultValues={defaultValues}
            getNumberLabels={getNumberLabels}
            setter={setAircraftData}
            rowData={aircraftData[0]}
          />
        </TableBody>
      </Table>
      <span>
        {/* <Button onClick={handleAddAircraft}>Add Aircraft</Button> */}
        <Button
          variant="outlined"
          sx={{ backgroundColor: "white" }}
          onClick={handleSaveClick}
        >
          Save
        </Button>
        {/* <Typography variant="body1">
          Total Personnel: {aircraftData[0].personnelCount}
        </Typography> */}
      </span>
      {/* </TableContainer> */}
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
