import { z } from "zod";

const rSchema = z.object({
    c1: z.boolean(),
    c2: z.boolean(),
})

const cSchema = z.object({
    id: z.string(),
    title: z.string(),
    content: z.number(),
    bgDefault: z.string(),
    textDefault: z.string(),
    bgOverRide: z.string().optional(),
    textOverRide: z.string().optional(),
})

const r1Schema = z.object({
    config: rSchema,
    c1Schema: z.array(cSchema).optional(),
    c2Schema: z.array(cSchema).optional(),
})

export type R1Schema = z.infer<typeof r1Schema>;
export type CSchema = z.infer<typeof cSchema>;