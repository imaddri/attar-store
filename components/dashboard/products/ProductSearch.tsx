"use client";

import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProductSearch() {
  const router = useRouter();

  const searchParams = useSearchParams();

  const [search, setSearch] = useState(
    searchParams.get("search") ?? ""
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      const params = new URLSearchParams(
        searchParams.toString()
      );

      if (search) {
        params.set("search", search);
      } else {
        params.delete("search");
      }

      router.replace(
        `/admin/products?${params.toString()}`
      );
    }, 300);

    return () => clearTimeout(timer);
  }, [search, router, searchParams]);

  return (
    <div className="relative w-80">
      <Search
        size={18}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400"
      />

      <input
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        placeholder="ابحث عن منتج..."
        className="h-12 w-full rounded-2xl border border-zinc-300 pr-10 pl-4 outline-none focus:border-emerald-600"
      />
    </div>
  );
}