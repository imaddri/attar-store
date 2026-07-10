export default function ImageUploader() {
  return (

    <div>

      <label className="mb-2 block font-medium">
        صورة المنتج
      </label>

      <input
        type="file"
        accept="image/*"
        className="w-full rounded-xl border p-3"
      />

    </div>

  );
}