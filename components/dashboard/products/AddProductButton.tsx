"use client";

import { useState } from "react";
import AddProductDialog from "./AddProductDialog";

interface Props {
  categories: {
    id: string;
    name: string;
    slug: string;
  }[];
}

export default function AddProductButton({
  categories,
}: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="rounded-2xl bg-emerald-600 px-6 py-3 font-semibold text-white transition hover:bg-emerald-700"
      >
        + إضافة منتج
      </button>

      <AddProductDialog
        open={open}
        onClose={() => setOpen(false)}
        categories={categories}
      />
    </>
  );
}