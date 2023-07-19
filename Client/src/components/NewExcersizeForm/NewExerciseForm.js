import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/AppContext.js";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { CardActions } from "@mui/material";
import { PostUnitExercise } from "../../api/UnitExercises/post/PostUnitExercise.js"

const NewExerciseForm = () => {
  const [exerciseNameInput, setExerciseNameInput] = useState()
  const [exerciseLocationInput, setExerciseLocationInput] = useState()
  const [exerciseStartDate, setExerciseStartDate] = useState()
  const [exerciseEndDate, setExerciseEndDate] = useState()
  const nav = useNavigate();

  const saveName = (input) => {
    //do validation here
    setExerciseNameInput(input.toString());
  };
  const saveLocation = (input) => {
    setExerciseLocationInput(input.toString());
  };
  const saveStart = (input) => {
    setExerciseStartDate(input.toString())
  }
  const saveEnd = (input) => {
    setExerciseEndDate(input.toString())
  }

  const handleRoute = () => {
    nav("/Dashboard/History");
  };

  return (
    <Box sx={{ }}>
      <Card variant="outlined" sx={{backgroundColor: "primary.dark", color: "white", m: 1 }}>
        <CardContent>
          <Typography variant="h4" component="div">
            Exercise Name
          </Typography>
          <TextField
            id="standard-basic"
            variant="standard"
            onChange={(e) => saveName(e.target.value)}
            sx={{backgroundColor: "white", color: "black", m: 2, minWidth: "75%"}}
          />
          <Typography variant="h4" component="div">
            Exercise Location
          </Typography>
          <TextField
            id="standard-basic"
            variant="standard"
            onChange={(e) => saveLocation(e.target.value)}
            sx={{backgroundColor: "white", color: "black", m: 2, minWidth: "75%"}}
          />
          <Typography variant="h4" component="div">
            Start Date
          </Typography>
          <TextField
            id="standard-basic"
            variant="standard"
            type="date"
            onChange={(e) => saveStart(e.target.value)}
            sx={{backgroundColor: "white", color: "black", m: 2, minWidth: "75%"}}
          />
          <Typography variant="h4" component="div">
            End Date
          </Typography>
          <TextField
            id="standard-basic"
            variant="standard"
            type="date"
            onChange={(e) => saveEnd(e.target.value)}
            sx={{backgroundColor: "white", color: "black", m: 2, minWidth: "75%"}}
          />
        </CardContent>
      </Card>
      <Button
            type="button"
            variant="contained"
            sx={{backgroundColor: "white", color: "black", m: 1, fontSize: ".75em"}}
            onClick={() => {
              //save to data base if good
              // PostUnitExercise()
            }}
          >
            Save
          </Button>
          <Button type="button" variant="contained" sx={{backgroundColor: "white", color: "black", m: 1, fontSize: ".75em"}} onClick={() => handleRoute()}>
            Cancel
          </Button>
    </Box>
  );
};

// "exerciseName": "Dr Slow", 
// "status": "0", 
// "dateCreated": "18 July 2023", 
// "location": "Tucson, AZ", 
// "exerciseStartDate": "15 August 2023", 
// "exerciseEndDate": "18 August 2023", 
// "userID": "2", 
// "personnelSum": "200", 
// "costSum": "40000"



export default NewExerciseForm;