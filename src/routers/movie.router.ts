import { Router } from "express";
import { movieControllers } from "../controllers";
import middlewares from "../middlewares";
import { movieCreateSchema, movieUpdateSchema } from "../schemas";

export const movieRouter: Router = Router();

movieRouter.post(
  "",
  middlewares.validateBody(movieCreateSchema),
  middlewares.verifyNameExists,
  movieControllers.create
);

movieRouter.get("", middlewares.pagination, movieControllers.read);

movieRouter.use("/:movieId", middlewares.verifyIdExists);

movieRouter.patch(
  "/:movieId",
  middlewares.validateBody(movieUpdateSchema),
  middlewares.verifyNameExists,
  movieControllers.partialUpdate
);

movieRouter.delete("/:movieId", movieControllers.destroy);
