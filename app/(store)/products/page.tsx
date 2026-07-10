import StoreLayout from "@/components/layout/StoreLayout";
import ProductsHeader from "@/components/products/ProductsHeader";
import ProductGrid from "@/components/products/ProductGrid";

import { prisma } from "@/lib/prisma";

interface Props {
  searchParams: Promise<{
    category?: string;
  }>;
}

export default async function ProductsPage({ searchParams }: Props) {
  const params = await searchParams;
  const selectedCategory =
    typeof params.category === "string"
      ? params.category
      : undefined;

  const products = await prisma.product.findMany({
    where: {
      available: true,
      ...(selectedCategory
        ? {
            category: {
              slug: selectedCategory,
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

  return (
    <StoreLayout>
      <section className="mx-auto max-w-7xl px-6 py-20">
        <ProductsHeader />

        <ProductGrid products={products} />
      </section>
    </StoreLayout>
  );
}