"use client";

import ProductForm from "./ProductForm";

interface Props {
  open: boolean;
  onClose: () => void;

  categories: {
    id: string;
    name: string;
    slug: string;
  }[];
}

export default function AddProductDialog({
  open,
  onClose,
  categories,
}: Props) {
  if (!open) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-6"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl bg-white p-8 shadow-2xl"
      >
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-3xl font-bold">
            إضافة منتج جديد
          </h2>

          <button
            onClick={onClose}
            className="text-3xl transition hover:text-red-600"
          >
            ×
          </button>
        </div>

        <ProductForm
          categories={categories}
          onSuccess={onClose}
        />
      </div>
    </div>
  );
}