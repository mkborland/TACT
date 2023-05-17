import express from "express";
const router = express.Router();

import { requestAircraft, requestAllAircraft } from "../controllers/aircraftController.js";

router.route("/get_aircraft").get(requestAircraft);

router.route("/get_all_aircraft").get(requestAllAircraft);

export default router;