const express = require("express");
const router = express.Router();

const {
  getAllItems,
  getSearchedItems,
  getSingleItem,
} = require("../controllers/itemController");

router.get("/getAllItems", getAllItems);
router.get("/recipes", getSearchedItems);
router.get("/recipes/:id", getSingleItem);

module.exports = router;
