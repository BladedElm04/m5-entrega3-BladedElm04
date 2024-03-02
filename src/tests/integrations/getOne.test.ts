import { prisma } from "../../database/prisma"
import { carMock, createCarBodyMock } from "../mocks/Car.mock";
import { request } from "../utils/request";

describe("Integration test: get one car", () => {

    test("should be able to get one car successfully", async () => {

        await prisma.car.create({data: createCarBodyMock});

        const car = await prisma.car.findFirst();

        const data = await request
        .get(`/cars/${car?.id}`)
        .expect(200)
        .then(response => response.body);

        expect(data).toEqual;

    });

    test("should throw error when try to get an invalid car", async () => {

        await request.get("/cars/1").expect(404);
        
    })
})