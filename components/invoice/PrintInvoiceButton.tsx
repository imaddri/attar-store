"use client";

import { RefObject } from "react";
import { Printer } from "lucide-react";
import { useReactToPrint } from "react-to-print";

interface Props {
  invoiceRef: RefObject<HTMLDivElement | null>;
}

export default function PrintInvoiceButton({
  invoiceRef,
}: Props) {
  const handlePrint = useReactToPrint({
    contentRef: invoiceRef,
    documentTitle: "فاتورة الطلب",

    pageStyle: `
      @page {
        size: A4 portrait;
        margin: 8mm;
      }

      @media print {

        html,
        body {
          margin: 0 !important;
          padding: 0 !important;
          background: white !important;

          zoom: 73%;
          -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
        }

        #invoice {
          width: 100% !important;
          max-width: none !important;
          box-shadow: none !important;
          border-radius: 0 !important;
          overflow: visible !important;
        }

        img {
          max-width: 100%;
        }

        button {
          display: none !important;
        }
      }
    `,
  });

  return (
    <button
      onClick={handlePrint}
      className="flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white transition hover:bg-emerald-700"
    >
      <Printer size={20} />
      طباعة / حفظ PDF
    </button>
  );
}