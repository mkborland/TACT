import express from "express";
import { requestAircraft, requestAllAircraft, updateAircraft } from "../controllers/aircraftController.js";

const router = express.Router();

router.route("/get_aircraft").get(requestAircraft);

router.route("/get_all_aircraft").get(requestAllAircraft);

router.route("/update_aircraft").post(updateAircraft);

export default router;