import Link from "next/link";

export default function QuickActions() {
  return (
    <div className="mb-10 flex flex-wrap gap-4">

      <Link
        href="/admin/products"
        className="rounded-2xl bg-emerald-600 px-6 py-3 font-semibold text-white transition hover:bg-emerald-700"
      >
        + إضافة منتج
      </Link>

      <Link
        href="/admin/categories"
        className="rounded-2xl border px-6 py-3 font-semibold transition hover:bg-zinc-100"
      >
        إدارة التصنيفات
      </Link>

      <Link
  href="/admin/inventory"
  className="rounded-2xl border px-6 py-3 font-semibold transition hover:bg-zinc-100"
>
  إدارة المخزون
</Link>

      <Link
        href="/admin/orders"
        className="rounded-2xl border px-6 py-3 font-semibold transition hover:bg-zinc-100"
      >
        عرض الطلبات
      </Link>
<Link
  href="/admin/testimonials"
  className="rounded-2xl border px-6 py-3 font-semibold hover:bg-zinc-100"
>
  إدارة التقييمات
</Link>
    </div>
  );
}