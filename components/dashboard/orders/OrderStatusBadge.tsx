interface Props {
  status: string;
}

export default function OrderStatusBadge({
  status,
}: Props) {
  switch (status) {
    case "PENDING":
      return (
        <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm font-semibold text-yellow-700">
          🟡 طلب جديد
        </span>
      );

    case "PROCESSING":
      return (
        <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
          🔵 قيد المعالجة
        </span>
      );

    case "DELIVERED":
      return (
        <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-700">
          🟢 تم التسليم
        </span>
      );

    case "CANCELLED":
      return (
        <span className="rounded-full bg-red-100 px-3 py-1 text-sm font-semibold text-red-700">
          🔴 ملغي
        </span>
      );

    default:
      return (
        <span className="rounded-full bg-zinc-100 px-3 py-1 text-sm">
          {status}
        </span>
      );
  }
}