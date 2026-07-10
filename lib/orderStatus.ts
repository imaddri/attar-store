export function getOrderStatus(status: string) {
  switch (status) {
    case "PENDING":
      return {
        text: "قيد الانتظار",
        color: "bg-yellow-100 text-yellow-700",
      };

    case "CONFIRMED":
      return {
        text: "تم التأكيد",
        color: "bg-blue-100 text-blue-700",
      };

    case "DELIVERED":
      return {
        text: "تم التسليم",
        color: "bg-emerald-100 text-emerald-700",
      };

    default:
      return {
        text: status,
        color: "bg-zinc-100 text-zinc-700",
      };
  }
}