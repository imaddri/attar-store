const products = [
  {
    id: 1,
    name: "عسل السدر",
    stock: 12,
    price: "2500 دج",
  },
  {
    id: 2,
    name: "زيت الزيتون",
    stock: 30,
    price: "1500 دج",
  },
  {
    id: 3,
    name: "زعتر",
    stock: 55,
    price: "350 دج",
  },
];

export default function ProductsTable() {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm">

      <h2 className="mb-6 text-2xl font-bold">
        أحدث المنتجات
      </h2>

      <table className="w-full">

        <thead>

          <tr className="border-b">

            <th className="py-3 text-right">
              المنتج
            </th>

            <th className="text-right">
              المخزون
            </th>

            <th className="text-right">
              السعر
            </th>

          </tr>

        </thead>

        <tbody>

          {products.map((product) => (

            <tr key={product.id} className="border-b">

              <td className="py-4">
                {product.name}
              </td>

              <td>
                {product.stock}
              </td>

              <td>
                {product.price}
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}