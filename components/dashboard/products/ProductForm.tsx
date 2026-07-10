"use client";

import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

import {
  addProduct,
  updateProduct,
} from "@/actions/product.actions";

import { productSchema } from "@/lib/validators/product";

import ImageUpload from "./ImageUpload";

type ProductSchema = z.output<typeof productSchema>;

interface Category {
  id: string;
  name: string;
  slug: string;
}

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  image: string;
  categoryId: string;
}

interface ProductFormProps {
  categories: Category[];
  product?: Product;
  onSuccess?: () => void;
}

export default function ProductForm({
  categories,
  product,
  onSuccess,
}: ProductFormProps) {
  const [pending, startTransition] = useTransition();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm<ProductSchema>({
    resolver: zodResolver(productSchema),

    defaultValues: {
      name: product?.name ?? "",
      description: product?.description ?? "",
      price: product?.price ?? 0,
      stock: product?.stock ?? 0,
      image: product?.image ?? "",
      categoryId: product?.categoryId ?? "",
    },
  });

  function onSubmit(data: ProductSchema) {
    startTransition(async () => {
      try {
        if (product) {
          await updateProduct(product.id, {
            ...data,
            price: Number(data.price),
            stock: Number(data.stock),
          });

          toast.success("تم تحديث المنتج بنجاح");

          router.push("/admin/products");
          router.refresh();
        } else {
          await addProduct({
            ...data,
            price: Number(data.price),
            stock: Number(data.stock),
            featured: false,
            available: true,
          });

          toast.success("تمت إضافة المنتج بنجاح");

          reset();
        }

        onSuccess?.();
      } catch (error) {
        console.error(error);
        toast.error("حدث خطأ أثناء الحفظ");
      }
    });
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
    >
      <div>
        <label className="mb-2 block font-medium">
          اسم المنتج
        </label>

        <input
          {...register("name")}
          className="w-full rounded-xl border p-3"
        />

        <p className="mt-1 text-sm text-red-500">
          {errors.name?.message}
        </p>
      </div>

      <div>
        <label className="mb-2 block font-medium">
          الوصف
        </label>

        <textarea
          rows={4}
          {...register("description")}
          className="w-full rounded-xl border p-3"
        />

        <p className="mt-1 text-sm text-red-500">
          {errors.description?.message}
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="mb-2 block font-medium">
            السعر
          </label>

          <input
            type="number"
            step="0.01"
            {...register("price", {
              valueAsNumber: true,
            })}
            className="w-full rounded-xl border p-3"
          />

          <p className="mt-1 text-sm text-red-500">
            {errors.price?.message}
          </p>
        </div>

        <div>
          <label className="mb-2 block font-medium">
            المخزون
          </label>

          <input
            type="number"
            {...register("stock", {
              valueAsNumber: true,
            })}
            className="w-full rounded-xl border p-3"
          />

          <p className="mt-1 text-sm text-red-500">
            {errors.stock?.message}
          </p>
        </div>
      </div>

      <div>
        <label className="mb-2 block font-medium">
          صورة المنتج
        </label>

        <ImageUpload
          value={watch("image")}
          onChange={(url) =>
            setValue("image", url, {
              shouldValidate: true,
              shouldDirty: true,
            })
          }
        />

        <p className="mt-1 text-sm text-red-500">
          {errors.image?.message}
        </p>
      </div>

      <div>
        <label className="mb-2 block font-medium">
          التصنيف
        </label>

        <select
          {...register("categoryId")}
          className="w-full rounded-xl border p-3"
        >
          <option value="">
            اختر التصنيف
          </option>

          {categories.map((category) => (
            <option
              key={category.id}
              value={category.id}
            >
              {category.name}
            </option>
          ))}
        </select>

        <p className="mt-1 text-sm text-red-500">
          {errors.categoryId?.message}
        </p>
      </div>

      <div className="flex justify-end gap-4">
        {onSuccess && (
          <button
            type="button"
            onClick={onSuccess}
            className="rounded-xl border px-6 py-3"
          >
            إلغاء
          </button>
        )}

        <button
          type="submit"
          disabled={pending}
          className="rounded-xl bg-emerald-600 px-8 py-3 font-semibold text-white hover:bg-emerald-700 disabled:opacity-50"
        >
          {pending
            ? "جاري الحفظ..."
            : product
            ? "حفظ التعديلات"
            : "حفظ المنتج"}
        </button>
      </div>
    </form>
  );
}