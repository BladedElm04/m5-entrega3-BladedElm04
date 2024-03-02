import { z } from "zod";

export const carsSchema = z.object({
    id: z.string().uuid(),
    name: z.string().min(1),
    description: z.string().nullish(),
    brand: z.string().min(1),
    year: z.number().min(1).positive(),
    km: z.number().min(1).positive()
})

export const createCarSchema = carsSchema.omit({id: true});

export const updateCarSchema = createCarSchema.partial();
