import type { Request, Response } from "express";
import things from "../data/things.js";

const getThings = (req: Request, res: Response) => {
  res.status(200).json({ things });
};

export default getThings;
