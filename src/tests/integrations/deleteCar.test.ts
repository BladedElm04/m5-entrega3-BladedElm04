import { prisma } from "../../database/prisma"
import { createCarBodyMock, updateCarBodyMock } from "../mocks/Car.mock";
import { request } from "../utils/request";

describe("Integration test: delete car", () => {

    test("should be able to delete a car successfully", async () => {

        await prisma.car.create({data: createCarBodyMock});

        const car = await prisma.car.findFirst();

        await request.delete(`/cars/${car?.id}`).expect(204);

    });

    test("should throw error when try to delete an invalid car", async () => {
        
        await request.delete("/cars/1").expect(404)
        
    })
})