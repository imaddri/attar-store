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

  // If a category is selected via query param, resolve it to a DB category
  // by slug (case-insensitive) or name (case-insensitive). Then fetch
  // products by `categoryId` to avoid mismatches between slugs/names.
  let products;

  if (selectedCategory) {
    const slugCandidate = selectedCategory.toLowerCase();

    // try to find by slug first
    let category = await prisma.category.findFirst({
      where: {
        slug: slugCandidate,
      },
    });

    // try match by name (case-insensitive)
    if (!category) {
      category = await prisma.category.findFirst({
        where: {
          name: {
            equals: selectedCategory,
            mode: "insensitive",
          },
        },
      });
    }

    // special-case common Arabic name
    if (!category && slugCandidate === "cosmetics") {
      category = await prisma.category.findFirst({
        where: {
          name: "مستحضرات التجميل",
        },
      });
    }

    if (category) {
      products = await prisma.product.findMany({
        where: {
          available: true,
          categoryId: category.id,
        },
        include: {
          category: true,
        },
        orderBy: {
          createdAt: "desc",
        },
      });
    } else {
      products = [];
    }
  } else {
    products = await prisma.product.findMany({
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

  return (
    <StoreLayout>
      <section className="mx-auto max-w-7xl px-6 py-20">
        <ProductsHeader />

        <ProductGrid products={products} />
      </section>
    </StoreLayout>
  );
}