import express from "express";
import { requestExercise, requestUnitExercise, requestExerciseAircraft, requestAllExercises, requestAllUnitExercises, requestAllExerciseAircraft, addExercise, saveUnitExercise, addExerciseAircraft, updateExercise, lookupUnitExercise, updateUnitExercise } from "../controllers/exerciseController.js";

const router = express.Router();

router.route("/get_exercise").get(requestExercise);

router.route("/get_unit_exercise").get(requestUnitExercise);

router.route("/get_exercise_aircraft").get(requestExerciseAircraft);

router.route("/get_all_exercises").get(requestAllExercises);

router.route("/get_all_unit_exercises").get(requestAllUnitExercises);

router.route("/get_all_exercise_aircraft").get(requestAllExerciseAircraft);

router.route("/add_exercise").post(addExercise);

router.route("/save_unit_exercise").post(saveUnitExercise);

router.route("/update_unit_exercise").post(updateUnitExercise);

router.route("/add_exercise_aircraft").post(addExerciseAircraft);

router.route("/update_exercise").post(updateExercise);

router.route("/lookup_unit_exercise").get(lookupUnitExercise);

export default router;