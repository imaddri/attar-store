import { Search } from "lucide-react";
import Notifications from "./Notifications";
import { LogOut } from "lucide-react";
import { logout } from "@/actions/auth.actions";
export default async function Topbar() {
  return (
    <header className="border-b bg-white px-4 py-4 sm:px-6 md:h-20 md:px-8">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <h1 className="text-xl font-bold text-zinc-800 sm:text-2xl">
          لوحة الإدارة
        </h1>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="relative w-full sm:w-64 md:w-72">
            <Search
              className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400"
              size={18}
            />

            <input
              type="text"
              placeholder="بحث..."
              className="h-11 w-full rounded-xl border border-zinc-300 pr-10 pl-4 outline-none focus:border-emerald-600"
            />
          </div>

          <div className="flex items-center justify-between gap-3 sm:justify-end">
            <Notifications />
            <form action={logout}>
              <button
                type="submit"
                className="flex items-center gap-2 rounded-xl border border-red-200 px-3 py-2.5 text-sm text-red-600 transition hover:bg-red-50 sm:px-4 sm:py-3"
              >
                <LogOut size={18} />
                <span>خروج</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </header>
  );
}