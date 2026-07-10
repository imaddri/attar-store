import Link from "next/link";
import { Category } from "@/types/category";
import {
  Leaf,
  CookingPot,
  Droplets,
  Beef,
  Nut,
  Sparkles,
} from "lucide-react";

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({
  category,
}: CategoryCardProps) {
  const iconMap = {
    herbs: Leaf,
    spices: CookingPot,
    oils: Droplets,
    honey: Beef,
    nuts: Nut,
    cosmetics: Sparkles,
  };

  const Icon =
    iconMap[
      category.slug as keyof typeof iconMap
    ] ?? Leaf;

  return (
    <Link href={`/products?category=${encodeURIComponent(category.slug)}`}>
      <div className="group cursor-pointer rounded-3xl border border-zinc-200 bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:border-emerald-500 hover:shadow-xl">

        <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600 transition group-hover:bg-emerald-600 group-hover:text-white">
          <Icon className="h-8 w-8" />
        </div>

        <h3 className="text-xl font-bold">
          {category.name}
        </h3>

        <p className="mt-2 text-sm leading-6 text-zinc-500">
          {category.description}
        </p>

      </div>
    </Link>
  );
}