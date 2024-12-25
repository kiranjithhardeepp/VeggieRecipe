const express = require("express");
const router = express.Router();

const {
  getAllItems,
  getSearchedItems,
  getSingleItem,
} = require("../controllers/itemController");

router.get("/getAllItems", getAllItems);
router.get("/recipes", getSearchedItems);
router.post("/getSingleItem", getSingleItem);

module.exports = router;
