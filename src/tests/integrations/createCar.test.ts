import { prisma } from "../../database/prisma"
import { createCarBodyMock, invalidCreateCarMock, missingBodyCreateCarMock } from "../mocks/Car.mock";
import { request } from "../utils/request";

describe("Integration test: create car", () => {

    test("should be able to create a car successfully", async () => {

        await prisma.car.create({data: createCarBodyMock})

        const data = await request
        .post("/cars")
        .send(createCarBodyMock)
        .expect(201)
        .then(response => response.body);

        expect(data).toBeDefined();
        expect(data).toEqual;

    });

    test("should throw error when try to create a car with invalid data types", async () => {

        await request.post("/cars").send(invalidCreateCarMock).expect(400);

    });

    test("should throw error when try to create a car with a missing body parameter", async () => {

        await request.post("/cars").send(missingBodyCreateCarMock).expect(400)
    })
})