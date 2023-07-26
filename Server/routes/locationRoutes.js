import express from "express";
import { requestLocation, populateRecommended } from "../controllers/locationController.js";

const router = express.Router();

router.route("/get_location").get(requestLocation);

router.route("/get_recommended_location").get(populateRecommended);

export default router;