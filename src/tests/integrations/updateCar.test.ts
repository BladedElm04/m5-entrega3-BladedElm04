import { prisma } from "../../database/prisma"
import { createCarBodyMock, invalidUpdateCarMock, updateCarBodyMock } from "../mocks/Car.mock";
import { request } from "../utils/request";

describe("Integration test: update car", () => {

    test("should be able to update a car successfully", async () => {

        await prisma.car.create({data: createCarBodyMock});

        const car = await prisma.car.findFirst();

        const data = await request
        .patch(`/cars/${car?.id}`).
        send(updateCarBodyMock)
        .expect(200)
        .then(response => response.body);

        expect(data.name).toBe(updateCarBodyMock.name);

    });

    test("should throw error when try to update an invalid car", async () => {

        await request.patch("/cars/1").expect(404);

    });

    test("should throw error when try to update a car with invalid data types", async () => {

        const car = await prisma.car.create({data: createCarBodyMock});

        await request.patch(`/cars/${car.id}`).send(invalidUpdateCarMock).expect(400);

    });
})