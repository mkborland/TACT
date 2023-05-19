import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/AppContext.js";
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  CardActions,
  Button,
  Snackbar,
} from "@mui/material";
import { Alert } from "@mui/material";

const SignUp = () => {
  const [userName, setUserName] = useState();
  const [passwordOne, setPasswordOne] = useState();
  const [passwordTwo, setPasswordTwo] = useState();
  const [displayMessage, setDisplayMessage] = useState(false);
  const [successCode, setSuccessCode] = useState();
  const { trySignUp } = useAppContext();
  const nav = useNavigate();

  const saveUserName = (value) => {
    setUserName(value.toString());
  };
  const savePassOne = (value) => {
    setPasswordOne(value.toString());
  };
  const savePassTwo = (value) => {
    setPasswordTwo(value.toString());
  };

  const validatePass = (passOne, passTwo) => {
    if (passOne === passTwo && userName !== "" && passOne !== "") {
      setSuccessCode(trySignUp(userName, passOne))
      nav("/")
    } else {
      setDisplayMessage(true);
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setDisplayMessage(false);
  };

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h4" component="div">
            Sign-Up
          </Typography>
          <br />
          <span />
          <TextField
            id="standard-basic"
            label="Username"
            variant="standard"
            onChange={(e) => saveUserName(e.target.value)}
          />
          <br />
          <TextField
            id="standard-basic"
            label="Password"
            variant="standard"
            onChange={(e) => savePassOne(e.target.value)}
          />
          <br />
          <TextField
            id="standard-basic"
            label="Re-Enter Password"
            variant="standard"
            onChange={(e) => savePassTwo(e.target.value)}
          />
        </CardContent>
        <br />
        <span />
        <CardActions>
          <Button
            type="button"
            color="primary"
            variant="outlined"
            onClick={() => {
              validatePass(passwordOne, passwordTwo)
            }}
          >
            SUBMIT
          </Button>
        </CardActions>
      </Card>
      <Snackbar
        open={displayMessage}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="error">
          password mismatch! please be smarter.
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default SignUp;
