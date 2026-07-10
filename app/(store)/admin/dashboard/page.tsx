import DashboardLayout from "@/components/dashboard/DashboardLayout";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import QuickActions from "@/components/dashboard/QuickActions";
import StatsGrid from "@/components/dashboard/StatsGrid";
import SalesChart from "@/components/dashboard/SalesChart";
import OrdersTable from "@/components/dashboard/OrdersTable";
import ProductsTable from "@/components/dashboard/ProductsTable";
import ProfitAnalytics from "@/components/dashboard/ProfitAnalytics";
import SmartInsights from "@/components/dashboard/SmartInsights";
import { prisma } from "@/lib/prisma";

export default async function DashboardPage() {
  const [
    productsCount,
    ordersCount,
    categoriesCount,
    stock,
  ] = await Promise.all([
    prisma.product.count(),

    prisma.order.count({
  where: {
    status: "PENDING",
  },
}),

    prisma.category.count(),

    prisma.product.aggregate({
      _sum: {
        stock: true,
      },
    }),
  ]);

  return (
    <DashboardLayout>

      <DashboardHeader />

      <StatsGrid
        products={productsCount}
        orders={ordersCount}
        categories={categoriesCount}
        stock={stock._sum.stock ?? 0}
      />

      <QuickActions />

      <div className="mb-8">
        <SalesChart />
      </div>
<div className="mb-6 flex items-center gap-3 rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4">

  <span className="rounded-full bg-amber-500 px-3 py-1 text-sm font-bold text-white">
    قريبًا
  </span>

  <p className="text-sm text-zinc-700">
   سيتم قريبًا إضافة أدوات ذكية تساعدك على تحليل الأرباح، متابعة المصاريف، مقارنة الموردين، واقتراح أفضل العروض لزيادة المبيعات.
  </p>

</div>

<div className="grid gap-8 xl:grid-cols-2">

  <ProfitAnalytics />

  <SmartInsights />

</div>
      

    </DashboardLayout>
  );
}