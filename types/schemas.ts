import { z } from "zod";

export const matrixSchema = z.object({
  x1: z
    .string()
    .regex(/^-?\d+$/)
    .transform((val) => Number(val)),
  y1: z
    .string()
    .regex(/^-?\d+$/)
    .transform((val) => Number(val)),
  z1: z
    .string()
    .regex(/^-?\d+$/)
    .transform((val) => Number(val)),
  c1: z
    .string()
    .regex(/^-?\d+$/)
    .transform((val) => Number(val)),
  x2: z
    .string()
    .regex(/^-?\d+$/)
    .transform((val) => Number(val)),
  y2: z
    .string()
    .regex(/^-?\d+$/)
    .transform((val) => Number(val)),
  z2: z
    .string()
    .regex(/^-?\d+$/)
    .transform((val) => Number(val)),
  c2: z
    .string()
    .regex(/^-?\d+$/)
    .transform((val) => Number(val)),
  x3: z
    .string()
    .regex(/^-?\d+$/)
    .transform((val) => Number(val)),
  y3: z
    .string()
    .regex(/^-?\d+$/)
    .transform((val) => Number(val)),
  z3: z
    .string()
    .regex(/^-?\d+$/)
    .transform((val) => Number(val)),
  c3: z
    .string()
    .regex(/^-?\d+$/)
    .transform((val) => Number(val)),
});

export type Matrix = z.infer<typeof matrixSchema>;
