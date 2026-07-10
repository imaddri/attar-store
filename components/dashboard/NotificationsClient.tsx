"use client";

import { Bell } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface Product {
  id: string;
  name: string;
  stock: number;
}

interface Props {
  products: Product[];
}

export default function NotificationsClient({
  products,
}: Props) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (
        ref.current &&
        !ref.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClick);

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClick
      );
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="rounded-xl border p-3 hover:bg-zinc-100"
      >
        <div className="relative">
          <Bell size={20} />

          {products.length > 0 && (
            <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white">
              {products.length}
            </span>
          )}
        </div>
      </button>

      {open && (
        <div className="absolute left-0 z-50 mt-3 w-96 rounded-2xl border bg-white p-4 shadow-2xl">
          <h3 className="mb-4 text-lg font-bold">
            التنبيهات
          </h3>

          {products.length === 0 ? (
            <p className="text-sm text-zinc-500">
              لا توجد تنبيهات.
            </p>
          ) : (
            <div className="space-y-3">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="rounded-xl border border-red-200 bg-red-50 p-3"
                >
                  <p className="font-semibold text-red-700">
                    ⚠️ {product.name}
                  </p>

                  <p className="mt-1 text-sm text-zinc-600">
                    المتبقي:
                    <span className="font-bold text-red-600">
                      {" "}
                      {product.stock}
                    </span>
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}