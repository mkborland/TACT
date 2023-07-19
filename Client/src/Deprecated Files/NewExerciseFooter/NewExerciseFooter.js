import { useState } from "react";
import TactApi from "../../api/TactApi.js";
import { useAppContext } from "../../context/AppContext.js";
import { Box, Divider } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import SendIcon from "@mui/icons-material/Send";

const NewExercisePageFooter = () => {
  const [loading, setLoading] = useState(false);
  const { newExerciseObject, defaultExerciseObject, setNewExerciseObject } =
    useAppContext();

  const handleClick = () => {
    setLoading(true);
    TactApi.postExercises(newExerciseObject).then(() => {
      setNewExerciseObject(defaultExerciseObject);
    });
    setLoading(false);
  };

  return (
    <Box>
      <Divider />
      <LoadingButton
        onClick={handleClick}
        endIcon={<SendIcon />}
        loading={loading}
        loadingPosition="end"
        variant="contained"
      >
        <span>Submit</span>
      </LoadingButton>
    </Box>
  );
};

export default NewExercisePageFooter;
