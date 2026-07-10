export const dynamic = "force-dynamic";

import StoreLayout from "@/components/layout/StoreLayout";
import Hero from "@/components/home/hero/Hero";
import Categories from "@/components/home/categories/Categories";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Features from "@/components/home/features/Features";
import Testimonials from "@/components/home/testimonials/Testimonials";

import { prisma } from "@/lib/prisma";

export default async function Home() {
  const featuredProducts = await prisma.product.findMany({
    where: {
      available: true,
    },
    include: {
      category: true,
    },
    orderBy: {
      createdAt: "desc",
    },
    take: 8,
  });

  return (
    <StoreLayout>
      <Hero />

      <Categories />

      <FeaturedProducts products={featuredProducts} />

      <Features />

      <Testimonials />
    </StoreLayout>
  );
}