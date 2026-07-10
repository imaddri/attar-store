import ProductActions from "./ProductActions";
interface Props {
  products: any[];
}

export default function ProductsTable({
  products,
}: Props) {

  return (

    <div className="overflow-hidden rounded-3xl bg-white shadow">

      <table className="w-full">

        <thead className="bg-zinc-100">

          <tr>

            <th className="p-4 text-right">
              الاسم
            </th>

            <th className="text-right">
              التصنيف
            </th>

            <th className="text-right">
              السعر
            </th>

            <th className="text-right">
              المخزون
            </th>
             <th className="text-right">
              العمليات
             </th>
          </tr>

        </thead>

        <tbody>

          {products.length === 0 ? (

            <tr>

              <td
                colSpan={4}
                className="py-12 text-center"
              >
                لا توجد منتجات
              </td>

            </tr>

          ) : (

            products.map((product) => (

              <tr
                key={product.id}
                className="border-t"
              >

                <td className="p-4">

                  {product.name}

                </td>

                <td>

                  {product.category.name}

                </td>

                <td>

                  {product.price} دج

                </td>

                <td>

                  {product.stock}

                </td>
                  <td>
  <ProductActions
    id={product.id}
  />
</td>
              </tr>

            ))

          )}

        </tbody>

      </table>

    </div>

  );

}