import type { NextFunction, Request, Response } from "express";
import express from "express";
import morgan from "morgan";
import things from "./data/things.js";
import * as dotenv from "dotenv";

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

app.use((req: Request, res: Response) => {
  res.status(404).json({ error: "Endpoint not found" });
});

app.use(
  (
    error: Error,
    req: Request,
    res: Response,

    // eslint-disable-next-line no-unused-vars
    next: NextFunction
  ) => {
    res.status(500).json({ error: "There was a general error" });
  }
);

const serverThings = app.listen(port, () => {
  log(serveListener);
});

serverThings.on("error", (error) => {
  log(`${error404}: ${error.message}`);
});
