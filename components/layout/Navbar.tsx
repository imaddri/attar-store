"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "../shared/Logo";
import { Menu, Search, ShoppingCart, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "الرئيسية" },
    { href: "/products", label: "المنتجات" },
    { href: "/#categories", label: "التصنيفات" },
    { href: "/#contact", label: "تواصل معنا" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6">
        {/* الشعار */}
        <Logo />

        {/* روابط الموقع */}
        <nav className="hidden items-center gap-8 text-sm font-semibold lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition duration-300 hover:text-emerald-600"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* الأيقونات */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/products"
            className="rounded-xl border border-zinc-200 p-2.5 transition hover:bg-emerald-50 hover:text-emerald-600 sm:p-3"
          >
            <Search size={18} className="sm:h-5 sm:w-5" />
          </Link>

          <Link
            href="/products"
            className="rounded-xl border border-zinc-200 p-2.5 transition hover:bg-emerald-50 hover:text-emerald-600 sm:p-3"
          >
            <ShoppingCart size={18} className="sm:h-5 sm:w-5" />
          </Link>

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="rounded-xl border border-zinc-200 p-2.5 transition hover:bg-emerald-50 hover:text-emerald-600 lg:hidden sm:p-3"
            aria-label="فتح القائمة"
          >
            {isOpen ? <X size={18} className="sm:h-5 sm:w-5" /> : <Menu size={18} className="sm:h-5 sm:w-5" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="border-t border-stone-200 bg-white/95 px-4 py-4 lg:hidden sm:px-6">
          <nav className="flex flex-col gap-3 text-sm font-semibold">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-2 py-2 transition hover:bg-emerald-50 hover:text-emerald-600"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}