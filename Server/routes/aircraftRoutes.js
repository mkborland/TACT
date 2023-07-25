import express from "express";
import { requestAircraft, requestAircraftType, requestAllAircraft, updateAircraft, addAirframe } from "../controllers/aircraftController.js";

const router = express.Router();

router.route("/get_aircraft").get(requestAircraft);

router.route("/get_aircraft_type").get(requestAircraftType);

router.route("/get_all_aircraft").get(requestAllAircraft);

router.route("/update_aircraft").post(updateAircraft);

router.route("/add_airframe").post(addAirframe);

export default router;