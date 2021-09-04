var express = require("express");
var router = express.Router();
router.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
router.get("/about", (req, res) => {
  res.sendFile(__dirname + "/about.html");
});
router.get("/order", (req, res) => {
  res.sendFile(__dirname + "/order.html");
});
module.exports = router;
