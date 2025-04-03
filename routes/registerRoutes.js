const express = require("express");
const router = express.Router();

router.get("/addProduct", (req, res) => {
  res.render("register");
});

router.post("/addProduct", (req, res) => {
  console.log(req.body);
});

module.exports = router;