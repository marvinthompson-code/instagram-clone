const db = require("../db/index");

const getAllPosts = async (req, res, next) => {
    try {
      let posts = await db.any(
        "SELECT * FROM posts"
      );
      res.status(200).json({
        status: "Success",
        message: "Retrieved all Posts",
        body: {
          posts,
        },
      });
    } catch (error) {
      res.status(400).json({
          status: "Unsuccessful",
          message: "Could not retrieve all posts"
      })
      next(error);
    }
};

