import FlightSearch from "../components/FlightSearch/FlightSearch";
import AirTypeTable from "../components/NewExerciseAircraftType/AirTypeTable";
import Lodging from "../components/Lodging/Lodging";

const NewExercisePage = () => {
  return (
    <div>
      <FlightSearch />
      <AirTypeTable />
      {/* <FlightSearch /> */}
      <Lodging />
    </div>
  );
};

export default NewExercisePage;
