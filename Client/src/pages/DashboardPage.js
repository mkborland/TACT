import { Fragment, useState, useEffect } from "react";
import { DateTimeAdapter } from "../helper";

import TactApi from "../api/TactApi.js";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

export default function DashboardPage(props) {
  const { user } = props;
  console.log("user in dashboard", user);
  const [exerciseList, setExerciseList] = useState([]);
  const [unitExerciseList, setUnitExerciseList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    TactApi.getDashboard().then((data) => {
      setExerciseList(data);
      setIsLoading(false);
    });

    TactApi.getAllUnitExercises().then((data) => {
      setUnitExerciseList(data);
      setIsLoading(false);
    });
  }, []);

  console.log(exerciseList);
  console.log(unitExerciseList);
  console.log(isLoading);

  function Row(props) {
    const { row } = props;
    const [open, setOpen] = useState(false);

    return (
      <Fragment>
        <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
          <TableCell>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          <TableCell component="th" scope="row">
            {row.exerciseName}
          </TableCell>
          <TableCell align="right">{row.userID}</TableCell>
          <TableCell align="right">
            {DateTimeAdapter.toString(row.exerciseStartDate)}
          </TableCell>
          <TableCell align="right">
            {DateTimeAdapter.toString(row.exerciseEndDate)}
          </TableCell>
          <TableCell align="right">{row.costSum}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
                <Typography variant="h6" gutterBottom component="div">
                  Unit Cost Estimation Forms
                </Typography>
                <Table size="small" aria-label="unit-forms">
                  <TableHead>
                    <TableRow>
                      <TableCell>Unit</TableCell>
                      <TableCell>Date Created</TableCell>
                      <TableCell align="right">Est. Cost</TableCell>
                      <TableCell align="right">Status</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {unitExerciseList.map((unitRow) => {
                      if (unitRow.exerciseID === row.exerciseID) {
                        return (
                          <TableRow key={unitRow.unitExerciseID}>
                            <TableCell component="th" scope="row">
                              {unitRow.unit}
                            </TableCell>
                            <TableCell>
                              {DateTimeAdapter.toString(unitRow.dateCreated)}
                            </TableCell>
                            <TableCell align="right">
                              {unitRow.unitCostSum}
                            </TableCell>
                            <TableCell align="right">
                              {unitRow.status}
                            </TableCell>
                          </TableRow>
                        );
                      }
                    })}
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </Fragment>
    );
  }

  return (
    <Box
      sx={{
        background: "#d9d9d9",
        height: 400,
        width: "100%",
        borderRadius: 1,
        "& .dashboard-table-header": {
          backgroundColor: "#1975d1",
          color: "white",
          fontSize: 18,
        },
      }}
    >
      <TableContainer component={Paper}>
        <Table size="small" aria-label="purchases">
          <TableHead style={{ background: "#48dfed5c" }}>
            <TableRow>
              <TableCell />
              <TableCell
                style={{
                  fontSize: "large",
                  color: "#282c34",
                  fontWeight: "bold",
                }}
              >
                Exercise Name
              </TableCell>
              <TableCell
                style={{
                  fontSize: "large",
                  color: "#282c34",
                  fontWeight: "bold",
                }}
              >
                Owner
              </TableCell>
              <TableCell
                style={{
                  fontSize: "large",
                  color: "#282c34",
                  fontWeight: "bold",
                }}
                align="right"
              >
                Start Date
              </TableCell>
              <TableCell
                style={{
                  fontSize: "large",
                  color: "#282c34",
                  fontWeight: "bold",
                }}
                align="right"
              >
                End Date
              </TableCell>
              <TableCell
                style={{
                  fontSize: "large",
                  color: "#282c34",
                  fontWeight: "bold",
                }}
                align="right"
              >
                Est. Cost
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {exerciseList.map((row) => (
              <Row key={row.name} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
