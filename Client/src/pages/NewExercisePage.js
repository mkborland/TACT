import FlightSearch from "../components/FlightSearch/FlightSearch";
import AirTypeTable from "../components/NewExerciseAircraftType/AirTypeTable";
import Lodging from "../components/Lodging/Lodging";
import NewExercisePageFooter from "../components/NewExerciseFooter/NewExerciseFooter";
import NewExercisePageHeader from "../components/NewExerciseHeader/NewExerciseHeader";

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
