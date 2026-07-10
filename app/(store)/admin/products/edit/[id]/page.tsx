import { notFound } from "next/navigation";

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import ProductForm from "@/components/dashboard/products/ProductForm";
import { prisma } from "@/lib/prisma";
import { getCategories } from "@/actions/product.actions";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function EditProductPage({
  params,
}: Props) {
  const { id } = await params;

  const product = await prisma.product.findUnique({
    where: {
      id,
    },
  });

  if (!product) {
    notFound();
  }

  const categories = await getCategories();

  return (
    <DashboardLayout>
      <div className="mx-auto max-w-4xl rounded-3xl bg-white p-8 shadow">

        <h1 className="mb-8 text-3xl font-bold">
          تعديل المنتج
        </h1>

        <ProductForm
          categories={categories}
          product={product}
        />

      </div>
    </DashboardLayout>
  );
}