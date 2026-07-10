import Image from "next/image";

interface Props {
  product: any;
  quantity: number;
}

export default function OrderSummary({
  product,
  quantity,
}: Props) {
  return (
    <div className="rounded-3xl bg-stone-100 p-8">

      <h2 className="mb-6 text-2xl font-bold">
        ملخص الطلب
      </h2>

      <div className="mb-6 overflow-hidden rounded-2xl">

        <Image
          src={product.image || "/placeholder.png"}
          alt={product.name}
          width={500}
          height={350}
          className="h-60 w-full object-cover"
        />

      </div>

      <div className="space-y-5">

        <div className="flex justify-between">
          <span>المنتج</span>

          <span className="font-semibold">
            {product.name}
          </span>
        </div>

        <div className="flex justify-between">
          <span>سعر القطعة</span>

          <span>
            {product.price} دج
          </span>
        </div>

        <div className="flex justify-between">
          <span>الكمية</span>

          <span>
            {quantity}
          </span>
        </div>

        <hr />

        <div className="flex justify-between text-xl font-bold">

          <span>الإجمالي</span>

          <span className="text-emerald-700">
            {product.price * quantity} دج
          </span>

        </div>

      </div>

    </div>
  );
}