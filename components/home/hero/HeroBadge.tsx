import { Leaf } from "lucide-react";

export default function HeroBadge() {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700 shadow-sm">
      <Leaf className="h-4 w-4" />
      منتجات طبيعية 100%
    </div>
  );
}