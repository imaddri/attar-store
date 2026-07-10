import { notFound } from "next/navigation";

import { prisma } from "@/lib/prisma";

import InvoiceTemplate from "@/components/invoice/InvoiceTemplate";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function InvoicePage({
  params,
}: Props) {
  const { id } = await params;

  const order = await prisma.order.findUnique({
    where: {
      id,
    },

    include: {
      items: {
        include: {
          product: true,
        },
      },
    },
  });

  if (!order) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-zinc-100 py-10">
      <InvoiceTemplate order={order} />
    </main>
  );
}