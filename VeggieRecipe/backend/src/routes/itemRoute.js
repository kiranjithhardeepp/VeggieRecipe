const express = require('express');
const router = express.Router();

const ItemController = require("../controllers/itemController")

router.get("/recipes",ItemController.getAllItems)
router.get("/recipes",ItemController.getSearchedItems)
router.get("/recipes/:id",ItemController.getSingleItem)

module.exports = router;