import express from "express";
import { addUser, requestAllUsers, requestUser, updateUser } from "../controllers/userController.js";

const router = express.Router();

router.route("/add_user").post(addUser);

router.route("/get_all_users").get(requestAllUsers);

router.route("/get_user").get(requestUser);

router.route("/update_user").post(updateUser);

export default router;