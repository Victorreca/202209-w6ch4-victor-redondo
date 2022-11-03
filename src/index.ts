import express from "express";
import morgan from "morgan";
import things from "./data/things.js";

const app = express();
const port = process.env.PORT;

const serveListener = "Server listener";
const error404 = "Error en el servidor";

app.use(morgan("dev"));

app.use(express.json());

app.get("/things", (req, res) => {
  res.status(200).json(things);
});

const serverThings = app.listen(port, () => {
  const { log } = console;
  log(serveListener);
});

serverThings.on("error", () => {
  const { log } = console;
  log(error404);
});
