"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";

export async function getProducts(
  search?: string
) {
  return prisma.product.findMany({
    where: {
      ...(search
        ? {
            name: {
              contains: search,
              mode: "insensitive",
            },
          }
        : {}),
    },
    include: {
      category: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}

export async function getCategories() {
  return prisma.category.findMany({
    orderBy: {
      name: "asc",
    },
  });
}

export interface CreateProductInput {
  name: string;
  description: string;
  price: number;
  stock: number;
  image: string;
  categoryId: string;
  featured?: boolean;
  available?: boolean;
}

export async function addProduct(data: CreateProductInput) {
  const slug =
    data.name
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]/g, "") +
    "-" +
    Date.now();

  const product = await prisma.product.create({
    data: {
      ...data,
      slug,
      featured: data.featured ?? false,
      available: data.available ?? true,
    },
  });

  revalidatePath("/admin/products");
  revalidatePath("/products");

  return product;
}

export async function updateProduct(
  id: string,
  data: CreateProductInput
) {
  const product = await prisma.product.update({
    where: {
      id,
    },
    data,
  });

  revalidatePath("/admin/products");
  revalidatePath("/products");

  return product;
}

export async function deleteProduct(id: string) {
  await prisma.product.delete({
    where: {
      id,
    },
  });

  revalidatePath("/admin/products");
  revalidatePath("/products");
}

export async function getAvailableProducts() {
  return prisma.product.findMany({
    where: {
      available: true,
    },
    include: {
      category: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}