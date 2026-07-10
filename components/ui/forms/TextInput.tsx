import React from "react";

interface Props {
  label: string;
  placeholder?: string;
  type?: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export default function TextInput({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
}: Props) {
  return (
    <div>
      <label className="mb-2 block font-medium">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="h-12 w-full rounded-2xl border border-zinc-300 px-4 outline-none transition focus:border-emerald-600"
      />
    </div>
  );
}