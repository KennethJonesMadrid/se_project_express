const router = require("express").Router();

const userRouter = require("./users");
const { login, createUser } = require("../controllers/users");
const itemRouter = require("./clothingItems");
const { NOT_FOUND } = require("../utils/errors");
const auth = require("../middlewares/auth");

router.post("/signin", login);
router.post("/signup", createUser);

router.use("/items", itemRouter);

router.use(auth);

router.use("/users", userRouter);

router.use((req, res) => {
  res.status(NOT_FOUND).send({ message: "Requested resource not found" });
});

module.exports = router;
