import React from "react";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { TextField } from "@mui/material";
import Select from "react-select";
import { dedupedAircraft } from "./utils";
// styles
import '../../styles/PlanningToolPg2.css'

const CreateRow = (props) => {
    const {
      rows,
      airframeList,
    } = props;
    const numberLabels = [];
    let personnel = 0;
    console.log('props',props)
    console.log('personnel',personnel)

    const aircraftLabels = airframeList ? dedupedAircraft(airframeList) : [];
    
    const handleAircraftSelect = (e) => {
        e.numbers.forEach((num) => {
        numberLabels.push(num)
      })
    };

    const handleNumberSelect = (e) => {
      console.log('handle number',e)
      personnel = e.value
      document.getElementById(`personnel-id${rows.length}`).value = personnel
      return personnel;
    }

    return (
      <StyledTableRow key={`aircraft-row-${rows.length}`}>
        <StyledTableCell component="th" scope="row">
          <Select 
            className="input"
            name="aircraft-name"
            placeholder={'Select an Aircraft'}
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
              onChange={handleNumberSelect}
              isSearchable
              required
              options={numberLabels}
            />
        </StyledTableCell>
        <StyledTableCell align="center">
          <TextField
              inputProps={{ min: 0, style: { textAlign: "center" } }}
              id={`personnel-id${rows.length}`}
              name="personnel-number"
              size="small"
              variant="outlined"
              type="text"
              value={personnel}
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