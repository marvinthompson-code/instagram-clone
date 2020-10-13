const app = express();
const PORT = process.env.PORT;
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const usersRouter = require("./routes/users");
const postsRouter = require("./routes/posts");
const likesRouter = require("./routes/likes");

app.listen(PORT, () => {
  console.log("Listening on port ", PORT);
});
