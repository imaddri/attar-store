export default function StatusSelect() {
  return (

    <div>

      <label className="mb-2 block font-medium">
        الحالة
      </label>

      <select className="h-12 w-full rounded-xl border px-4">

        <option>متوفر</option>

        <option>غير متوفر</option>

      </select>

    </div>

  );
}