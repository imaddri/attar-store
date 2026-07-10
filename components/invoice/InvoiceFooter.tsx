import {
  HeartHandshake,
  Phone,
  Globe,
} from "lucide-react";

export default function InvoiceFooter() {
  return (
    <footer className="mt-16 rounded-3xl bg-zinc-100 p-10">

<h3 className="text-center text-2xl font-bold">

شكراً لتعاملكم معنا 🌿

</h3>

<p className="mt-4 text-center text-zinc-600">

نسعى دائماً لتقديم أفضل المنتجات الطبيعية بأعلى جودة.

</p>

<div className="mt-8 flex justify-center gap-10">

<span>📞 0664940684</span>

<span>📍 الوادي-الجزائر</span>

<span>🌐 attar-store.com</span>

</div>

<div className="mt-8 border-t pt-4 text-center text-sm text-zinc-500">

جميع الحقوق محفوظة © عطارة البركة

</div>

</footer>
  );
}