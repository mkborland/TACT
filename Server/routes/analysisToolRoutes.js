import express from "express";
import { requestCostSummaries, requestFYs } from "../controllers/analysisToolController.js";

const router = express.Router();

router.route("/get_summaries").get(requestCostSummaries);
router.route("/get_FYs").get(requestFYs);

export default router;