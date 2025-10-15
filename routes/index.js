const router = require("express").Router();

const userRouter = require("./users");
const { login, createUser } = require("../controllers/users");
const itemRouter = require("./clothingItems");
const { NOT_FOUND } = require("../utils/errors");
const auth = require("../middlewares/auth");
const {
  validateUserBody,
  validateAuthentication,
} = require("../middlewares/validation");
const NotFoundError = require("../errors/not-found-err");

router.get("/crash-test", () => {
  setTimeout(() => {
    throw new Error("Server will crash now");
  }, 0);
});

router.post("/signin", validateAuthentication, login);
router.post("/signup", validateUserBody, createUser);

router.use("/items", itemRouter);

router.use(auth);

router.use("/users", userRouter);

router.use((req, res, next) => {
  next(new NotFoundError("Requested resource not found"));
});

module.exports = router;
