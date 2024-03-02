import { prisma } from "../../database/prisma";
import { CarsServices } from "../../services/cars.services";
import { carMock, createCarBodyMock } from "../mocks/Car.mock";
import { prismaMock } from "../mocks/prisma";

describe("Unit test: create car service", () => {


    test("create car should work correctly", async () => {
        const carServices = new CarsServices();

        prismaMock.car.create.mockResolvedValue(carMock)
        const data = await carServices.create(createCarBodyMock);

        expect(data).toStrictEqual(carMock)
    })
});