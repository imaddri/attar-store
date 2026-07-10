"use client";

import Image from "next/image";
import { CldUploadWidget } from "next-cloudinary";

interface Props {
  value: string;
  onChange: (url: string) => void;
}

export default function ImageUpload({
  value,
  onChange,
}: Props) {
  return (
    <div className="space-y-4">
      <CldUploadWidget
        uploadPreset="attar-store"
        onSuccess={(result) => {
          const info = result?.info as { secure_url?: string };

          if (info?.secure_url) {
            onChange(info.secure_url);
          }
        }}
      >
        {({ open }) => (
          <button
            type="button"
            onClick={() => open()}
            className="rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white transition hover:bg-emerald-700"
          >
            📷 اختر صورة من الجهاز
          </button>
        )}
      </CldUploadWidget>

      {value && (
        <div className="overflow-hidden rounded-2xl border">
          <Image
            src={value}
            alt="صورة المنتج"
            width={500}
            height={300}
            className="h-64 w-full object-cover"
          />
        </div>
      )}
    </div>
  );
}