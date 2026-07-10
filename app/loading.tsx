import Logo from "@/components/shared/Logo";

export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white">

      <div className="animate-pulse">
        <Logo />
      </div>

      <div className="mt-10 h-14 w-14 animate-spin rounded-full border-4 border-emerald-200 border-t-emerald-600" />

      <p className="mt-6 text-lg font-medium text-zinc-600">
        جاري التحميل...
      </p>

    </div>
  );
}