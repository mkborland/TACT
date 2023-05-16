import express from "express";
const router = express.Router();

const base = async (req, res) => {
  res.send("Hello");
};

router.route("/").get(base);

export default router;
