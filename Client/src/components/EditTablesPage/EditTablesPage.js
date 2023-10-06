import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography, Button, Divider, TextField } from "@mui/material";
import TactApi from "../../api/TactApi.js";
import { dedupedAircraft } from "../PlanningTool/utils.js";

const EditTables = () => {
  const [airNum, setAirNum] = useState();
  const [airframeList, setAirframeList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    TactApi.getAllAircraft().then((data) => {
      setAirframeList(data);
      const list = dedupedAircraft(data);
      setAirNum(list[0].numbers.length * 2);
      setIsLoading(false);
    });
  }, []);

  const airNumCells = () => {
    let pain = [];
    for (let i = 1; i <= airNum; i++) {
      pain[i] = (
        <TableCell align="center" variant="head">
          {i}
        </TableCell>
      );
    }
    return pain;
  };
  //create the individual cells
  const personelCells = (name) => {
    let pain2 = [];
    let counter = 0;
    if (!isLoading) {
      airframeList.forEach((entry) => {
        if (name === entry.aircraftName) {
          if (counter === 0) {
            pain2.push(<TableCell align="left">{name}</TableCell>);
            counter++;
          }
          if (counter !== entry.aircraftCount) {
            pain2.push(<TableCell align="center">-</TableCell>);
            counter++;
          }
          pain2.push(
            <TableCell align="right" key={entry.id}>
              <TextField
                onChange={handleTextChange}
                name={`${entry.id - 1}`}
                inputProps={{ min: 0, style: { textAlign: "center" } }}
                size="small"
                variant="standard"
                type="number"
                defaultValue={entry.personnelCount}
                margin="none"
              />
            </TableCell>
          );
          counter++;
        }
      });
    }
    return pain2;
  };
  //create the rows the cells will populate
  const personelRows = () => {
    let pain3 = [];
    let currentAirframe = "";
    if (!isLoading) {
      airframeList.forEach((entry) => {
        if (currentAirframe !== entry.aircraftName) {
          currentAirframe = entry.aircraftName;
          pain3.push(
            <TableRow
              key={currentAirframe}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              {personelCells(currentAirframe)}
            </TableRow>
          );
        }
      });
    }
    return pain3;
  };

  //the on save :( {aircraftname: "", aircraftnumber: "", newPersonnel: ""}
  const handleSave = () => {
    airframeList.forEach((cell) => {
      TactApi.updateAircraft({
        aircraftName: cell.aircraftName,
        aircraftCount: cell.aircraftCount,
        personnelCount: cell.personnelCount,
      });
    });
  };

  const handleTextChange = (e) => {
    const temp = airframeList;
    temp[e.target.name].personnelCount = parseInt(e.target.value);
    setAirframeList(temp);

    // airframeList[e.target.name].personnelCount = e.target.value;
  };

  return (
    <div>
      <Typography variant="h3" component="div">
        Required Personnel per Aircraft
      </Typography>
      <Divider />
      <TableContainer component={Paper} sx={{ marginTop: 4 }}>
        <Typography variant="h6" component="div">
          Number of Aircraft
        </Typography>
        <Table sx={{ minWidth: 650 }} aria-label="PACAF Excercise">
          <TableHead>
            <TableRow>
              <TableCell>Airframe</TableCell>
              {airNumCells()}
            </TableRow>
          </TableHead>
          <TableBody>{personelRows()}</TableBody>
        </Table>
        <Button type="submit" color="primary" onClick={handleSave}>
          Save Changes
        </Button>
      </TableContainer>
    </div>
  );
};

export default EditTables;
