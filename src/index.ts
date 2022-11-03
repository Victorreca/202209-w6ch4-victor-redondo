import express from "express";
import morgan from "morgan";
import things from "./data/things.js";
import * as dotenv from "dotenv";
import { endpointNotFound, generalError } from "./middlewares/errors.js";

const { log } = console;
dotenv.config();

const app = express();
const port = process.env.PORT;

const serveListener = "Server listener";
const error404 = "Error en el servidor";

app.use(morgan("dev"));

app.use(express.json());

app.get("/things", (req, res) => {
  res.status(200).json(things);
});

app.use(endpointNotFound);

app.use(generalError);

const serverThings = app.listen(port, () => {
  log(serveListener);
});

serverThings.on("error", (error) => {
  log(`${error404}: ${error.message}`);
});
