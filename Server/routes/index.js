import express, { response } from "express";
import { location } from "../controllers/amadeus.js";
const router = express.Router();

const base = async (req, res) => {
  res.send("Hello");
};

router.route("/").get(base);

router.route("/location").get(location);

export default router;
