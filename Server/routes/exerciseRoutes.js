import express from "express";
import { requestExercise, requestAllExercises, addExercise } from "../controllers/exerciseController.js";

const router = express.Router();

router.route("/get_exercise").get(requestExercise);

router.route("/get_all_exercises").get(requestAllExercises);

router.route("/add_exercise").post(addExercise);

export default router;