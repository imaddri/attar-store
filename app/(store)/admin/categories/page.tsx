import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { prisma } from "@/lib/prisma";

export default async function CategoriesPage() {
  const categories = await prisma.category.findMany({
    include: {
      products: true,
    },
    orderBy: {
      name: "asc",
    },
  });

  return (
    <DashboardLayout>
      <div className="rounded-3xl bg-white p-8 shadow">

        <h1 className="mb-8 text-3xl font-bold">
          إدارة التصنيفات
        </h1>

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead className="bg-zinc-100">

              <tr>

                <th className="p-4 text-right">
                  التصنيف
                </th>

                <th className="text-right">
                  عدد المنتجات
                </th>

              </tr>

            </thead>

            <tbody>

              {categories.map((category) => (

                <tr
                  key={category.id}
                  className="border-t hover:bg-zinc-50"
                >

                  <td className="p-4 font-medium">
                    {category.name}
                  </td>

                  <td>
                    {category.products.length}
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