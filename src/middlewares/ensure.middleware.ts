import { NextFunction, Request, Response } from "express";
import { prisma } from "../database/prisma";
import { AppError } from "../errors/appError";
import { AnyZodObject } from "zod";

export class EnsureMiddleware {
    CarFound = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
        const carId = req.params.id;

        const foundCar = await prisma.car.findFirst({where: {id: carId}});

        if(!foundCar){
            throw new AppError("Car not found.", 404);
        };

        res.locals.id = foundCar.id;

        return next();
    };

    validateBody = (schema: AnyZodObject) => (req: Request, res: Response, next: NextFunction) => {
        
        req.body = schema.parse(req.body);
        
        return next();
    };
}