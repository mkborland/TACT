import React from "react";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { TextField } from "@mui/material";
import Select from "react-select";
import { dedupedAircraft } from "./utils";
import '../../styles/PlanningToolPg2.css'

const CreateRow = (props) => {
    const {
      airframeList,
      setter,
      rowData,
    } = props;

    const numberLabels = [];
    let personnel = 0;

    const defaults = {
      aircraft: [],
      numOfAircraft: [],
      numOfPersonnel: 0
    };

    const getNumberLabels = (numbers) => {
      // Remove old numberlabels
      numberLabels.splice(0, numberLabels.length);
      numbers.forEach((num, i) => {
        const labelObj = {
          value: i,
          label: num.label,
          number: num.value,
        }
        numberLabels.push(labelObj)
      });
    }

    const aircraftLabels = dedupedAircraft(airframeList);

    if (rowData.aircraftType) {
      const tempAircraft = rowData.aircraftType ? aircraftLabels.find(label => label.label === rowData.aircraftType) : [];
      defaults.aircraft = tempAircraft;
      getNumberLabels(defaults.aircraft.numbers);
      defaults.numOfAircraft = numberLabels.find(label => label.label === rowData.aircraftCount);
      defaults.numOfPersonnel = rowData.personnelCount
    }      
    
    const handleAircraftSelect = (e) => {
      //set the array that populates the Number of Aiframes selector
      getNumberLabels(e.numbers);
      // set the number of aircraft back to null default
      defaults.numOfAircraft = [];
      //set the number of personnel to zero in case the Airframe Type changes
      document.getElementById(`personnel-id${rowData.unitExerciseID}`).value = 0;
      //to the parent Component
      setter({id: rowData.unitExerciseID, key: 'aircraftType', value: e.label, newRecord: rowData.newRecord})
    };

  
    const updatePersonnel = (totalPersonnel) => {
      if (!rowData.commercialAirfareCount) {
        setter({id: rowData.unitExerciseID, key: 'commercialAirfareCount', value: 0, newRecord: rowData.newRecord});
        setter({id: rowData.unitExerciseID, key: 'governmentAirfareCount', value: totalPersonnel, newRecord: rowData.newRecord})    
      } else {
        setter({
          id: rowData.unitExerciseID,
          key: 'governmentAirfareCount',
          value: totalPersonnel - rowData.commercialAirfareCount,
          newRecord: rowData.newRecord
        })   
      }
    };

    const handleNumberAircraftSelect = (e) => {
      //set the Number of personnel to the selected matching pair of aircraft
      personnel = e.number
      updatePersonnel(personnel)
      document.getElementById(`personnel-id${rowData.unitExerciseID}`).value = personnel;
      //to the parent component
      setter({id: rowData.unitExerciseID, key: 'aircraftCount', value: e.label, newRecord: rowData.newRecord})
      setter({id: rowData.unitExerciseID, key: 'personnelCount', value: personnel, newRecord: rowData.newRecord})
    }

    const handlePersonnelChange = (e) => {
      const value = isNaN(parseInt(e.target.value)) ? 0 : parseInt(e.target.value);
      updatePersonnel(value)
      //to the parent component
      setter({id: rowData.unitExerciseID, key: 'personnelCount', value: value, newRecord: rowData.newRecord})
    }

    return (
      <StyledTableRow key={`aircraft-row-${rowData.unitExerciseID}`}>
        <StyledTableCell component="th" scope="row">
          <Select 
            className="input"
            name="aircraft-name"
            placeholder={'Select an Aircraft'}
            defaultValue={defaults.aircraft}
            onChange={handleAircraftSelect}
            isSearchable
            required
            options={aircraftLabels}
          />
        </StyledTableCell>
        <StyledTableCell align="center">
          <Select 
              className="input"
              name="aircraft-number"
              placeholder={'How Many'}
              defaultValue={defaults.numOfAircraft}
              onChange={handleNumberAircraftSelect}
              isSearchable
              required
              options={numberLabels}
            />
        </StyledTableCell>
        <StyledTableCell align="center">
          <TextField
              inputProps={{ min: 0, style: { textAlign: "center" } }}
              id={`personnel-id${rowData.unitExerciseID}`}
              name="personnel-number"
              size="small"
              variant="outlined"
              type="text"
              defaultValue={defaults.numOfPersonnel}
              onChange={handlePersonnelChange}
              margin="none"
            />
        </StyledTableCell>
      </StyledTableRow>
    )
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

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
    },
// hide last border
    "&:last-child td, &:last-child th": {
    border: 0,
    },
}));

export default CreateRow 