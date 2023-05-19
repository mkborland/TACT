import FlightSearch from "../components/FlightSearch/FlightSearch.js";
import AirTypeTable from "../components/NewExerciseAircraftType/AirTypeTable.js";
import Lodging from "../components/Lodging/Lodging.js";
import NewExercisePageFooter from "../components/NewExerciseFooter/NewExerciseFooter.js";
import NewExercisePageHeader from "../components/NewExerciseHeader/NewExerciseHeader.js";

const NewExercisePage = () => {
  return (
    <div>
      <NewExercisePageHeader />
      <FlightSearch />
      <AirTypeTable />
      <Lodging />
      <NewExercisePageFooter />
    </div>
  );
};

export default NewExercisePage;
