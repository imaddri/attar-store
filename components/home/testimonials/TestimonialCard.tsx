import { Star } from "lucide-react";

interface TestimonialCardProps {
  testimonial: {
    id: string;
    name: string;
    comment: string;
    rating: number;
  };
}

export default function TestimonialCard({
  testimonial,
}: TestimonialCardProps) {
  return (
    <div className="group rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="mb-5 flex">
        {Array.from({ length: testimonial.rating }).map((_, index) => (
          <Star
            key={index}
            className="h-5 w-5 fill-yellow-400 text-yellow-400"
          />
        ))}
      </div>

      <p className="mb-8 leading-8 text-zinc-600">
        "{testimonial.comment}"
      </p>

      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-600 text-xl font-bold text-white">
          {testimonial.name.charAt(0)}
        </div>

        <div>
          <h4 className="font-bold text-zinc-900">
            {testimonial.name}
          </h4>

          <p className="text-sm text-zinc-500">
            عميل موثق
          </p>
        </div>
      </div>
    </div>
  );
}