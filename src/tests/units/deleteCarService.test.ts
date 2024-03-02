import { prisma } from "../../database/prisma"
import { CarsServices } from "../../services/cars.services";
import { carMock, carUpdatedMock, createCarBodyMock, updateCarBodyMock } from "../mocks/Car.mock";
import { prismaMock } from "../mocks/prisma";

describe("Unit test: delete cars function", () => {


    test("delete car should work correctly", async () => {
        const carServices = new CarsServices();

        prismaMock.car.delete.mockResolvedValue(carMock);
        const data = await carServices.delete(carMock.id);

        expect(data).toBeFalsy();

    });
})