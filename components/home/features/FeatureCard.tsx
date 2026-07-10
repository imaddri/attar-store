import { Feature } from "@/types/feature";
import {
  Leaf,
  Truck,
  ShieldCheck,
  CreditCard,
} from "lucide-react";

interface FeatureCardProps {
  feature: Feature;
}

export default function FeatureCard({
  feature,
}: FeatureCardProps) {
  const iconMap = {
    leaf: Leaf,
    truck: Truck,
    shield: ShieldCheck,
    "credit-card": CreditCard,
  };

  const Icon = iconMap[feature.icon];

  return (
    <div className="group rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-emerald-500 hover:shadow-xl">

      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600 transition-all duration-300 group-hover:bg-emerald-600 group-hover:text-white">
        <Icon className="h-8 w-8" />
      </div>

      <h3 className="mb-3 text-xl font-bold text-zinc-900">
        {feature.title}
      </h3>

      <p className="leading-7 text-zinc-500">
        {feature.description}
      </p>

    </div>
  );
}