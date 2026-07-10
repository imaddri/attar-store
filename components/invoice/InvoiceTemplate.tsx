"use client";

import { useRef } from "react";

import InvoiceHeader from "./InvoiceHeader";
import InvoiceCustomer from "./InvoiceCustomer";
import InvoiceOrder from "./InvoiceOrder";
import InvoiceProducts from "./InvoiceProducts";
import InvoiceTotals from "./InvoiceTotals";
import InvoiceFooter from "./InvoiceFooter";
import PrintInvoiceButton from "./PrintInvoiceButton";

interface Props {
  order: any;
}

export default function InvoiceTemplate({
  order,
}: Props) {
  const invoiceRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative">

      {/* العلامة المائية */}
      <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center opacity-[0.04]">

        <img
          src="/logo.png"
          alt=""
          className="w-[550px]"
        />

      </div>

      <div
        id="invoice"
        ref={invoiceRef}
        className="relative z-10 mx-auto max-w-5xl rounded-3xl bg-white p-6 shadow-2xl"
      >

        <InvoiceHeader order={order} />

        <div className="mt-6 grid gap-5 lg:grid-cols-2">

          <InvoiceCustomer order={order} />

          <InvoiceOrder order={order} />

        </div>

        <InvoiceProducts order={order} />

        <InvoiceTotals order={order} />

        <InvoiceFooter />

      </div>

      <div className="mt-10 flex justify-center">

        <PrintInvoiceButton invoiceRef={invoiceRef} />

      </div>

    </div>
  );
}