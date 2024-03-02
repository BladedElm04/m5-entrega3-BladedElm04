import { prisma } from "../../database/prisma"
import { CarsServices } from "../../services/cars.services";
import { carMock, carUpdatedMock, createCarBodyMock, updateCarBodyMock } from "../mocks/Car.mock";
import { prismaMock } from "../mocks/prisma";

describe("Unit test: update cars function", () => {

    test("update car should work correctly", async () => {
        const carServices = new CarsServices();

        prismaMock.car.update.mockResolvedValue(carUpdatedMock)
        const data = await carServices.update(carMock.id, updateCarBodyMock)

        expect(data).toStrictEqual(carUpdatedMock)

    });
})