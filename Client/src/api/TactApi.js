import GetAllAircraft from "./Airplanes/get/GetAllAircraft";
import GetExercises from "./exercises/get/GetExercises";
import UpdateAircraft from "./Airplanes/update/UpdateAircraft";
import GetAllExercises from "./exercises/get/GetAllExercises.js"
import GetAllUsers from "./Users/get/GetAllUsers";

const TactApi = {
  getExercises: GetExercises,
  getAllExercises: GetAllExercises,
  getAllAircraft: GetAllAircraft,
  updateAircraft: UpdateAircraft,
  getAllUsers: GetAllUsers,
};
export default TactApi;
