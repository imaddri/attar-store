import {
  Boxes,
  FolderTree,
  Package,
  ShoppingCart,
} from "lucide-react";

import StatCard from "./StatCard";

interface Props {
  products: number;
  orders: number;
  categories: number;
  stock: number;
}

export default function StatsGrid({
  products,
  orders,
  categories,
  stock,
}: Props) {
  return (
    <section className="mb-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      <StatCard
        title="عدد المنتجات"
        value={products}
        color="bg-emerald-100 text-emerald-700"
        icon={<Package size={28} />}
      />

      <StatCard
        title="الطلبات"
        value={orders}
        color="bg-blue-100 text-blue-700"
        icon={<ShoppingCart size={28} />}
      />

      <StatCard
        title="التصنيفات"
        value={categories}
        color="bg-orange-100 text-orange-700"
        icon={<FolderTree size={28} />}
      />

      <StatCard
        title="إجمالي المخزون"
        value={stock}
        color="bg-purple-100 text-purple-700"
        icon={<Boxes size={28} />}
      />

    </section>
  );
}