import express from "express";
const router = express.Router();

import { addUser, requestAllUsers, requestUser } from "../controllers/userController.js";

router.route("/add_user").post(addUser);

router.route("/get_all_users").get(requestAllUsers);

router.route("/get_user").get(requestUser);

export default router;