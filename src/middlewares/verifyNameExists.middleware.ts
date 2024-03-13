import { NextFunction, Request, Response } from "express";
import { movieRepo } from "../repositories";
import { AppError } from "../errors";

export const verifyNameExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const name = req.body.name;

  if (!name) return next();

  const nameExist = await movieRepo.exist({ where: { name } });

  if (nameExist) throw new AppError("Movie already exists.", 409);

  return next();
};
