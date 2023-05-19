import GetAllAircraft from "./Airplanes/get/GetAllAircraft";
import GetExercises from "./exercises/get/GetExercises";
import UpdateAircraft from "./Airplanes/update/UpdateAircraft";
import GetAllExercises from "./exercises/get/GetAllExercises.js";
import PostExercises from "./exercises/post/PostExercises";

const TactApi = {
  getExercises: GetExercises,
  getAllExercises: GetAllExercises,
  postExercises: PostExercises,
  getAllAircraft: GetAllAircraft,
  updateAircraft: UpdateAircraft,
};
export default TactApi;
