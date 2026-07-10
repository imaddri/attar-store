import Link from "next/link";
import { ReactNode } from "react";

interface Props {
  href: string;
  icon: ReactNode;
  title: string;
}

export default function NavigationItem({
  href,
  icon,
  title,
}: Props) {
  return (
    <Link
      href={href}
      className="flex items-center gap-3 rounded-xl px-4 py-3 text-zinc-300 transition hover:bg-emerald-600 hover:text-white"
    >
      {icon}
      <span>{title}</span>
    </Link>
  );
}