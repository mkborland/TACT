import { Box, Divider } from "@mui/material";
import { useState } from "react";
import TactApi from "../../api/TactApi";
import { useAppContext } from "../../context/AppContext";
import { MockExercises2 } from "../../mock/mockExercises";
import { LoadingButton } from "@mui/lab";
import SendIcon from "@mui/icons-material/Send";
import { ExerciseObjectFormat } from "../../api/exercises/get/GetExercises";
import { flatExercises } from "../../api/exercises/post/PostExercises";

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
