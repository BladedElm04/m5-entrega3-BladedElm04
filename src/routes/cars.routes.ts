import "reflect-metadata";
import { Router } from "express";
import { container } from "tsyringe";
import { CarsServices } from "../services/cars.services";
import { CarsControllers } from "../controllers/cars.controllers";
import { EnsureMiddleware } from "../middlewares/ensure.middleware";
import { createCarSchema, updateCarSchema } from "../schemas/cars.schema";

export const carsRouter = Router();

container.registerSingleton("CarsServices", CarsServices);
const carsControllers = container.resolve(CarsControllers);

const ensure = new EnsureMiddleware();

carsRouter.post("/", ensure.validateBody(createCarSchema), (req, res) => carsControllers.create(req, res));

carsRouter.get("/", (req, res) => carsControllers.getAll(req, res));

carsRouter.use("/:id", ensure.CarFound)

carsRouter.get("/:id", (req, res) => carsControllers.getOne(req, res));

carsRouter.patch("/:id", ensure.validateBody(updateCarSchema), (req, res) => carsControllers.update(req, res));

carsRouter.delete("/:id", (req, res) => carsControllers.delete(req, res));