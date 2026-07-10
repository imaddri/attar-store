import Link from "next/link";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-zinc-900 py-16 text-white"
    >
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-4">

        <div>

          <h3 className="text-2xl font-bold">
           عطارة عدائكة
          </h3>

          <p className="mt-4 text-zinc-400">
            أفضل المنتجات الطبيعية بجودة عالية وأسعار مناسبة.
          </p>

        </div>

        <div>

          <h4 className="mb-4 font-bold">
            روابط سريعة
          </h4>

          <ul className="space-y-3">

            <li>
              <Link href="/" className="hover:text-emerald-400">
                الرئيسية
              </Link>
            </li>

            <li>
              <Link href="/products" className="hover:text-emerald-400">
                المنتجات
              </Link>
            </li>

            <li>
              <Link href="/order" className="hover:text-emerald-400">
                الطلب
              </Link>
            </li>

          </ul>

        </div>

        <div>

          <h4 className="mb-4 font-bold">
            تواصل معنا
          </h4>

          <p>📞 +213 6 64840694</p>

          <p className="mt-2">
            ✉️ contact@attar-store.com
          </p>

          <p className="mt-2">
            📍حي الرمال الوادي , El Oued, Algeria, 39001
          </p>

        </div>

        <div>

          <h4 className="mb-4 font-bold">
            ساعات العمل
          </h4>

          <p>السبت - الخميس</p>

          <p className="mt-2">
            08:00 - 20:00
          </p>

        </div>

      </div>

      <div className="mt-12 border-t border-zinc-700 pt-8 text-center text-zinc-400">
        © 2026 عطارة عدائكة - جميع الحقوق محفوظة.
      </div>

    </footer>
  );
}