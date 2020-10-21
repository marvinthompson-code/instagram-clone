const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT;
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const usersRouter = require("./routes/users");
const postsRouter = require("./routes/posts");
const likesRouter = require("./routes/likes");

app.use("/users", usersRouter);
app.use("/posts", postsRouter);
app.use("/likes", likesRouter);

app.use((err, req, res, next) => {
  console.log(err);
  if (err.status) {
    res.status(err.status).json(err);
  } else {
    res.status(500).json(err);
  }
});

app.listen(PORT, () => {
  console.log("Listening on port ", PORT);
});
