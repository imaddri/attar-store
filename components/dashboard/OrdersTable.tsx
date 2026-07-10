const orders = [
  {
    id: 1001,
    customer: "محمد أحمد",
    total: "3500 دج",
    status: "جديد",
  },
  {
    id: 1002,
    customer: "سارة علي",
    total: "1800 دج",
    status: "قيد المعالجة",
  },
  {
    id: 1003,
    customer: "أمين يوسف",
    total: "6200 دج",
    status: "مكتمل",
  },
];

export default function OrdersTable() {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm">

      <h2 className="mb-6 text-2xl font-bold">
        آخر الطلبات
      </h2>

      <table className="w-full">

        <thead>

          <tr className="border-b">

            <th className="py-3 text-right">
              الرقم
            </th>

            <th className="text-right">
              العميل
            </th>

            <th className="text-right">
              الإجمالي
            </th>

            <th className="text-right">
              الحالة
            </th>

          </tr>

        </thead>

        <tbody>

          {orders.map((order) => (

            <tr key={order.id} className="border-b">

              <td className="py-4">
                #{order.id}
              </td>

              <td>{order.customer}</td>

              <td>{order.total}</td>

              <td>{order.status}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}