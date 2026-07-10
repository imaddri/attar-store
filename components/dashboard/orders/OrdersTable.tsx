import OrderActions from "./OrderActions";
import OrderStatusBadge from "./OrderStatusBadge";

interface Props {
  title: string;
  orders: any[];
}

export default function OrdersTable({
  title,
  orders,
}: Props) {
  return (
    <div className="mb-10 overflow-hidden rounded-3xl border bg-white shadow-sm">

      <div className="border-b bg-zinc-50 px-6 py-4">
        <h2 className="text-xl font-bold">
          {title} ({orders.length})
        </h2>
      </div>

      <div className="overflow-hidden rounded-b-3xl bg-zinc-50/60">
        <div className="overflow-x-auto overflow-y-hidden">
          <div className="min-w-[900px]">
            <table className="w-full table-fixed border-collapse bg-zinc-50/60">
              <thead className="bg-zinc-100">
                <tr>
                  <th className="w-[16%] p-4 text-right align-top whitespace-nowrap bg-transparent">
                    العميل
                  </th>
                  <th className="w-[13%] p-4 text-right align-top whitespace-nowrap">
                    الهاتف
                  </th>
                  <th className="w-[13%] p-4 text-right align-top whitespace-nowrap">
                    الولاية
                  </th>
                  <th className="w-[10%] p-4 text-right align-top whitespace-nowrap">
                    البلدية
                  </th>
                  <th className="w-[16%] p-4 text-right align-top whitespace-nowrap">
                    المنتج
                  </th>
                  <th className="w-[8%] p-4 text-right align-top whitespace-nowrap">
                    الكمية
                  </th>
                  <th className="w-[10%] p-4 text-right align-top whitespace-nowrap">
                    السعر
                  </th>
                  <th className="w-[10%] p-4 text-right align-top whitespace-nowrap">
                    الحالة
                  </th>
                  <th className="w-[10%] p-4 text-right align-top whitespace-nowrap">
                    التاريخ
                  </th>
                  <th className="w-[12%] p-4 text-right align-top whitespace-nowrap">
                    العمليات
                  </th>
                </tr>
              </thead>
              <tbody>
                {orders.length === 0 ? (
                  <tr>
                    <td colSpan={10} className="py-8 text-center text-zinc-500">
                      لا توجد طلبات
                    </td>
                  </tr>
                ) : (
                  orders.map((order: any) => (
                    <tr
                      key={order.id}
                      className="border-t bg-zinc-50/60 transition hover:bg-zinc-100"
                    >
                      <td className="bg-transparent px-5 py-4 align-top font-medium whitespace-nowrap leading-6">
                        {order.customerName}
                      </td>
                      <td className="bg-transparent px-5 py-4 align-top whitespace-nowrap leading-6">
                        {order.phone}
                      </td>
                      <td className="bg-transparent px-5 py-4 align-top whitespace-nowrap leading-6">
                        {order.state}
                      </td>
                      <td className="bg-transparent px-5 py-4 align-top whitespace-nowrap leading-6">
                        {order.municipality}
                      </td>
                      <td className="bg-transparent px-5 py-4 align-top whitespace-normal break-words leading-6">
                        {order.items[0]?.product.name ?? "-"}
                      </td>
                      <td className="bg-transparent px-5 py-4 align-top whitespace-normal break-words leading-6 text-center">
                        {order.items[0]?.quantity ?? 0}
                      </td>
                      <td className="bg-transparent px-5 py-4 align-top whitespace-normal break-words leading-6">
                        {order.total} دج
                      </td>
                      <td className="bg-transparent px-5 py-4 align-top whitespace-normal break-words leading-6">
                        <div className="flex justify-end">
                          <OrderStatusBadge status={order.status} />
                        </div>
                      </td>
                      <td className="bg-transparent px-5 py-4 align-top whitespace-nowrap leading-6">
                        {new Date(order.createdAt).toLocaleDateString("ar-DZ")}
                      </td>
                      <td className="bg-transparent px-5 py-4 align-top whitespace-normal break-words leading-6">
                        <OrderActions order={order} />
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

    </div>
  );
}