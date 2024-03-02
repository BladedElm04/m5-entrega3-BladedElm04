import { inject, injectable } from "tsyringe";
import { CarsServices } from "../services/cars.services";
import { Request, Response } from "express";

@injectable()
export class CarsControllers {
    constructor(@inject("CarsServices") private carsServices: CarsServices){};

    create = async (req: Request, res: Response): Promise<Response> => {
        
        const newCar = await this.carsServices.create(req.body);

        return res.status(201).json(newCar);
    };

    getAll = async (req: Request, res: Response): Promise<Response> => {
        
        const carList = await this.carsServices.getAll();

        return res.status(200).json(carList);
    };

    getOne = async (req: Request, res: Response): Promise<Response> => {
        
        const id = res.locals.id;

        const car = await this.carsServices.getOne(id);

        return res.status(200).json(car);
    };

    update = async (req: Request, res: Response): Promise<Response> => {
        
        const id = res.locals.id;

        const updatedCar = await this.carsServices.update(id, req.body);

        return res.status(200).json(updatedCar);
    };

    delete = async (req: Request, res: Response): Promise<Response> => {
        
        const id = res.locals.id;

        await this.carsServices.delete(id);

        return res.status(204).json();
    }
}