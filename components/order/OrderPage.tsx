import OrderForm from "./OrderForm";
import OrderSummary from "./OrderSummary";

interface Props {
  product: any;
  quantity: number;
}

export default function OrderPage({
  product,
  quantity,
}: Props) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">

      <h1 className="mb-12 text-center text-5xl font-bold">
        إتمام الطلب
      </h1>

      <div className="grid gap-12 lg:grid-cols-2">

        <OrderForm
          productId={product.id}
          quantity={quantity}
        />

        <OrderSummary
          product={product}
          quantity={quantity}
        />

      </div>

    </section>
  );
}