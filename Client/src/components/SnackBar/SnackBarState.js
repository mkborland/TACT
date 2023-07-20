import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Fade from '@mui/material/Fade';
import Slide from '@mui/material/Slide';

// function SlideTransition(props) {
//   return <Slide {...props} direction="down" />;
// }

export default function CustomSnackbar(props) {
  const {messageToUser, open, handleClose} = props

  //In odrer to make this reusable the handle click and handle Close have to be in parent function

//   const handleClick = (Transition) => () => {
//     setState({
//       open: true,
//       Transition,
//     });
//   };

//   const handleClose = () => {
//     setState({
//       ...state,
//       open: false,
//     });
//   };

  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={open}
        onClose={handleClose}
        autoHideDuration={5000}
        message= {messageToUser}
        key={messageToUser}
      />
    </div>
  );
}