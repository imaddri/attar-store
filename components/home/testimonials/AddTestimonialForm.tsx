"use client";

import { useState, useTransition } from "react";
import { toast } from "sonner";
import { Star } from "lucide-react";

import { createTestimonial } from "@/actions/testimonial.actions";

export default function AddTestimonialForm() {
  const [pending, startTransition] = useTransition();

  const [rating, setRating] = useState(5);

  const [name, setName] = useState("");

  const [comment, setComment] = useState("");

  function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    startTransition(async () => {
      try {
        await createTestimonial({
          name,
          comment,
          rating,
        });

        toast.success(
          "شكراً لك، سيتم مراجعة تقييمك قبل نشره."
        );

        setName("");
        setComment("");
        setRating(5);
      } catch {
        toast.error("حدث خطأ");
      }
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto mt-16 max-w-2xl rounded-3xl border bg-white p-8 shadow-sm"
    >
      <h3 className="mb-6 text-center text-2xl font-bold">
        أضف تقييمك
      </h3>

      <input
        className="mb-5 w-full rounded-xl border p-4"
        placeholder="الاسم"
        value={name}
        onChange={(e) =>
          setName(e.target.value)
        }
        required
      />

      <textarea
        className="mb-6 w-full rounded-xl border p-4"
        rows={5}
        placeholder="اكتب رأيك..."
        value={comment}
        onChange={(e) =>
          setComment(e.target.value)
        }
        required
      />

      <div className="mb-8 flex justify-center gap-2">
        {[1, 2, 3, 4, 5].map((value) => (
          <button
            key={value}
            type="button"
            onClick={() => setRating(value)}
          >
            <Star
              className={`h-8 w-8 ${
                value <= rating
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-zinc-300"
              }`}
            />
          </button>
        ))}
      </div>

      <button
        disabled={pending}
        className="w-full rounded-xl bg-emerald-600 py-4 font-semibold text-white"
      >
        {pending
          ? "جارٍ الإرسال..."
          : "إرسال التقييم"}
      </button>
    </form>
  );
}