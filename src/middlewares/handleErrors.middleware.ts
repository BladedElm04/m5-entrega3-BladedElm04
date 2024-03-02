import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/appError";
import { ZodError } from "zod";

export class HandleErrorsMiddleware {
    static execute = (error: Error, _: Request, res: Response, next: NextFunction): Response => {
        if(error instanceof AppError){
            return res.status(error.status).json({ message: error.message });
        }
        
        if(error instanceof ZodError){
            return res.status(400).json(error);
        }

        console.log(error);
        return res.status(500).json({ message: "Internal Server Error"});
    }
}