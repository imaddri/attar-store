import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Product } from "@/types/product";

import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";
import ProductPrice from "./ProductPrice";
import ProductActions from "./ProductActions";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({
  product,
}: ProductCardProps) {
  return (
    <Link href={`/products/${product.id}`}>

      <Card className="group overflow-hidden rounded-3xl border-0 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer">

        <ProductImage
          image={product.image}
          name={product.name}
        />

        <CardContent className="space-y-5 p-6">

          <ProductInfo
            category={product.category?.name ?? "غير مصنف"}
            name={product.name}
            description={product.description}
          />

          <ProductPrice
            price={product.price}
          />

          <ProductActions />

        </CardContent>

      </Card>

    </Link>
  );
}