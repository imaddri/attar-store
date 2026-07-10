import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { getOrders } from "@/actions/order.actions";
import OrdersTabs from "@/components/dashboard/orders/OrdersTabs";

export default async function OrdersPage() {
  const orders = await getOrders();

  const pendingOrders = orders.filter(
    (order) => order.status === "PENDING"
  );

  const processingOrders = orders.filter(
    (order) => order.status === "PROCESSING"
  );

  const deliveredOrders = orders.filter(
    (order) => order.status === "DELIVERED"
  );

  return (
    <DashboardLayout>
      <div className="rounded-3xl bg-white p-8 shadow">

        <h1 className="mb-8 text-3xl font-bold">
          إدارة الطلبات
        </h1>

        <OrdersTabs
          pendingOrders={pendingOrders}
          processingOrders={processingOrders}
          deliveredOrders={deliveredOrders}
        />

      </div>
    </DashboardLayout>
  );
}