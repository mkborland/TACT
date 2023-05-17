import aircraftRoutes from "./aircraftRoutes.js";
import userRoutes from "./userRoutes.js";
import exerciseRoutes from "./exerciseRoutes.js";

import { location } from "../controllers/amadeus.js";
// import express, { response } from "express";

// const router = express.Router();

// const base = async (req, res) => {
//   res.send("Hello");
// };

// const tester = async (req, res) => {
//   res.send("Test");
// };

// router.route("/test").get(tester);

// router.route("/").get(base);

// router.route("/location").get(location);

export { aircraftRoutes, userRoutes, exerciseRoutes };
