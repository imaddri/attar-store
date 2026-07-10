export default function CategorySelect() {
  return (

    <div>

      <label className="mb-2 block font-medium">
        التصنيف
      </label>

      <select className="h-12 w-full rounded-xl border px-4">

        <option>الأعشاب</option>

        <option>التوابل</option>

        <option>الزيوت الطبيعية</option>

        <option>العسل</option>

        <option>المكسرات</option>

      </select>

    </div>

  );
}