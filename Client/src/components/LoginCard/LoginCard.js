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

const LoginCard = () => {
  const [userNameInput, setUserNameInput] = useState();
  const [userPasswordInput, setUserPasswordInput] = useState();
  const { tryLogin } = useAppContext();
  const nav = useNavigate();

  const saveUserNameInput = (input) => {
    // Note -> you can do user valuations here for what the user puts in.
    // or if you using email address we can also set up something like a regex or better
    setUserNameInput(input.toString());
  };

  const savePasswordInput = (input) => {
    setUserPasswordInput(input.toString());
  };

  const handleRoute = () => {
    nav("/signup");
  };

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h4" component="div">
            Enter Your Info
          </Typography>
          <br />
          <span />
          <TextField
            id="standard-basic"
            label="Username"
            variant="standard"
            onChange={(e) => saveUserNameInput(e.target.value)}
          />
          <br />
          <TextField
            id="standard-basic"
            label="Password"
            variant="standard"
            type="password"
            onChange={(e) => savePasswordInput(e.target.value)}
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
              if( tryLogin(userNameInput, userPasswordInput))
              {
                 nav("/Dashboard/DashboardPage")
              }else{
                //tell user about fail to login
              }
            }}
          >
            Log in
          </Button>

          <Button type="button" color="primary" onClick={() => handleRoute()}>
            Sign up
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default LoginCard;
