import GetAllAircraft from "./Airplanes/get/GetAllAircraft.js";
import GetDashboard from "./exercises/get/GetDashboard.js";
import GetExercises from "./exercises/get/GetExercises.js";
import UpdateAircraft from "./Airplanes/update/UpdateAircraft.js";
import GetAllExercises from "./exercises/get/GetAllExercises.js";
import GetAllUsers from "./Users/get/GetAllUsers.js";
import AddUser from "./Users/add/AddUser.js";
import GetUser from "./Users/get/GetUser.js";
import UpdateUser from "./Users/update/UpdateUser.js";
import PostExercises from "./exercises/post/PostExercises.js";
import GetAllUnitExercises from "./UnitExercises/get/GetAllUnitExercises";
import getUnitExerciseByUnit from "./UnitExercises/get/getUnitExerciseByUnit.js";
import SaveUnitExercise from "./UnitExercises/post/SaveUnitExercise.js";
import UpdateUnitExercise from "./UnitExercises/post/UpdateUnitExercise.js";
import GetUnitExercise from "./UnitExercises/get/getUnitExercise.js";
import AddExerciseAircraft from "./ExerciseAircraft/post/AddExerciseAircraft.js";
import GetAllLocations from "./Locations/get/GetAllLocations.js";
import GetLocationById from "./Locations/get/GetLocationById.js";
import GetFYs from "./ExerciseAircraft/get/getFYs.js";
import GetSummaries from "./ExerciseAircraft/get/getSummaries.js";

const TactApi = {
  getDashboard: GetDashboard,
  getExercises: GetExercises,
  getAllExercises: GetAllExercises,
  getAllUnitExercises: GetAllUnitExercises,
  postExercises: PostExercises,
  getAllAircraft: GetAllAircraft,
  updateAircraft: UpdateAircraft,
  getAllUsers: GetAllUsers,
  addUser: AddUser,
  getUser: GetUser,
  updateUser: UpdateUser,
  getUnitExerciseByUnit: getUnitExerciseByUnit,
  saveUnitExercise: SaveUnitExercise,
  updateUnitExercise: UpdateUnitExercise,
  getUnitExercise: GetUnitExercise,
  addExerciseAircraft: AddExerciseAircraft,
  getAllLocations: GetAllLocations,
  getLocationById: GetLocationById,
  getFYs: GetFYs,
  getSummaries: GetSummaries,
};
export default TactApi;
