import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <Image
        src="/logo.svg"
        alt="عطارة عدائكة"
        width={60}
        height={60}
        priority
      />

      <div className="flex flex-col">
        <span className="text-xl font-bold text-zinc-900">
          عطارة عدائكة
        </span>

        <span className="text-xs text-zinc-500">
          جودة طبيعية بأفضل الأسعار
        </span>
      </div>
    </div>
  );
}