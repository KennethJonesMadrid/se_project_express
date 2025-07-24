const {
  createItem,
  getItems,
  deleteItem,
} = require("../controllers/clothingItems");

const router = require("express").Router();

router.get("/", getItems);
router.post("/", createItem);
router.delete("/:itemId", deleteItem);

module.exports = router;
