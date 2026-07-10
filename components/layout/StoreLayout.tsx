import { ReactNode } from "react";

import Navbar from "./Navbar";
import Newsletter from "./Newsletter";
import Footer from "./Footer";

interface StoreLayoutProps {
  children: ReactNode;
}

export default function StoreLayout({
  children,
}: StoreLayoutProps) {
  return (
    <>
      <Navbar />

      <main className="min-h-screen">
        {children}
      </main>

      <Newsletter />

      <Footer />
    </>
  );
}