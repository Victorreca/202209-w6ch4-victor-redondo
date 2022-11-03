import express from "express";
import morgan from "morgan";
import things from "./data/things.js";
import * as dotenv from "dotenv";
dotenv.config();

const app = express();
const port = process.env.PORT;

const serveListener = "Server listener";
const error404 = "Error en el servidor";

app.use(morgan("dev"));

app.use(express.json());

const serverThings = app.listen(port, () => {
  const { log } = console;
  log(serveListener);
});

app.get("/things", (req, res) => {
  res.status(200).json(things);
});

app.use((req, res) => {
  res.status(200).json({ message: "Huye" });
});

serverThings.on("error", () => {
  const { log } = console;
  log(error404);
});
