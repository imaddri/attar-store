import ProductGrid from "./ProductGrid";

interface Props {
  products: {
    id: string;
    name: string;
    slug: string;
    description: string;
    price: number;
    stock: number;
    image: string;
    featured: boolean;
    available: boolean;
    categoryId: string;
    createdAt: Date;
    updatedAt: Date;
  }[];
}

export default function RelatedProducts({
  products,
}: Props) {
  return (
    <section className="mt-24">
      <h2 className="mb-10 text-3xl font-bold">
        منتجات مشابهة
      </h2>

      <ProductGrid products={products} />
    </section>
  );
}