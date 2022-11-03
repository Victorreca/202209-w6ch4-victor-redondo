import type { NextFunction, Request, Response } from "express";

export const endpointNotFound = (req: Request, res: Response) => {
  res.status(404).json({ error: "Endpoint not found" });
};

export const generalError = (
  error: Error,
  req: Request,
  res: Response,

  // eslint-disable-next-line no-unused-vars
  next: NextFunction
) => {
  res.status(500).json({ error: "There was a general error" });
};
