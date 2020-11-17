const users = require("express").Router()

const {
  createUser,
  getAllUsers,
  getSingleUserById,
  deleteSingleUser,
  updateUserById,
  updateProfilePic,
} = require("../queries/users");

users.get("/", getAllUsers);
users.get("/:id", getSingleUserById);
users.post("/addUser", createUser);
users.patch("/:id", updateUserById);
users.patch("/profile_Pic/:id", updateProfilePic);
users.delete("/:id", deleteSingleUser);

module.exports = users;
