import DashboardLayout from "@/components/dashboard/DashboardLayout";
import ProductsHeader from "@/components/dashboard/products/ProductsHeader";
import ProductsToolbar from "@/components/dashboard/products/ProductsToolbar";
import ProductsTable from "@/components/dashboard/products/ProductsTable";

import {
  getProducts,
  getCategories,
} from "@/actions/product.actions";

interface Props {
  searchParams: Promise<{
    search?: string;
  }>;
}

export default async function AdminProductsPage({
  searchParams,
}: Props) {
  const { search } = await searchParams;

  const products = await getProducts(search);

  const categories = await getCategories();

  return (
    <DashboardLayout>
      <ProductsHeader />

      <ProductsToolbar
        categories={categories}
      />

      <ProductsTable
        products={products}
      />
    </DashboardLayout>
  );
}