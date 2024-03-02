import { prisma } from "../../database/prisma"
import { carListMock } from "../mocks/Car.mock";
import { request } from "../utils/request";

describe("Integration test: get all cars", () => {

    test("should be able to get all cars successfully", async () => {

        await prisma.car.createMany({data: carListMock}); 

        const data = await request
        .get("/cars")
        .expect(200)
        .then(response => response.body)

        expect(data).toHaveLength(2);

    });
})