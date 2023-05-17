import express, { response } from "express";
import { location, flights, airports } from "../controllers/amadeus.js";
const router = express.Router();

const base = async (req, res) => {
  res.send("Hello");
};

router.route("/").get(base);

router.route("/location/:keyword").get(location);

const API = `api`;

router.route(`/${API}/airports`).get(airports);

// router.route("/flight/:keyword").get(location);

export default router;
