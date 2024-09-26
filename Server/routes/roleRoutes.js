import express from "express";
import { getRole } from "../controllers/rolesController.js";

const router = express.Router();

router.route("/get_role").get(getRole);

export default router;
