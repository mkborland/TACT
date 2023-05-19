import { useAppContext } from "../context/AppContext";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";

const SummeryPage = () => {
  const [newExerciseObject, setNewExerciseObject] = useAppContext();

  return (
    <Container maxWidth="sm">
      {newExerciseObject.forEach((topLevel) => {
        topLevel.forEach((basicInfo) => {
          <TextField
            disabled
            id="outlined-disabled"
            label="Disabled"
            defaultValue={basicInfo}
          />;
        });
      })}
    </Container>
  );
};

export default SummeryPage;
