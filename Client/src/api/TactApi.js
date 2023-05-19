import GetAllAircraft from "./Airplanes/get/GetAllAircraft";
import GetExercises from "./exercises/get/GetExercises";
import UpdateAircraft from "./Airplanes/update/UpdateAircraft";
import GetAllExercises from "./exercises/get/GetAllExercises.js";
import GetAllUsers from "./Users/get/GetAllUsers";
import AddUser from "./Users/add/AddUser";
import GetUser from "./Users/get/GetUser.js";
import UpdateUser from "./Users/update/UpdateUser";
import PostExercises from "./exercises/post/PostExercises";

const TactApi = {
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
