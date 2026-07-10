"use client";

interface Props {
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
}

export default function ProductQuantity({
  quantity,
  setQuantity,
}: Props) {
  return (
    <div className="flex items-center gap-5">

      <button
        type="button"
        onClick={() =>
          quantity > 1 && setQuantity(quantity - 1)
        }
        className="h-12 w-12 rounded-xl border"
      >
        -
      </button>

      <span className="text-xl font-bold">
        {quantity}
      </span>

      <button
        type="button"
        onClick={() => setQuantity(quantity + 1)}
        className="h-12 w-12 rounded-xl border"
      >
        +
      </button>

    </div>
  );
}