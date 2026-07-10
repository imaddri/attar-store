"use client";

import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

interface Props {
  label: string;
  placeholder?: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export default function PasswordInput({
  label,
  placeholder,
  value,
  onChange,
}: Props) {
  const [show, setShow] = useState(false);

  return (
    <div>
      <label className="mb-2 block font-medium">
        {label}
      </label>

      <div className="relative">
        <input
          type={show ? "text" : "password"}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="h-12 w-full rounded-2xl border border-zinc-300 px-4 pr-12 outline-none transition focus:border-emerald-600"
        />

        <button
          type="button"
          onClick={() => setShow(!show)}
          className="absolute left-4 top-1/2 -translate-y-1/2"
        >
          {show ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      </div>
    </div>
  );
}