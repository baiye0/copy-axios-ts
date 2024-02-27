import express from "express";
import bodyParser from "body-parser";
const app = express();
const router = express.Router();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

router.get("/api/base/get", (req, res) => {
  res.json({ msg: "hello world" });
});

router.post("/api/base/post", (req, res) => {
  res.json(req.body);
});

app.use(router);
const port = 3000;

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}, Ctrl+C to stop`);
});
