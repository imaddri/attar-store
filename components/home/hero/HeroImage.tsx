import Image from "next/image";
import { Droplets, Wheat } from "lucide-react";

export default function HeroImage() {
  return (
    <div className="relative flex items-center justify-center">

      {/* الخلفية */}
<div className="absolute h-[280px] w-[280px] rounded-full bg-gradient-to-br from-emerald-100 via-green-50 to-amber-50 blur-3xl sm:h-[400px] sm:w-[400px] lg:h-[550px] lg:w-[550px]" />
      {/* الصورة الرئيسية */}
      <div className="relative z-10 overflow-hidden rounded-[40px] bg-white p-4 shadow-2xl">

        <Image
  src="/hero/hero.jpg"
  alt="عطارة عدائكة"
  width={500}
  height={500}
  className="h-auto w-72 rounded-3xl object-cover sm:w-96 lg:w-[500px]"
  priority
/>

      </div>

      {/* البطاقة الأولى */}
      <div className="absolute top-8 right-0 z-20 rounded-2xl bg-white p-4 shadow-xl">

        <Droplets className="mx-auto h-8 w-8 text-emerald-600" />

        <p className="mt-2 text-sm font-semibold">
          زيوت طبيعية
        </p>

      </div>

      {/* البطاقة الثانية */}
      <div className="absolute bottom-10 left-0 z-20 rounded-2xl bg-white p-4 shadow-xl">

        <Wheat className="mx-auto h-8 w-8 text-amber-600" />

        <p className="mt-2 text-sm font-semibold">
          أعشاب مختارة
        </p>

      </div>

    </div>
  );
}