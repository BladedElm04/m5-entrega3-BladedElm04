import "reflect-metadata";
import { prisma } from "../database/prisma";
import { TCar, TCreateCar, TUpdateCar } from "../interfaces/cars.interfaces";
import { injectable } from "tsyringe";

@injectable()
export class CarsServices{
    create = async (payload: TCreateCar): Promise<TCar> => {
        const newCar = await prisma.car.create({ data: payload });

        return newCar
    };

    getAll = async (): Promise<Array<TCar>> => {
        const carList = await prisma.car.findMany();

        return carList
    };

    getOne = async (id: string): Promise<TCar | null> => {
        const car = await prisma.car.findFirst({where: {id}});

        return car
    };

    update = async (id: string, payload: TUpdateCar): Promise<TCar | null> => {
        return await prisma.car.update({where: {id}, data: payload});
    };

    delete = async (id:string): Promise<void> => {
        await prisma.car.delete({where: {id}});
    }
}