const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.listen(PORT, () => {
    console.log("Listening on port ", PORT)
})