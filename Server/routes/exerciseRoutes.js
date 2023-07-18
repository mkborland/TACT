import express from "express";
import { requestExercise, requestUnitExercise, requestExerciseAircraft, requestAllExercises, requestAllUnitExercises, requestAllExerciseAircraft, addExercise, addUnitExercise, addExerciseAircraft } from "../controllers/exerciseController.js";

const router = express.Router();

router.route("/get_exercise").get(requestExercise);

router.route("/get_unit_exercise").get(requestUnitExercise);

router.route("/get_exercise_aircraft").get(requestExerciseAircraft);

router.route("/get_all_exercises").get(requestAllExercises);

router.route("/get_all_unit_exercises").get(requestAllUnitExercises);

router.route("/get_all_exercise_aircraft").get(requestAllExerciseAircraft);

router.route("/add_exercise").post(addExercise);

router.route("/add_unit_exercise").post(addUnitExercise);

router.route("/add_exercise_aircraft").post(addExerciseAircraft);

export default router;