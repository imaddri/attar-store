import {
  Brain,
  TrendingUp,
  Truck,
  BadgePercent,
  Sparkles,
} from "lucide-react";

export default function SmartInsights() {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-sm">

      <div className="mb-8 flex items-center justify-between">

        <div>
          <h2 className="text-2xl font-bold">
            التحليلات الذكية
          </h2>

          <p className="mt-2 text-sm text-zinc-500">
            توصيات النظام لتحسين الأرباح
          </p>
        </div>

        <div className="flex items-center gap-2 rounded-2xl bg-indigo-100 px-4 py-2 text-indigo-700">
          <Brain size={18} />
          AI
        </div>

      </div>

      <div className="space-y-5">

        <div className="flex items-start gap-4 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">

          <TrendingUp className="mt-1 text-emerald-600" />

          <div>
            <h3 className="font-bold">
              أعلى ربح هذا الأسبوع
            </h3>

            <p className="mt-1 text-sm text-zinc-600">
              عسل السدر يحقق أعلى هامش ربح بنسبة
              <span className="font-bold text-emerald-600">
                {" "}41%
              </span>
            </p>
          </div>

        </div>

        <div className="flex items-start gap-4 rounded-2xl border border-orange-200 bg-orange-50 p-5">

          <Truck className="mt-1 text-orange-500" />

          <div>
            <h3 className="font-bold">
              أفضل مورد
            </h3>

            <p className="mt-1 text-sm text-zinc-600">
              مؤسسة البركة توفر زيت الزيتون بأفضل سعر
              مقارنة ببقية الموردين.
            </p>
          </div>

        </div>

        <div className="flex items-start gap-4 rounded-2xl border border-blue-200 bg-blue-50 p-5">

          <BadgePercent className="mt-1 text-blue-600" />

          <div>
            <h3 className="font-bold">
              فرصة لعمل عرض
            </h3>

            <p className="mt-1 text-sm text-zinc-600">
              يمكن تقديم خصم
              <span className="font-bold text-blue-600">
                {" "}15%
              </span>
              على الزعتر مع الحفاظ على هامش ربح جيد.
            </p>
          </div>

        </div>

        <div className="flex items-start gap-4 rounded-2xl border border-purple-200 bg-purple-50 p-5">

          <Sparkles className="mt-1 text-purple-600" />

          <div>
            <h3 className="font-bold">
              توصية ذكية
            </h3>

            <p className="mt-1 text-sm text-zinc-600">
              يوصي النظام بزيادة كمية شراء العسل
              قبل موسم الشتاء بسبب ارتفاع الطلب المتوقع.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}