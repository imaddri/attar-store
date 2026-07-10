import { features } from "@/lib/data/features";
import FeatureCard from "./FeatureCard";

export default function Features() {
  return (
    <section className="bg-stone-50 py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
            لماذا نحن؟
          </span>

          <h2 className="mt-6 text-4xl font-bold text-zinc-900">
            لماذا يختارنا عملاؤنا؟
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-zinc-500">
            نقدم منتجات طبيعية مختارة بعناية مع تجربة تسوق سهلة،
            وجودة عالية، وخدمة عملاء مميزة.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              feature={feature}
            />
          ))}
        </div>

      </div>

    </section>
  );
}