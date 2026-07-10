"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { OrderStatus } from "@prisma/client";

interface CreateOrderInput {
  customerName: string;
  phone: string;
  state: string;
  municipality: string;
  address: string;
  notes?: string;

  productId: string;
  quantity: number;
}

export async function createOrder(data: CreateOrderInput) {
  const product = await prisma.product.findUnique({
    where: {
      id: data.productId,
    },
  });

  if (!product) {
    throw new Error("المنتج غير موجود");
  }

  await prisma.order.create({
    data: {
      customerName: data.customerName,
      phone: data.phone,
      state: data.state,
      municipality: data.municipality,
      address: data.address,
      notes: data.notes,
      total: product.price * data.quantity,

      items: {
        create: {
          productId: product.id,
          quantity: data.quantity,
          price: product.price,
        },
      },
    },
  });

  revalidatePath("/admin/dashboard");
  revalidatePath("/admin/inventory");
  revalidatePath("/admin/orders");
}

export async function getOrders() {
  return prisma.order.findMany({
    include: {
      items: {
        include: {
          product: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}

export async function confirmOrder(id: string) {
  await prisma.$transaction(async (tx) => {

    const order = await tx.order.findUnique({
      where: {
        id,
      },
      include: {
        items: true,
      },
    });

    if (!order) {
      throw new Error("الطلب غير موجود");
    }

    for (const item of order.items) {

      const product = await tx.product.findUnique({
        where: {
          id: item.productId,
        },
      });

      if (!product) {
        throw new Error("المنتج غير موجود");
      }

      if (product.stock < item.quantity) {
        throw new Error(
          `المخزون غير كافٍ للمنتج ${product.name}`
        );
      }

      await tx.product.update({
        where: {
          id: product.id,
        },
        data: {
          stock: {
            decrement: item.quantity,
          },
        },
      });

    }

    await tx.order.update({
      where: {
        id,
      },
      data: {
        status: "PROCESSING",
      },
    });

  });

  revalidatePath("/admin/dashboard");
  revalidatePath("/admin/inventory");
  revalidatePath("/admin/orders");
  revalidatePath("/admin/products");
  revalidatePath("/products");
}

export async function shipOrder(id: string) {
  await prisma.order.update({
    where: {
      id,
    },
    data: {
      status: OrderStatus.SHIPPED,
    },
  });

  revalidatePath("/admin/dashboard");
  revalidatePath("/admin/inventory");
  revalidatePath("/admin/orders");
}

export async function deliverOrder(id: string) {
  await prisma.order.update({
    where: {
      id,
    },
    data: {
      status: OrderStatus.DELIVERED,
    },
  });

  revalidatePath("/admin/dashboard");
  revalidatePath("/admin/inventory");
  revalidatePath("/admin/orders");
}

export async function deleteOrder(id: string) {
  await prisma.$transaction(async (tx) => {
    await tx.orderItem.deleteMany({
      where: {
        orderId: id,
      },
    });

    await tx.order.delete({
      where: {
        id,
      },
    });
  });

  revalidatePath("/admin/dashboard");
  revalidatePath("/admin/inventory");
  revalidatePath("/admin/orders");
}

export async function getPendingOrders() {
  return prisma.order.findMany({
    where: {
      status: {
        in: ["PENDING", "PROCESSING"],
      },
    },
    include: {
      items: {
        include: {
          product: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}

export async function getDeliveredOrders() {
  return prisma.order.findMany({
    where: {
      status: "DELIVERED",
    },
    include: {
      items: {
        include: {
          product: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}