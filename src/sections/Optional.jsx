import { useForm } from "../context/FormContext";
import { useRef } from "react";

const platforms = [
  { key: "instagram", prefix: "IG", placeholder: "instagram" },
  { key: "facebook", prefix: "FB", placeholder: "facebook" },
];

const Optional = () => {
  const { formData, updateField } = useForm();

  const inputRef = useRef(null);

  const handleFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) {
      alert("File too large. Max size is 5MB.");
      return;
    }
    updateField("photo", file);
  };

  const handleRemove = () => {
    updateField("photo", null);
    inputRef.current.value = "";
  };

  return (
    <section className="flex flex-col gap-[0.5rem]">
      <span className="text-stone font-sans text-sm font-light">
        UPLOAD A PHOTO <span className="text-dust text-sm">(optional)</span>
      </span>
      {formData.photo ? (
        <div className="flex items-center justify-between bg-blush border border-terra rounded-lg px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-md bg-terra/20 flex items-center justify-center flex-shrink-0">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#d4896a"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium text-bark leading-tight truncate max-w-[180px]">
                {formData.photo.name}
              </p>
              <p className="text-xs text-stone mt-0.5">
                {(formData.photo.size / 1024).toFixed(0)} KB
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={handleRemove}
            className="text-stone hover:text-bark transition-colors focus:outline-none ml-3 flex-shrink-0"
            aria-label="Remove photo"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
      ) : (
        <div
          onClick={() => inputRef.current.click()}
          className="w-full border-2 border-dashed border-linen rounded-lg py-6
                 flex flex-col items-center gap-2 cursor-pointer
                 hover:border-terra transition-colors duration-150 bg-white"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#d4896a"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="16 16 12 12 8 16" />
            <line x1="12" y1="12" x2="12" y2="21" />
            <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" />
          </svg>
          <p className="text-sm text-bark font-medium">
            Tap to upload your photo
          </p>
          <p className="text-xs text-dust">JPG or PNG · max 5MB</p>
          <input
            ref={inputRef}
            type="file"
            accept="image/jpeg,image/png"
            onChange={handleFile}
            className="hidden"
          />
        </div>
      )}
      <div className="flex items-start gap-3 bg-blush rounded-lg px-4 py-3 mb-4">
        <span className="text-terra text-sm mt-0.5 flex-shrink-0">✦</span>
        <p className="text-xs text-terra-dark leading-relaxed">
          <span className="font-medium">Review of the Month</span> — share your
          handle and we may feature your photo and repost your experience on our
          page!
        </p>
      </div>
      <span className="text-stone font-sans text-sm font-light">
        SOCIAL HANDEL <span className="text-dust text-sm">(optional)</span>
      </span>
      <div className="grid grid-cols-2 gap-3">
        {platforms.map(({ key, prefix, placeholder }) => (
          <div
            key={key}
            className={`flex items-center border border-linen rounded-lg
              overflow-hidden bg-white focus-within:border-terra transition-colors
              ${key === "twitter" ? "col-span-2 md:col-span-1" : "col-span-1"}`}
          >
            <span
              className="px-3 py-3 text-xs font-medium text-terra bg-parchment
                             border-r border-linen flex-shrink-0"
            >
              {prefix} @
            </span>
            <input
              type="text"
              value={formData[key]}
              onChange={(e) => updateField(key, e.target.value)}
              placeholder={placeholder}
              className="flex-1 px-3 py-3 text-sm text-bark placeholder-dust
                         bg-transparent focus:outline-none min-w-0"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Optional;
