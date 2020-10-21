const db = require("../db/index");

const createUser = async (req, res, next) => {
  try {
    let { email, username, full_name, profile_picture, bio, id } = req.body;
    let user = await db.one(
      "INSERT INTO users (email, username, full_name, profile_picture, bio, id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [email, username, full_name, profile_picture, bio, id]
    );
    res.status(200).json({
      status: "Success",
      message: "Created new user",
      body: {
        user,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "Unsuccessful",
      message: "Unable to create new user",
    });
    next(error);
  }
};

const getAllUsers = async (req, res, next) => {
  try {
    let users = await db.any("SELECT * FROM users");
    res.status(200).json({
      status: "Success",
      message: "Retrieved Users",
      body: {
        users,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "error",
      message: "Could not get all users",
    });
    next(error);
  }
};

const getSingleUserById = async (req, res, next) => {
  let { id } = req.params;
  try {
    let single_user = await db.one("SELECT * FROM users where id = $1", [id]);
    res.status(200).json({
      status: "Success",
      message: "Got a single User by id: " + id,
      body: {
        single_user,
      },
    });
  } catch (error) {
    res.json({
      status: "Error",
      message: `No User by id ${id} found!`,
    });
    next(error);
  }
};

const deleteSingleUser = async (req, res, next) => {
  let { id } = req.params;
  try {
    let deleted_single_user = db.one(
      "DELETE FROM users WHERE id = $1 RETURNING *",
      [id]
    );
    res.status(200).json({
      status: "Success",
      message: "Deleted a single User",
      body: {
        deleted_single_user,
      },
    });
  } catch (error) {
    res.json({
      status: "Error",
      message: `Could not delete User by id: ${id}`,
    });
    next(error);
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getSingleUserById,
  deleteSingleUser,
};
