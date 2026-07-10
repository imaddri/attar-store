import {
  Calendar,
  Package,
  CircleDollarSign,
} from "lucide-react";

interface Props {
  order: any;
}

export default function InvoiceOrder({
  order,
}: Props) {
  return (
    <section className="rounded-3xl border p-8">

      <h2 className="mb-6 text-2xl font-bold">
        معلومات الطلب
      </h2>

      <div className="space-y-5">

        <div className="flex items-center gap-3">

          <Package className="text-emerald-600" />

          رقم الطلب

          #{order.id.slice(0,8)}

        </div>

        <div className="flex items-center gap-3">

          <Calendar className="text-emerald-600" />

          {new Date(order.createdAt).toLocaleDateString(
            "ar-DZ"
          )}

        </div>

        <div className="flex items-center gap-3">

          <CircleDollarSign className="text-emerald-600" />

          الدفع عند الاستلام

        </div>

        <div>

          <span className="rounded-full bg-emerald-100 px-5 py-2 font-bold text-emerald-700">

            {order.status}

          </span>

        </div>

      </div>

    </section>
  );
}