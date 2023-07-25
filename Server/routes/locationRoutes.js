import express from "express";
import { requestLocation } from "../controllers/locationController";

const router = express.Router();

router.route("/get_location").get(requestLocation);

export default router;