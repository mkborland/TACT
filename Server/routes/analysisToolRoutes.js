import express from "express";
import { requestCostSummaries, requestFYs, requestExerciseList } from "../controllers/analysisToolController.js";

const router = express.Router();

router.route("/get_summaries").get(requestCostSummaries);
router.route("/get_FYs").get(requestFYs);
router.route("/get_exercise_list").get(requestExerciseList);

export default router;