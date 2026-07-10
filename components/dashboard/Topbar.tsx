import { Search } from "lucide-react";
import Notifications from "./Notifications";
import { LogOut } from "lucide-react";
import { logout } from "@/actions/auth.actions";
export default async function Topbar() {

  

  return (
    <header className="flex h-20 items-center justify-between border-b bg-white px-8">

      <h1 className="text-2xl font-bold text-zinc-800">
        لوحة الإدارة
      </h1>

      <div className="flex items-center gap-4">

        <div className="relative">

          <Search
            className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400"
            size={18}
          />

          <input
            type="text"
            placeholder="بحث..."
            className="h-11 w-72 rounded-xl border border-zinc-300 pr-10 pl-4 outline-none focus:border-emerald-600"
          />

        </div>

        <Notifications />
        <form action={logout}>
  <button
    type="submit"
    className="flex items-center gap-2 rounded-xl border border-red-200 px-4 py-3 text-red-600 transition hover:bg-red-50"
  >
    <LogOut size={18} />
    <span>خروج</span>
  </button>
</form>
      </div>

    </header>
  );
}