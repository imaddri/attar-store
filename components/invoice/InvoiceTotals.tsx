interface Props {
  order: any;
}

export default function InvoiceTotals({
  order,
}: Props) {
  const delivery = 500;

  const subtotal = order.items.reduce(
    (sum: number, item: any) =>
      sum + item.price * item.quantity,
    0
  );

  const total = subtotal + delivery;

  return (
    <section className="mt-6flex justify-end">

      <div className="w-full max-w-md rounded-3xl border bg-zinc-50 p-8 shadow-sm">

        <h2 className="mb-6 text-2xl font-bold">
          ملخص الفاتورة
        </h2>

        <div className="space-y-4">

          <div className="flex justify-between">

            <span>إجمالي المنتجات</span>

            <span className="font-bold">
              {subtotal} دج
            </span>

          </div>

          <div className="flex justify-between">

            <span>رسوم التوصيل</span>

            <span className="font-bold">
              {delivery} دج
            </span>

          </div>

          <hr />

          <div className="flex justify-between text-3xl font-black text-emerald-600">

            <span>الإجمالي النهائي</span>

            <span>{total} دج</span>

          </div>

        </div>

      </div>

    </section>
  );
}