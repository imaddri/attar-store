"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { toast } from "sonner";
import { Pencil, Trash2 } from "lucide-react";

import { deleteProduct } from "@/actions/product.actions";

interface Props {
  id: string;
}

export default function ProductActions({
  id,
}: Props) {
  const [pending, startTransition] = useTransition();
  const router = useRouter();

  function handleDelete() {
    const confirmed = window.confirm(
      "هل أنت متأكد من حذف هذا المنتج؟"
    );

    if (!confirmed) return;

    startTransition(async () => {
      try {
        await deleteProduct(id);

        router.refresh();
        toast.success("تم حذف المنتج بنجاح");
      } catch (error) {
        console.error(error);

        toast.error("حدث خطأ أثناء حذف المنتج");
      }
    });
  }

  return (
    <div className="flex gap-2">

      <Link
        href={`/admin/products/edit/${id}`}
        className="rounded-lg bg-blue-100 p-2 text-blue-600 transition hover:bg-blue-200"
        title="تعديل"
      >
        <Pencil size={18} />
      </Link>

      <button
        onClick={handleDelete}
        disabled={pending}
        className="rounded-lg bg-red-100 p-2 text-red-600 transition hover:bg-red-200 disabled:opacity-50"
        title="حذف"
      >
        <Trash2 size={18} />
      </button>

    </div>
  );
}