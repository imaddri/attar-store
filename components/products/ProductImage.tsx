import Image from "next/image";

interface ProductImageProps {
  image: string;
  name: string;
}

export default function ProductImage({
  image,
  name,
}: ProductImageProps) {
  return (
    <div className="relative h-56 overflow-hidden rounded-2xl bg-stone-100">
      <Image
        src={image}
        alt={name}
        fill
        className="object-cover transition duration-500 hover:scale-110"
      />
    </div>
  );
}