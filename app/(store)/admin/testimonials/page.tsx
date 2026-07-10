import DashboardLayout from "@/components/dashboard/DashboardLayout";
import {
  approveTestimonial,
  deleteTestimonial,
  getPendingTestimonials,
} from "@/actions/testimonial.actions";

export default async function TestimonialsPage() {
  const testimonials = await getPendingTestimonials();

  return (
    <DashboardLayout>
      <h1 className="mb-8 text-3xl font-bold">
        التقييمات المعلقة
      </h1>

      {testimonials.length === 0 ? (
        <div className="rounded-2xl bg-white p-8 text-center shadow">
          لا توجد تقييمات جديدة.
        </div>
      ) : (
        <div className="space-y-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="rounded-2xl bg-white p-6 shadow"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold">
                    {testimonial.name}
                  </h2>

                  <p className="mt-2 text-yellow-500">
                    {"⭐".repeat(testimonial.rating)}
                  </p>

                  <p className="mt-4 text-zinc-600">
                    {testimonial.comment}
                  </p>
                </div>

                <div className="flex gap-3">
                  <form
                    action={async () => {
                      "use server";
                      await approveTestimonial(
                        testimonial.id
                      );
                    }}
                  >
                    <button className="rounded-xl bg-emerald-600 px-5 py-2 text-white">
                      قبول
                    </button>
                  </form>

                  <form
                    action={async () => {
                      "use server";
                      await deleteTestimonial(
                        testimonial.id
                      );
                    }}
                  >
                    <button className="rounded-xl bg-red-600 px-5 py-2 text-white">
                      حذف
                    </button>
                  </form>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </DashboardLayout>
  );
}