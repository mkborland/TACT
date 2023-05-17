import express from "express";
const aircraftroutes = express.Router();

import { requestAircraft, requestAllAircraft } from "../controllers/aircraftController.js";

aircraftroutes.route("/get_aircraft").get(requestAircraft);

aircraftroutes.route("/get_all_aircraft").get(requestAllAircraft);

export default aircraftroutes;