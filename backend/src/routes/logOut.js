const express = require("express");
const router = express.Router(); // Fix: Use `express.Router()` instead of `express.route()`

router.post("/logOut", async (req, res, next) => {
  res.clearCookie("token");
  res.status(200).json({ status: true, message: "logout succesful" });
});

module.exports = router;
