import ProductGrid from "@/components/products/ProductGrid";

interface Props {
  products: any[];
}

export default function FeaturedProducts({
  products,
}: Props) {
  if (!products.length) {
    return (
      <section
        id="featured-products"
        className="mx-auto max-w-7xl px-6 py-20"
      >
        <div className="text-center">
          <h2 className="text-4xl font-bold text-zinc-900">
            المنتجات
          </h2>

          <p className="mt-4 text-zinc-500">
            لا توجد منتجات حالياً.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="featured-products"
      className="mx-auto max-w-7xl px-6 py-20"
    >
      <div className="mb-10 text-center">
        <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
          منتجات مختارة
        </span>

        <h2 className="mt-5 text-4xl font-bold text-zinc-900">
          أحدث المنتجات
        </h2>

        <p className="mt-4 text-lg text-zinc-500">
          اكتشف أحدث منتجات متجر العطار.
        </p>
      </div>

      <ProductGrid products={products} />
    </section>
  );
}