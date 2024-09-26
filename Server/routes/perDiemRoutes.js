import express from "express";
import { requestConus, requestAllOconus, requestOconus, requestOconusCountry } from "../controllers/perDiemController.js";

const router = express.Router();

router.route("/get_conus").get(requestConus);

router.route("/get_all_oconus_rates").get(requestAllOconus);

router.route("/get_oconus").get(requestOconus);

router.route("/get_oconus_country").get(requestOconusCountry);

export default router;