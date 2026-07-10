"use client";

import { useState } from "react";

import OrdersTable from "./OrdersTable";

interface Props {
  pendingOrders: any[];
  processingOrders: any[];
  deliveredOrders: any[];
}

export default function OrdersTabs({
  pendingOrders,
  processingOrders,
  deliveredOrders,
}: Props) {
  const [tab, setTab] = useState<
    "pending" | "processing" | "delivered"
  >("pending");

  return (
    <>
      <div className="mb-8 flex flex-wrap gap-3">

        <button
          onClick={() => setTab("pending")}
          className={`rounded-xl px-5 py-3 font-semibold transition ${
            tab === "pending"
              ? "bg-yellow-500 text-white"
              : "bg-yellow-100 text-yellow-700 hover:bg-yellow-200"
          }`}
        >
          🟡 الطلبات الجديدة ({pendingOrders.length})
        </button>

        <button
          onClick={() => setTab("processing")}
          className={`rounded-xl px-5 py-3 font-semibold transition ${
            tab === "processing"
              ? "bg-blue-600 text-white"
              : "bg-blue-100 text-blue-700 hover:bg-blue-200"
          }`}
        >
          🔵 قيد المعالجة ({processingOrders.length})
        </button>

        <button
          onClick={() => setTab("delivered")}
          className={`rounded-xl px-5 py-3 font-semibold transition ${
            tab === "delivered"
              ? "bg-emerald-600 text-white"
              : "bg-emerald-100 text-emerald-700 hover:bg-emerald-200"
          }`}
        >
          🟢 تم التسليم ({deliveredOrders.length})
        </button>

      </div>

      {tab === "pending" && (
        <OrdersTable
          title="الطلبات الجديدة"
          orders={pendingOrders}
        />
      )}

      {tab === "processing" && (
        <OrdersTable
          title="الطلبات قيد المعالجة"
          orders={processingOrders}
        />
      )}

      {tab === "delivered" && (
        <OrdersTable
          title="الطلبات التي تم تسليمها"
          orders={deliveredOrders}
        />
      )}
    </>
  );
}