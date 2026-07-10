import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { prisma } from "@/lib/prisma";

export default async function InventoryPage() {
  const products = await prisma.product.findMany({
    orderBy: {
      stock: "asc",
    },
  });

  return (
    <DashboardLayout>
      <div className="rounded-3xl bg-white p-8 shadow">

        <h1 className="mb-8 text-3xl font-bold">
          إدارة المخزون
        </h1>

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead className="bg-zinc-100">
              <tr>

                <th className="p-4 text-right">
                  المنتج
                </th>

                <th className="text-right">
                  المخزون
                </th>

                <th className="text-right">
                  الحالة
                </th>

              </tr>
            </thead>

            <tbody>

              {products.map((product) => (

                <tr
                  key={product.id}
                  className="border-t hover:bg-zinc-50"
                >

                  <td className="p-4 font-medium">
                    {product.name}
                  </td>

                  <td>
                    {product.stock}
                  </td>

                  <td>

                    {product.stock === 0 ? (

                      <span className="rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-700">
                        نفد المخزون
                      </span>

                    ) : product.stock <= 10 ? (

                      <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm font-medium text-yellow-700">
                        مخزون منخفض
                      </span>

                    ) : (

                      <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700">
                        متوفر
                      </span>

                    )}

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>
    </DashboardLayout>
  );
}