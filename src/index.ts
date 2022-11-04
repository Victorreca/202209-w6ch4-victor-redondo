import express from "express";
import morgan from "morgan";
import * as dotenv from "dotenv";
import { endpointNotFound, generalError } from "./middlewares/errors.js";
import getThings from "./controllers/getThings.js";
import getThingById from "./controllers/getThingsById.js";

const { log } = console;
dotenv.config();

const app = express();
const port = process.env.PORT;

const serveListener = "Server listener";
const error404 = "Error in server";

app.use(morgan("dev"));

app.use(express.json());

app.get("/things", getThings);

app.get("/things/:idThing", getThingById);

app.use(endpointNotFound);

app.use(generalError);

const serverThings = app.listen(port, () => {
  log(serveListener);
});

serverThings.on("error", (error) => {
  log(`${error404}: ${error.message}`);
});
