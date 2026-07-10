import {
  User,
  Phone,
  MapPin,
  Home,
} from "lucide-react";

interface Props {
  order: any;
}

export default function InvoiceCustomer({
  order,
}: Props) {
  return (
    <section className="rounded-3xl border p-8">

      <h2 className="mb-6 text-2xl font-bold">
        بيانات العميل
      </h2>

      <div className="space-y-5">

        <div className="flex items-center gap-3">

          <User className="text-emerald-600" />

          {order.customerName}

        </div>

        <div className="flex items-center gap-3">

          <Phone className="text-emerald-600" />

          {order.phone}

        </div>

        <div className="flex items-center gap-3">

          <MapPin className="text-emerald-600" />

          {order.state}

          -

          {order.municipality}

        </div>

        <div className="flex items-center gap-3">

          <Home className="text-emerald-600" />

          {order.address}

        </div>

      </div>

    </section>
  );
}