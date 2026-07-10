// lib/pdf/generateInvoice.ts

import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

interface InvoiceItem {
  name: string;
  quantity: number;
  price: number;
}

interface InvoiceData {
  id: string;
  customerName: string;
  phone: string;
  state: string;
  municipality: string;
  address: string;
  total: number;
  status: string;
  createdAt: string | Date;
  items: InvoiceItem[];
}

export function generateInvoice(data: InvoiceData) {
  const doc = new jsPDF();

  // ==========================
  // Header
  // ==========================

  doc.setFillColor(5, 150, 105);
  doc.rect(0, 0, 210, 30, "F");

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(24);
  doc.text("ATTAR STORE", 105, 16, {
    align: "center",
  });

  doc.setFontSize(11);
  doc.text("Natural Products", 105, 24, {
    align: "center",
  });

  // ==========================
  // Invoice
  // ==========================

  doc.setTextColor(0);

  doc.setFontSize(20);
  doc.text("INVOICE", 14, 45);

  doc.setFontSize(11);

  doc.text(`Invoice #: ${data.id}`, 14, 55);

  doc.text(
    `Date: ${new Date(
      data.createdAt
    ).toLocaleDateString()}`,
    14,
    62
  );

  doc.text(`Status: ${data.status}`, 14, 69);

  // ==========================
  // Customer
  // ==========================

  doc.setDrawColor(220);

  doc.roundedRect(14, 80, 182, 42, 3, 3);

  doc.setFontSize(13);

  doc.text("Customer Information", 18, 90);

  doc.setFontSize(11);

  doc.text(
    `Name: ${data.customerName}`,
    18,
    99
  );

  doc.text(
    `Phone: ${data.phone}`,
    18,
    106
  );

  doc.text(
    `Address: ${data.state} - ${data.municipality}`,
    18,
    113
  );

  // ==========================
  // Products Table
  // ==========================

  autoTable(doc, {
    startY: 132,

    head: [["Product", "Qty", "Price"]],

    body: data.items.map((item) => [
      item.name,
      item.quantity,
      `${item.price} DA`,
    ]),

    theme: "grid",

    headStyles: {
      fillColor: [5, 150, 105],
    },
  });

  const finalY =
    (doc as any).lastAutoTable.finalY + 15;

  // ==========================
  // Totals
  // ==========================

  doc.setFontSize(13);

  doc.text(
    `Subtotal: ${data.total} DA`,
    130,
    finalY
  );

  doc.text(
    `Shipping: Free`,
    130,
    finalY + 10
  );

  doc.setFontSize(16);

  doc.setTextColor(5, 150, 105);

  doc.text(
    `Total: ${data.total} DA`,
    130,
    finalY + 25
  );

  // ==========================
  // Footer
  // ==========================

  doc.setTextColor(120);

  doc.setFontSize(11);

  doc.text(
    "Thank you for shopping with us",
    105,
    280,
    {
      align: "center",
    }
  );

  doc.save(`Invoice-${data.id}.pdf`);
}