import { prisma } from "../../database/prisma"
import { CarsServices } from "../../services/cars.services";
import { carMock, createCarBodyMock } from "../mocks/Car.mock";
import { prismaMock } from "../mocks/prisma";

describe("Unit test: get one cars function", () => {


    test("get one should work correctly", async () => {
        const carServices = new CarsServices();

        prismaMock.car.findFirst.mockResolvedValue(carMock);
        const data = await carServices.getOne(carMock.id);

        expect(data).toStrictEqual(carMock)

    });
})