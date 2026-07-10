import DashboardLayout from "@/components/dashboard/DashboardLayout";

export default function SettingsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6 rounded-3xl bg-white p-6 shadow-sm sm:p-8">
        <div>
          <h1 className="text-3xl font-bold text-zinc-900">الإعدادات</h1>
          <p className="mt-2 text-sm text-zinc-500">
            إدارة أساسية لبيانات المتجر والواجهة والإشعارات.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          <section className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
            <h2 className="text-lg font-semibold text-zinc-900">معلومات المتجر</h2>
            <div className="mt-4 space-y-2 text-sm text-zinc-600">
              <p>اسم المتجر: عطارة عدائكة</p>
              <p>البريد الإلكتروني: support@attar-store.com</p>
              <p>الهاتف: 0555 123 456</p>
              <p>العنوان: الجزائر - عنابة</p>
            </div>
          </section>

          <section className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
            <h2 className="text-lg font-semibold text-zinc-900">إعدادات العرض</h2>
            <div className="mt-4 space-y-3 text-sm text-zinc-600">
              <label className="flex items-center justify-between rounded-xl bg-white px-3 py-2">
                <span>إظهار التصنيفات في الصفحة الرئيسية</span>
                <input type="checkbox" defaultChecked className="h-4 w-4" />
              </label>
              <label className="flex items-center justify-between rounded-xl bg-white px-3 py-2">
                <span>إظهار التقييمات</span>
                <input type="checkbox" defaultChecked className="h-4 w-4" />
              </label>
              <label className="flex items-center justify-between rounded-xl bg-white px-3 py-2">
                <span>إظهار قسم العروض الخاصة</span>
                <input type="checkbox" defaultChecked className="h-4 w-4" />
              </label>
            </div>
          </section>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          <section className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
            <h2 className="text-lg font-semibold text-zinc-900">الإشعارات</h2>
            <div className="mt-4 space-y-3 text-sm text-zinc-600">
              <label className="flex items-center justify-between rounded-xl bg-white px-3 py-2">
                <span>تنبيه عند طلب جديد</span>
                <input type="checkbox" defaultChecked className="h-4 w-4" />
              </label>
              <label className="flex items-center justify-between rounded-xl bg-white px-3 py-2">
                <span>تنبيه عند انخفاض المخزون</span>
                <input type="checkbox" defaultChecked className="h-4 w-4" />
              </label>
              <label className="flex items-center justify-between rounded-xl bg-white px-3 py-2">
                <span>تنبيه عند إكمال الطلب</span>
                <input type="checkbox" defaultChecked className="h-4 w-4" />
              </label>
            </div>
          </section>

          <section className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
            <h2 className="text-lg font-semibold text-zinc-900">الأمان والنسخ</h2>
            <div className="mt-4 space-y-3 text-sm text-zinc-600">
              <label className="flex items-center justify-between rounded-xl bg-white px-3 py-2">
                <span>تفعيل المصادقة الثنائية</span>
                <input type="checkbox" className="h-4 w-4" />
              </label>
              <label className="flex items-center justify-between rounded-xl bg-white px-3 py-2">
                <span>تحديث كلمة المرور الشهرية</span>
                <input type="checkbox" className="h-4 w-4" />
              </label>
              <button className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100">
                إنشاء نسخة احتياطية
              </button>
            </div>
          </section>
        </div>

        <section className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
          <h2 className="text-lg font-semibold text-zinc-900">إجراءات سريعة</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            <button className="rounded-xl bg-emerald-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-emerald-700">
              حفظ التغييرات
            </button>
            <button className="rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100">
              إعادة تعيين
            </button>
            <button className="rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100">
              تجديد البيانات
            </button>
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
}