import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { CardActions } from '@mui/material';

const LoginCard = () =>  {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined"><CardContent>
      <Typography variant="h4" component="div">
        Enter Your Info
      </Typography>
      <br/>
      <span/>
      <TextField id="standard-basic" label="Username" variant="standard" />
      <br />
      <TextField id="standard-basic" label="Password" variant="standard" />
    </CardContent>
    <br/>
      <span/>
    <CardActions>
    <Button type="button" color="primary" variant='outlined'>
            Log in
    </Button>

    <Button type="button" color="primary">
            Sign up
    </Button>
    </CardActions></Card>
    </Box>
  );
}

export default LoginCard;