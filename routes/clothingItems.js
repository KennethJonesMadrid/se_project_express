const {
  createItem,
  getItems,
  deleteItem,
  likeItem,
} = require("../controllers/clothingItems");

const router = require("express").Router();

router.get("/", getItems);
router.post("/", createItem);
router.delete("/:itemId", deleteItem);
router.put("/:itemId/likes", likeItem);
router.delete("/:itemId/likes", () => console.log("item deleted"));

module.exports = router;
