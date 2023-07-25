import express from "express";
import { requestAircraft, requestAircraftType, requestAllAircraft, updateAircraft, addAirframe, addAircraftCount } from "../controllers/aircraftController.js";

const router = express.Router();

router.route("/get_aircraft").get(requestAircraft);

router.route("/get_aircraft_type").get(requestAircraftType);

router.route("/get_all_aircraft").get(requestAllAircraft);

router.route("/update_aircraft").post(updateAircraft);

router.route("/add_airframe").post(addAirframe);

router.route("/add_aircraft_count").post(addAircraftCount);

export default router;