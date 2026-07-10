import PrimaryButton from "@/components/ui/buttons/PrimaryButton";
import { ShoppingCart } from "lucide-react";

export default function ProductActions() {
  return (
    <PrimaryButton className="w-full">
      <ShoppingCart className="me-2 h-5 w-5" />
      أضف إلى السلة
    </PrimaryButton>
  );
}