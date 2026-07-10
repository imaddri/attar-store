interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({
  value,
  onChange,
}: SearchBarProps) {
  return (
    <div className="relative w-full">
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="ابحث عن منتج..."
        className="h-12 w-full rounded-2xl border border-zinc-300 px-4"
      />
    </div>
  );
}