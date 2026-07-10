"use client";

import {
  LayoutDashboard,
  Package,
  FolderTree,
  ShoppingCart,
  Boxes,
  Settings,
} from "lucide-react";

import NavigationItem from "./NavigationItem";

export default function Sidebar() {
  return (
    <aside className="w-full bg-zinc-900 text-white md:w-72 md:min-h-screen">
      <div className="border-b border-zinc-800 p-4 sm:p-6 md:p-8">
        <h2 className="text-xl font-bold text-emerald-400 sm:text-2xl">
          Attar Store
        </h2>

        <p className="mt-2 text-sm text-zinc-400">لوحة الإدارة</p>
      </div>

      <nav className="grid gap-2 p-3 sm:grid-cols-2 md:flex md:flex-1 md:flex-col md:space-y-2 md:p-4">
        <NavigationItem
          href="/admin/dashboard"
          title="لوحة التحكم"
          icon={<LayoutDashboard size={20} />}
        />

        <NavigationItem
          href="/admin/products"
          title="المنتجات"
          icon={<Package size={20} />}
        />

        <NavigationItem
          href="/admin/categories"
          title="التصنيفات"
          icon={<FolderTree size={20} />}
        />

        <NavigationItem
          href="/admin/orders"
          title="الطلبات"
          icon={<ShoppingCart size={20} />}
        />

        <NavigationItem
          href="/admin/inventory"
          title="المخزون"
          icon={<Boxes size={20} />}
        />

        <NavigationItem
          href="/admin/settings"
          title="الإعدادات"
          icon={<Settings size={20} />}
        />
      </nav>
    </aside>
  );
}