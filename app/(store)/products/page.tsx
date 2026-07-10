export const dynamic = "force-dynamic";

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

  const categoryFilters = selectedCategory
    ? [
        selectedCategory,
        selectedCategory === "cosmetics"
          ? "مستحضرات التجميل"
          : undefined,
      ].filter(Boolean) as string[]
    : [];

  const products = await prisma.product.findMany({
    where: {
      available: true,
      ...(categoryFilters.length > 0
        ? {
            category: {
              OR: [
                { slug: { in: categoryFilters } },
                { name: { in: categoryFilters } },
              ],
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