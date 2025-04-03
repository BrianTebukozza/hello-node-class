const express = require("express");
const router = express.Router();

router.get("/addagent", (req, res) => {
  res.render("agent");
});

router.post("/addagent", (req, res) => {
  console.log(req.body);
});

module.exports = router;
