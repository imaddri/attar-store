import { Product } from "@/types/product";
import ProductCard from "./ProductCard";

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({
  products,
}: ProductGridProps) {
  if (!products.length) {
    return (
      <div className="mt-10 rounded-3xl border border-zinc-200 bg-zinc-50 p-8 text-center text-zinc-600">
        لا توجد منتجات في هذا التصنيف حالياً.
      </div>
    );
  }

  return (
    <section className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </section>
  );
}