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
    <aside className="flex w-72 flex-col bg-zinc-900 text-white">

      <div className="border-b border-zinc-800 p-8">

        <h2 className="text-2xl font-bold text-emerald-400">
          Attar Store
        </h2>

        <p className="mt-2 text-sm text-zinc-400">
          لوحة الإدارة
        </p>

      </div>

      <nav className="flex-1 space-y-2 p-4">

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