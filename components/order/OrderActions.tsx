"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import {
  Check,
  Truck,
  Trash2,
  FileText,
} from "lucide-react";

import {
  confirmOrder,
  deliverOrder,
  deleteOrder,
} from "@/actions/order.actions";

interface Props {
  order: any;
}

export default function OrderActions({
  order,
}: Props) {
  const [pending, startTransition] = useTransition();
  const router = useRouter();

  function handleConfirm() {
    startTransition(async () => {
      try {
        await confirmOrder(order.id);

        toast.success("تم تأكيد الطلب");

        router.refresh();
      } catch {
        toast.error("حدث خطأ أثناء تأكيد الطلب");
      }
    });
  }

  function handleDeliver() {
    startTransition(async () => {
      try {
        await deliverOrder(order.id);

        toast.success("تم تسليم الطلب");

        router.refresh();
      } catch {
        toast.error("حدث خطأ أثناء تحديث الطلب");
      }
    });
  }

  function handleDelete() {
    if (!window.confirm("هل تريد حذف الطلب؟")) return;

    startTransition(async () => {
      try {
        await deleteOrder(order.id);

        toast.success("تم حذف الطلب");

        router.refresh();
      } catch {
        toast.error("حدث خطأ أثناء حذف الطلب");
      }
    });
  }

  function handleInvoice() {
    window.open(`/invoice/${order.id}`, "_blank");
  }

  return (
    <div className="flex items-center gap-2">

      {order.status === "PENDING" && (
        <button
          onClick={handleConfirm}
          disabled={pending}
          className="rounded-lg bg-blue-100 p-2 text-blue-600 transition hover:bg-blue-200 disabled:opacity-50"
          title="تأكيد الطلب"
        >
          <Check size={18} />
        </button>
      )}

      {order.status !== "DELIVERED" && (
        <button
          onClick={handleDeliver}
          disabled={pending}
          className="rounded-lg bg-emerald-100 p-2 text-emerald-600 transition hover:bg-emerald-200 disabled:opacity-50"
          title="تسليم الطلب"
        >
          <Truck size={18} />
        </button>
      )}

      <button
        onClick={handleInvoice}
        className="rounded-lg bg-amber-100 p-2 text-amber-600 transition hover:bg-amber-200"
        title="عرض الفاتورة"
      >
        <FileText size={18} />
      </button>

      <button
        onClick={handleDelete}
        disabled={pending}
        className="rounded-lg bg-red-100 p-2 text-red-600 transition hover:bg-red-200 disabled:opacity-50"
        title="حذف الطلب"
      >
        <Trash2 size={18} />
      </button>

    </div>
  );
}