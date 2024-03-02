import { z } from "zod";
import { carsSchema, createCarSchema, updateCarSchema } from "../schemas/cars.schema";

export type TCar = z.infer<typeof carsSchema>;

export type TCreateCar = z.infer<typeof createCarSchema>;

export type TUpdateCar = z.infer<typeof updateCarSchema>;