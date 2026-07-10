interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function SortProducts({
  value,
  onChange,
}: Props) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="h-12 rounded-2xl border px-4"
    >
      <option value="latest">الأحدث</option>
      <option value="low">السعر الأقل</option>
      <option value="high">السعر الأعلى</option>
      <option value="name">الاسم</option>
    </select>
  );
}