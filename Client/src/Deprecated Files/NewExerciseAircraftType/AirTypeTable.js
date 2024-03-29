import React, { useEffect, useState } from "react";
import TactApi from "../../api/TactApi.js";
import { useAppContext } from "../../context/AppContext.js";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AirTypeTable = () => {
  const nav = useNavigate();
  const [airframeList, setAirframeList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [totalPersonnel, setTotalPersonnel] = useState(0);
  const { newExerciseObject, setNewExerciseObject } = useAppContext();
  const [rows, setRows] = useState([
    createRowData("KC-135", 0, 0),
    createRowData("F-22", 0, 0),
    createRowData("F-35", 0, 0),
    createRowData("A-10", 0, 0),
    createRowData("F-15C", 0, 0),
    createRowData("C-130", 0, 0),
    createRowData("C-17", 0, 0),
    createRowData("C-5", 0, 0),
  ]);

  useEffect(() => {
    TactApi.getAllAircraft().then((data) => {
      setAirframeList(data);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    TactApi.getAllAircraft().then((data) => {
      setAirframeList(data);
      setIsLoading(false);
    });
  }, []);

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

  function createRowData(airCraftType, airCraftAmount, airCraftPersonal) {
    return { airCraftType, airCraftAmount, airCraftPersonal };
  }

  const HandlePersonnelOnChange = (e) => {
    let runningTotal = 0;
    rows.forEach((row) => {
      if (row.airCraftType === e.target.name) {
        row.airCraftPersonal = e.target.value;
      }
      runningTotal += parseInt(row.airCraftPersonal);
    });
    setTotalPersonnel(runningTotal);
  };

  const HandleAircraftOnChange = (e) => {
    let runningTotal = 0;
    rows.forEach((row) => {
      if (row.airCraftType === e.target.name) {
        row.airCraftAmount = e.target.value;
        if (!isLoading) {
          airframeList.forEach((entry) => {
            if (
              entry.aircraftName === row.airCraftType &&
              parseInt(row.airCraftAmount) === entry.aircraftNumber
            ) {
              row.airCraftPersonal = entry.personnelReq;
            }
          });
        }
      }

      runningTotal += parseInt(row.airCraftPersonal);
    });
    setTotalPersonnel(runningTotal);
  };

  const HandleSaveClick = () => {
    const obj = newExerciseObject;
    obj.airCraftInventory.airCraftDetails = rows;
    obj.overView.totalPersonal = totalPersonnel;
    setNewExerciseObject(obj)
    nav("/Dashboard/NewExercisePage-pg2", { replace: true });
  };

  return (
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
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.airCraftType}>
              <StyledTableCell component="th" scope="row">
                {row.airCraftType}
              </StyledTableCell>
              <StyledTableCell align="center">
                <TextField
                  inputProps={{
                    min: 0,
                    max: 16,
                    style: { textAlign: "center" },
                  }}
                  name={row.airCraftType}
                  size="small"
                  variant="outlined"
                  type="number"
                  onChange={(e) => {
                    HandleAircraftOnChange(e);
                  }}
                  defaultValue={row.airCraftAmount}
                  margin="none"
                />
              </StyledTableCell>
              <StyledTableCell align="center">
                <TextField
                  inputProps={{ min: 0, style: { textAlign: "center" } }}
                  name={row.airCraftType}
                  size="small"
                  variant="outlined"
                  type="number"
                  onChange={(e) => {
                    HandlePersonnelOnChange(e);
                  }}
                  defaultValue={row.airCraftPersonal}
                  margin="none"
                />
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      <span>
        <Button onClick={() => HandleSaveClick()}>Save</Button>
        <Typography variant="body1">
          Total Personnel: {totalPersonnel}
        </Typography>
      </span>
    </TableContainer>
  );
};

export default AirTypeTable;
