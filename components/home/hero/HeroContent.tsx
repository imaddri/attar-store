import Link from "next/link";
import PrimaryButton from "@/components/ui/buttons/PrimaryButton";

export default function HeroContent() {
  return (
    <div className="max-w-xl space-y-8">

      <h1 className="text-5xl font-extrabold leading-tight text-zinc-900 lg:text-7xl">
        جودة الطبيعة
        <br />
        في متناول يديك
      </h1>

      <p className="text-lg leading-8 text-zinc-600">
        اكتشف مجموعة متنوعة من الأعشاب والتوابل والزيوت الطبيعية والعسل
        والمكسرات، مع إمكانية إضافة المزيد من المنتجات مستقبلاً من لوحة الإدارة.
      </p>

      <div className="flex flex-wrap gap-4">

        <Link href="/products">
          <PrimaryButton>
            تسوق الآن
          </PrimaryButton>
        </Link>

        <Link href="/#featured-products">
          <button className="rounded-2xl border border-zinc-300 px-8 py-3 font-semibold transition hover:bg-zinc-100">
            استعرض المنتجات
          </button>
        </Link>

      </div>

    </div>
  );
}