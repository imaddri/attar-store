import { z } from "zod";

export const productSchema = z.object({
  name: z.string().min(3),
  description: z.string().min(10),
  price: z.coerce.number().positive(),
  stock: z.coerce.number().int().min(0),
  image: z.string(),
  categoryId: z.string(),
});

export type ProductSchema = z.infer<typeof productSchema>;