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

const TactApi = {
  getDashboard: GetDashboard,
  getExercises: GetExercises,
  getAllExercises: GetAllExercises,
  postExercises: PostExercises,
  getAllAircraft: GetAllAircraft,
  updateAircraft: UpdateAircraft,
  getAllUsers: GetAllUsers,
  addUser: AddUser,
  getUser: GetUser,
  updateUser: UpdateUser,
};
export default TactApi;
