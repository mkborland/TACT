import express from "express";
const router = express.Router();

import { requestRates } from "../controllers/perDiemController.js";

router.route("/get_rates").get(requestRates);

export default router;