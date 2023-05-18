import GetAllAircraft from "./Airplanes/get/GetAllAircraft";
import GetExercises from "./exercises/get/GetExercises";
import UpdateAircraft from "./Airplanes/update/UpdateAircraft";
import GetAllExercises from "./exercises/get/GetAllExercises.js"

const TactApi = {
  getExercises: GetExercises,
  getAllExercises: GetAllExercises,
  getAllAircraft: GetAllAircraft,
  updateAircraft: UpdateAircraft,
};
export default TactApi;
