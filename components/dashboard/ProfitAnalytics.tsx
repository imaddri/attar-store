import {
  TrendingUp,
  Wallet,
  Package,
  Target,
  Plus,
  Truck,
} from "lucide-react";

export default function ProfitAnalytics() {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-sm">

      <div className="mb-8 flex items-center justify-between">

        <div>
          <h2 className="text-2xl font-bold">
            تحليل الأرباح
          </h2>

          <p className="mt-2 text-sm text-zinc-500">
            ملخص أداء المتجر لهذا الشهر
          </p>
        </div>

        <div className="flex items-center gap-3">

          <button className="flex items-center gap-2 rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold transition hover:bg-zinc-100">
            <Truck size={18} />
            إضافة مورد
          </button>

          <button className="flex items-center gap-2 rounded-xl bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-700">
            <Plus size={18} />
            إضافة مصاريف
          </button>

          <div className="rounded-2xl bg-emerald-100 px-4 py-2 text-sm font-bold text-emerald-700">
            +12%
          </div>

        </div>

      </div>

      <div className="grid gap-5 md:grid-cols-2">

        <div className="rounded-2xl border p-5">
          <Wallet className="mb-3 text-emerald-600" />

          <p className="text-sm text-zinc-500">
            الإيرادات
          </p>

          <h3 className="mt-2 text-3xl font-bold">
            245,000 دج
          </h3>
        </div>

        <div className="rounded-2xl border p-5">
          <Package className="mb-3 text-orange-500" />

          <p className="text-sm text-zinc-500">
            تكلفة البضائع
          </p>

          <h3 className="mt-2 text-3xl font-bold">
            162,000 دج
          </h3>
        </div>

        <div className="rounded-2xl border p-5">
          <TrendingUp className="mb-3 text-blue-600" />

          <p className="text-sm text-zinc-500">
            صافي الربح
          </p>

          <h3 className="mt-2 text-3xl font-bold text-emerald-600">
            83,000 دج
          </h3>
        </div>

        <div className="rounded-2xl border p-5">
          <Target className="mb-3 text-purple-600" />

          <p className="text-sm text-zinc-500">
            هامش الربح
          </p>

          <h3 className="mt-2 text-3xl font-bold">
            %34
          </h3>
        </div>

      </div>

      <div className="mt-8">

        <div className="mb-2 flex justify-between text-sm">

          <span>تحقيق الهدف الشهري</span>

          <span>78%</span>

        </div>

        <div className="h-4 overflow-hidden rounded-full bg-zinc-200">

          <div className="h-full w-[78%] rounded-full bg-emerald-600" />

        </div>

      </div>

      <div className="mt-8 rounded-2xl border p-5">

        <Package className="mb-3 text-red-500" />

        <p className="text-sm text-zinc-500">
          إجمالي المصاريف
        </p>

        <h3 className="mt-2 text-3xl font-bold text-red-600">
          54,500 دج
        </h3>

        <div className="mt-4 grid gap-2 text-sm text-zinc-600">

          <div className="flex justify-between">
            <span>👨‍💼 رواتب العمال</span>
            <span>25,000 دج</span>
          </div>

          <div className="flex justify-between">
            <span>🚚 التوصيل</span>
            <span>9,500 دج</span>
          </div>

          <div className="flex justify-between">
            <span>⚡ الكهرباء</span>
            <span>7,000 دج</span>
          </div>

          <div className="flex justify-between">
            <span>🏪 تجهيزات المحل</span>
            <span>13,000 دج</span>
          </div>

        </div>

      </div>

    </div>
  );
}