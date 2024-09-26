import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { TextField } from "@mui/material";
import Select from "react-select";
import "../../styles/PlanningToolPg2.css";

const CreateRow = (props) => {
  const {
    aircraftLabels,
    numberLabels,
    setNumberLabels,
    defaultValues,
    getNumberLabels,
    setter,
    rowData,
  } = props;

  const handleAircraftSelect = (e) => {
    setNumberLabels(getNumberLabels(e.numbers));
    setter([
      {
        ...rowData,
        aircraftType: e.label,
        aircraftCount: undefined,
        personnelCount: 0,
      },
    ]);
  };

  const handleNumberAircraftSelect = (e) => {
    const mealsDif =
      rowData.mealNotProvidedCount > e.number
        ? e.number
        : rowData.mealNotProvidedCount;
    //to the parent component
    setter([
      {
        ...rowData,
        aircraftCount: e.label,
        personnelCount: e.number,
        mealProvidedCount: e.number - mealsDif,
        mealNotProvidedCount: mealsDif,
        governmentAirfareCount: e.number - rowData.commercialAirfareCount,
        governmentLodgingCount:
          e.number - rowData.commercialLodgingCount - rowData.fieldLodgingCount,
      },
    ]);
  };

  const handlePersonnelChange = (e) => {
    const value = isNaN(parseInt(e.target.value))
      ? 0
      : parseInt(e.target.value);
    if (value < 0) return;
    const mealsDif =
      rowData.mealNotProvidedCount > value
        ? value
        : rowData.mealNotProvidedCount;
    //to the parent component
    console.log("mealsDif", mealsDif, rowData.mealNotProvidedCount);
    setter([
      {
        ...rowData,
        personnelCount: value,
        mealProvidedCount: value - mealsDif,
        mealNotProvidedCount: mealsDif,
        governmentAirfareCount: value - rowData.commercialAirfareCount,
        governmentLodgingCount:
          value - rowData.commercialLodgingCount - rowData.fieldLodgingCount,
      },
    ]);
  };

  return (
    <StyledTableRow key={`aircraft-row-${rowData.unitExerciseID}`}>
      <StyledTableCell component="th" scope="row">
        <Select
          className="input"
          name="aircraft-name"
          placeholder={"Select an Aircraft"}
          value={aircraftLabels[defaultValues.aircraft]}
          onChange={handleAircraftSelect}
          isSearchable
          required
          options={aircraftLabels}
        />
      </StyledTableCell>
      <StyledTableCell align="center">
        <Select
          className="input"
          name="aircraft-number"
          id={`number-id${rowData.unitExerciseID}`}
          placeholder={"How Many"}
          value={numberLabels[defaultValues.numOfAircraft]}
          onChange={handleNumberAircraftSelect}
          isSearchable
          required
          options={numberLabels}
        />
      </StyledTableCell>
      <StyledTableCell align="center">
        <TextField
          inputProps={{ min: 0, style: { textAlign: "center" } }}
          id={`personnel-id${rowData.unitExerciseID}`}
          name="personnel-number"
          size="small"
          variant="outlined"
          type="number"
          value={rowData.personnelCount}
          onChange={handlePersonnelChange}
          margin="none"
          sx={{ backgroundColor: "white" }}
        />
      </StyledTableCell>
    </StyledTableRow>
  );
};

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default CreateRow;
