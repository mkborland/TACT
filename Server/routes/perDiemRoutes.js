import express from "express";
import { requestRates } from "../controllers/perDiemController.js";

const router = express.Router();

router.route("/get_rates").get(requestRates);

export default router;