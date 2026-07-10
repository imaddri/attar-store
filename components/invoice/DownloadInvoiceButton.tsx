"use client";

import { Download } from "lucide-react";

export default function DownloadInvoiceButton() {
  async function handleDownload() {
    const html2pdf = (await import("html2pdf.js")).default;

    const element = document.getElementById("invoice");

    if (!element) return;

    html2pdf()
      .set({
        margin: 0.5,
        filename: "فاتورة.pdf",
        image: {
          type: "jpeg",
          quality: 1,
        },
        html2canvas: {
          scale: 2,
        },
        jsPDF: {
          unit: "in",
          format: "a4",
          orientation: "portrait",
        },
      })
      .from(element)
      .save();
  }

  return (
    <button
      onClick={handleDownload}
      className="flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white transition hover:bg-emerald-700"
    >
      <Download size={20} />
      تحميل PDF
    </button>
  );
}