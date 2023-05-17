import express from "express";
import { location, flights, airports } from "../controllers/amadeusController.js";
const router = express.Router();

router.route("/location/:keyword").get(location);

router.route("/airports").get(airports);

export default router