interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function CategoryFilter({
  value,
  onChange,
}: Props) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="h-12 rounded-2xl border px-4"
    >
      <option value="all">كل التصنيفات</option>
      <option value="الأعشاب">الأعشاب</option>
      <option value="التوابل">التوابل</option>
      <option value="الزيوت الطبيعية">الزيوت الطبيعية</option>
      <option value="العسل">العسل</option>
      <option value="المكسرات">المكسرات</option>
      <option value="مستحضرات تجميل">مستحضرات تجميل</option>
    </select>
  );
}