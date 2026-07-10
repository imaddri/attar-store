import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Receipt,
} from "lucide-react";

import { getOrderStatus } from "@/lib/orderStatus";

interface Props {
  order: any;
}

export default function InvoiceHeader({
  order,
}: Props) {
  const status = getOrderStatus(order.status);

  return (
    <header className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-700 to-emerald-500 p-6 text-white">

      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10" />
      <div className="absolute -bottom-24 left-0 h-72 w-72 rounded-full bg-white/5" />

      <div className="relative flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">

        <div className="flex items-center gap-6">

          <div className="rounded-3xl bg-white p-4 shadow-xl">

            <Image
              src="/logo.svg"
              alt="الشعار"
              width={100}
              height={100}
            />

          </div>

          <div>

            <h1 className="text-3xl font-black">
              عطارة البركة
            </h1>

            <p className="mt-2 text-lg text-emerald-100">
              منتجات طبيعية 100%
            </p>

            <div className="mt-6 space-y-2 text-sm">

              <div className="flex items-center gap-2">

                <Phone size={17} />

                 0664940684

              </div>

              <div className="flex items-center gap-2">

                <Mail size={17} />

                info@attar.com

              </div>

              <div className="flex items-center gap-2">

                <MapPin size={17} />

                الوادي-الجزائر

              </div>

            </div>

          </div>

        </div>

        <div className="rounded-3xl bg-white p-8 text-zinc-800 shadow-xl">

          <div className="flex items-center gap-3">

            <Receipt
              className="text-emerald-600"
              size={30}
            />

            <div>

              <p className="text-sm text-zinc-500">
                رقم الفاتورة
              </p>

              <h2 className="text-2xl font-black">
                INV-2026-{order.id.slice(-5).toUpperCase()}
              </h2>

            </div>

          </div>

          <div className="mt-6">

            <p className="text-sm text-zinc-500">
              تاريخ الطلب
            </p>

            <p className="font-semibold">
              {new Date(order.createdAt).toLocaleDateString("ar-DZ")}
            </p>

          </div>

          <div className="mt-6">

            <span
              className={`rounded-full px-4 py-2 font-bold ${status.color}`}
            >
              {status.text}
            </span>

          </div>

        </div>

      </div>

    </header>
  );
}