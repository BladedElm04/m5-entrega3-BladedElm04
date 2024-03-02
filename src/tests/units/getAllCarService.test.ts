import { prisma } from "../../database/prisma"
import { CarsServices } from "../../services/cars.services";
import { carListMock, carMock, createCarBodyMock } from "../mocks/Car.mock";
import { prismaMock } from "../mocks/prisma";

describe("Unit test: get all cars function", () => {


    test("get all should work correctly", async () => {
        const carServices = new CarsServices();

        prismaMock.car.findMany.mockResolvedValue(carListMock)
        const data = await carServices.getAll()

        expect(data).toHaveLength(2)

    })
})