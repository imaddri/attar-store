"use client";

import { useState } from "react";
import Link from "next/link";

import { Product } from "@/types/product";

import ProductGallery from "./ProductGallery";
import ProductDescription from "./ProductDescription";
import ProductQuantity from "./ProductQuantity";
import PrimaryButton from "@/components/ui/buttons/PrimaryButton";

interface Props {
  product: Product;
}

export default function ProductDetails({
  product,
}: Props) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="grid gap-16 lg:grid-cols-2">

      <ProductGallery
        image={product.image}
        name={product.name}
      />

      <div>

        <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-700">
          {product.category?.name ?? "غير مصنف"}
        </span>

        <h1 className="mt-5 text-5xl font-bold text-zinc-900">
          {product.name}
        </h1>

        <p className="mt-6 text-4xl font-bold text-emerald-700">
          {product.price} دج
        </p>

        <div className="mt-10">
          <ProductDescription
            description={product.description}
          />
        </div>

        <div className="mt-10">
          <ProductQuantity
            quantity={quantity}
            setQuantity={setQuantity}
          />
        </div>

        <div className="mt-10">

          <Link
            href={`/order?product=${product.id}&quantity=${quantity}`}
          >
            <PrimaryButton className="w-full">
              اطلب الآن
            </PrimaryButton>
          </Link>

        </div>

      </div>

    </div>
  );
}