const { Router } = require("express");
const {
  getAllUsers,
  getUserById,
  deleteUser,
  updateUser,
  registerUser,
  login,
} = require("../controllers/userController");

const userRouter = Router();

userRouter.get("/all", getAllUsers);
userRouter.get("/:id", getUserById);
userRouter.delete("/:id", deleteUser);
userRouter.post("/", registerUser);
userRouter.put("/:id", updateUser);
userRouter.post("/register", registerUser);
userRouter.post("/login", login);

module.exports = userRouter;

//register post
// http://localhost:3000/api/users/register

//login post
// http://localhost:3000/api/users/login
