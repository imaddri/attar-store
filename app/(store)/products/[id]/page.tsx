import { notFound } from "next/navigation";

import StoreLayout from "@/components/layout/StoreLayout";
import ProductDetails from "@/components/products/ProductDetails";
import RelatedProducts from "@/components/products/RelatedProducts";

import { prisma } from "@/lib/prisma";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductPage({
  params,
}: Props) {
  const { id } = await params;

  const product = await prisma.product.findUnique({
    where: {
      id,
    },
    include: {
      category: true,
    },
  });

  if (!product) {
    notFound();
  }

  const relatedProducts = await prisma.product.findMany({
    where: {
      categoryId: product.categoryId,
      id: {
        not: product.id,
      },
      available: true,
    },
    take: 4,
  });

  return (
    <StoreLayout>
      <section className="mx-auto max-w-7xl px-6 py-20">
        <ProductDetails product={product} />

        <RelatedProducts products={relatedProducts} />
      </section>
    </StoreLayout>
  );
}