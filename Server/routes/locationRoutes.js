import express from "express";
import { requestLocation, populateRecommended, requestMilitaryBases, requestCivilianAirports, requestDualUseAirports } from "../controllers/locationController.js";

const router = express.Router();

router.route("/get_location").get(requestLocation);

router.route("/get_recommended_location").get(populateRecommended);

router.route("/get_mil_bases").get(requestMilitaryBases);

router.route("/get_civilian_airports").get(requestCivilianAirports);

router.route("/get_dual_airports").get(requestDualUseAirports);

export default router;