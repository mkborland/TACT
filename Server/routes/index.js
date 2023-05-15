import express from "express";
const router = express.Router();

const base = async (req, res) => {
  res.states(200).send("Hello");
};

router.route("/").get(base);

export default router;
