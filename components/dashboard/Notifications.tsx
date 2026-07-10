import { prisma } from "@/lib/prisma";
import NotificationsClient from "./NotificationsClient";

export default async function Notifications() {
  const lowStockProducts = await prisma.product.findMany({
    where: {
      stock: {
        lte: 10,
      },
    },
    orderBy: {
      stock: "asc",
    },
    select: {
      id: true,
      name: true,
      stock: true,
    },
  });

  return (
    <NotificationsClient
      products={lowStockProducts}
    />
  );
}