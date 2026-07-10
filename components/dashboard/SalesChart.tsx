import { prisma } from "@/lib/prisma";
import SalesChartClient from "./SalesChartClient";

export default async function SalesChart() {
  const months = [
    "جانفي",
    "فيفري",
    "مارس",
    "أفريل",
    "ماي",
    "جوان",
    "جويلية",
    "أوت",
    "سبتمبر",
    "أكتوبر",
    "نوفمبر",
    "ديسمبر",
  ];

  const orders = await prisma.order.findMany({
    select: {
      createdAt: true,
    },
  });

  const data = months.map((month, index) => ({
    month,
    orders: orders.filter(
      (order) =>
        order.createdAt.getMonth() === index
    ).length,
  }));

  return <SalesChartClient data={data} />;
}