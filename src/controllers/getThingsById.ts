import type { Request, Response } from "express";
import things from "../data/things.js";

const getThingById = (req: Request, res: Response) => {
  const { idThing } = req.params;
  const thingById = things.find(
    // eslint-disable-next-line no-implicit-coercion
    (thing) => thing.id === +idThing
  );

  if (!thingById) {
    res.status(404).json({ error: `There aren't things with id: ${idThing}` });
    return;
  }

  res.status(200).json({ thingById });
};

export default getThingById;
