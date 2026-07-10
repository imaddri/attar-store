import { categories } from "@/lib/data/categories";
import CategoryCard from "./CategoryCard";

export default function Categories() {
  return (
    <section
      id="categories"
      className="bg-white py-20"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-zinc-900">
            تصفح حسب التصنيف
          </h2>

          <p className="mt-4 text-lg text-zinc-500">
            اختر الفئة التي تناسب احتياجاتك من المنتجات الطبيعية.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
            />
          ))}
        </div>

      </div>
    </section>
  );
}