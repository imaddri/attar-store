interface ProductPriceProps {
  price: number;
}

export default function ProductPrice({
  price,
}: ProductPriceProps) {
  return (
    <div className="text-2xl font-bold text-emerald-700">
      {price} دج
    </div>
  );
}