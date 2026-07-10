"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { createOrder } from "@/actions/order.actions";
import algeria from "@/lib/data/algeria.json";

interface Props {
  productId: string;
  quantity: number;
}

export default function OrderForm({
  productId,
  quantity,
}: Props) {
  const router = useRouter();

  const [pending, startTransition] = useTransition();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    state: "",
    city: "",
    address: "",
    notes: "",
  });

  const states = Array.from(
  new Map(
    algeria.map((item) => [
      item.wilaya_code,
      {
        code: item.wilaya_code,
        name: item.wilaya_name,
      },
    ])
  ).values()
);

const municipalities = algeria.filter(
  (item) => item.wilaya_name === form.state
);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    startTransition(async () => {
      try {
        await createOrder({
          productId,
          quantity,

          customerName: form.name,
          phone: form.phone,
          state: form.state,
          municipality: form.city,
          address: form.address,
          notes: form.notes,
        });

        toast.success("تم إرسال الطلب بنجاح");

        router.push("/");

        router.refresh();
      } catch (error) {
        console.error(error);

        toast.error("حدث خطأ أثناء إرسال الطلب");
      }
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      <input
        name="name"
        placeholder="الاسم الكامل"
        value={form.name}
        onChange={handleChange}
        className="w-full rounded-xl border p-4"
        required
      />

      <input
        name="phone"
        placeholder="رقم الهاتف"
        value={form.phone}
        onChange={handleChange}
        className="w-full rounded-xl border p-4"
        required
      />

      <select
        name="state"
        value={form.state}
        onChange={(e) =>
          setForm({
            ...form,
            state: e.target.value,
            city: "",
          })
        }
        className="w-full rounded-xl border p-4"
        required
      >
        <option value="">
          اختر الولاية
        </option>

        {states.map((state) => (
  <option
    key={state.code}
    value={state.name}
  >
    {state.code} - {state.name}
  </option>
))}
      </select>

      <select
        name="city"
        value={form.city}
        onChange={handleChange}
        disabled={!form.state}
        className="w-full rounded-xl border p-4 disabled:bg-zinc-100"
        required
      >
        <option value="">
          اختر البلدية
        </option>

        {municipalities.map((city) => (
  <option
    key={city.id}
    value={city.commune_name}
  >
    {city.commune_name}
  </option>
))}
      </select>

      <textarea
        name="address"
        placeholder="العنوان"
        rows={4}
        value={form.address}
        onChange={handleChange}
        className="w-full rounded-xl border p-4"
        required
      />

      <textarea
        name="notes"
        placeholder="ملاحظات (اختياري)"
        rows={4}
        value={form.notes}
        onChange={handleChange}
        className="w-full rounded-xl border p-4"
      />

      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-xl bg-emerald-600 py-4 font-semibold text-white transition hover:bg-emerald-700 disabled:opacity-50"
      >
        {pending ? "جارٍ إرسال الطلب..." : "إرسال الطلب"}
      </button>
    </form>
  );
}