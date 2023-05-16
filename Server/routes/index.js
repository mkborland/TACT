import express, { response } from "express";
import { location, flights, airports } from "../controllers/amadeus.js";
const router = express.Router();

const base = async (req, res) => {
  res.send("Hello");
};

router.route("/").get(base);

router.route("/location/:keyword").get(location);

// router.route("api/airports").get(airports);

import Amadeus from "amadeus"

var amadeus = new Amadeus({
  clientId: 'bDfd8aWbh5FM5U3u6XATzYf4jG2IWT7b',
  clientSecret: 'lSXjU1GstFcGZ0ia'
});
const API = `api`;

// Endpoint
router.get(`/${API}/airports`, async (req, res) => {
  const { page, subType, keyword } = req.query;
  // API call with params we requested from client app
  const response = await amadeus.client.get("/v1/reference-data/locations", {
    keyword,
    subType,
    "page[offset]": page * 10
  });
  // Sending response for client
  try {
    await res.json(JSON.parse(response.body));
  } catch (err) {
    await res.json(err);
  }
});

// router.route("/flight/:keyword").get(location);

export default router;
