import GetAllAircraft from "./Airplanes/get/GetAllAircraft";
import GetExercises from "./exercises/get/GetExercises";
import UpdateAircraft from "./Airplanes/update/UpdateAircraft"

const TactApi = {
  getAExercises: GetExercises,
  getAllAircraft: GetAllAircraft,
  updateAircraft: UpdateAircraft,
};
export default TactApi;
