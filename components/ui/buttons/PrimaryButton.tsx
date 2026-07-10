import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PrimaryButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export default function PrimaryButton({
  children,
  className,
  onClick,
  disabled,
  type = "button",
}: PrimaryButtonProps) {
  return (
    <Button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "h-12 rounded-2xl bg-emerald-600 px-8 text-base font-semibold text-white shadow-md transition-all duration-300 hover:bg-emerald-700 hover:scale-[1.02] active:scale-95",
        className
      )}
    >
      {children}
    </Button>
  );
}