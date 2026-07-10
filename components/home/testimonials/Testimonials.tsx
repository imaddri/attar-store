import { getTestimonials } from "@/actions/testimonial.actions";
import TestimonialCard from "./TestimonialCard";
import AddTestimonialForm from "./AddTestimonialForm";
export default async function Testimonials() {
  const testimonials = await getTestimonials();

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
            آراء العملاء
          </span>

          <h2 className="mt-6 text-4xl font-bold">
            ماذا يقول عملاؤنا؟
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-zinc-500">
            نفخر بثقة عملائنا ونسعى دائمًا لتقديم أفضل المنتجات الطبيعية.
          </p>
        </div>

        {testimonials.length === 0 ? (
          <p className="text-center text-zinc-500">
            لا توجد تقييمات بعد.
          </p>
        ) : (
          <div className="grid gap-8 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
              />
            ))}
          </div>
        )}
        <AddTestimonialForm />
      </div>
    </section>
  );
}