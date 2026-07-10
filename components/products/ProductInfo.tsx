interface ProductInfoProps {
  category: string;
  name: string;
  description: string;
}

export default function ProductInfo({
  category,
  name,
  description,
}: ProductInfoProps) {
  return (
    <div className="space-y-2">
      <span className="text-sm font-medium text-emerald-600">
        {category}
      </span>

      <h3 className="text-xl font-bold text-zinc-900">
        {name}
      </h3>

      <p className="line-clamp-2 text-sm text-zinc-500">
        {description}
      </p>
    </div>
  );
}