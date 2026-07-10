import Image from "next/image";

interface Props {
  order: any;
}

export default function InvoiceProducts({
  order,
}: Props) {
  return (
    <section className="mt-6">

      <h2 className="mb-6 text-2xl font-bold">
        المنتجات
      </h2>

      <div className="overflow-hidden rounded-3xl border">

        <table className="w-full">

          <thead className="bg-gradient-to-r from-emerald-700 to-emerald-500 text-white">

            <tr className="border-b transition hover:bg-emerald-50">

              <th className="p-4 text-right">
                الصورة
              </th>

              <th className="text-right">
                المنتج
              </th>

              <th className="text-center">
                الكمية
              </th>

              <th className="text-center">
                سعر الوحدة
              </th>

              <th className="text-center">
                الإجمالي
              </th>

            </tr>

          </thead>

          <tbody>

            {order.items.map((item: any) => (

              <tr
                key={item.id}
                className="border-t hover:bg-zinc-50"
              >

                <td className="p-4">

                  <Image
                    src={item.product.image}
                    alt={item.product.name}
                    width={70}
                    height={70}
                    className="rounded-xl border object-cover"
                  />

                </td>

                <td className="font-semibold">

                  {item.product.name}

                </td>

                <td className="text-center">

                  {item.quantity}

                </td>

                <td className="text-center">

                  {item.price} دج

                </td>

                <td className="text-center font-bold text-emerald-700">

                  {item.price * item.quantity} دج

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </section>
  );
}