import { notFound } from "next/navigation";

import StoreLayout from "@/components/layout/StoreLayout";
import OrderPage from "@/components/order/OrderPage";

import { prisma } from "@/lib/prisma";

interface Props {
  searchParams: Promise<{
    product?: string;
    quantity?: string;
  }>;
}

export default async function Page({
  searchParams,
}: Props) {
  const params = await searchParams;

  if (!params.product) {
    notFound();
  }

  const product = await prisma.product.findUnique({
    where: {
      id: params.product,
    },
    include: {
      category: true,
    },
  });

  if (!product) {
    notFound();
  }

  const quantity = Number(params.quantity ?? 1);

  return (
    <StoreLayout>
      <OrderPage
        product={product}
        quantity={quantity}
      />
    </StoreLayout>
  );
}