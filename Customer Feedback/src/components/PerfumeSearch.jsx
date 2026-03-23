import { useState } from "react";
import { useForm } from "../context/FormContext";
import { perfumes } from "../data/perfume";

const PerfumeSearch = () => {
  const { formData, updateField } = useForm();
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);

  const selected = formData.selectedPerfume;

  const suggestions = perfumes.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (perfume) => {
    updateField("selectedPerfume", perfume);
    updateField("noteTags", []);
    setQuery("");
    setOpen(false);
  };

  const handleDeselect = () => {
    updateField("selectedPerfume", null);
    updateField("noteTags", []);
    setQuery("");
  };

  // ── Selected state — shows pill instead of input ──
  if (selected) {
    return (
      <div className="flex items-center justify-between w-full bg-blush border border-terra rounded-lg px-4 py-3">
        <div className="flex items-center gap-3">
          {/* dot */}
          <div className="w-2 h-2 rounded-full bg-terra flex-shrink-0" />
          <div>
            <p className="text-sm font-medium text-bark leading-tight">
              {selected.name}
            </p>
            <p className="text-xs text-stone mt-0.5">{selected.type}</p>
          </div>
        </div>
        {/* deselect button */}
        <button
          type="button"
          onClick={handleDeselect}
          className="text-stone hover:text-bark transition-colors duration-150
                     focus:outline-none ml-3 flex-shrink-0"
          aria-label="Remove selection"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
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
    );
  }

  // ── Search state — shows input + dropdown ──
  return (
    <div className="relative">
      <input
        type="text"
        value={query}
        onChange={(e) => { setQuery(e.target.value); setOpen(true); }}
        onFocus={() => setOpen(true)}
        onBlur={() => setTimeout(() => setOpen(false), 150)}
        placeholder="Search your perfume..."
        className="w-full border border-linen rounded-lg px-4 py-3
                   text-bark placeholder-dust bg-white text-sm
                   focus:outline-none focus:border-terra transition-colors"
      />

      {open && query && suggestions.length > 0 && (
        <ul className="absolute z-10 w-full bg-white border border-linen
                       rounded-lg mt-1 overflow-hidden">
          {suggestions.map((p) => (
            <li
              key={p.id}
              onMouseDown={() => handleSelect(p)}
              className="flex items-center justify-between px-4 py-3 text-sm
                         text-bark hover:bg-blush cursor-pointer
                         border-b border-linen last:border-0 transition-colors"
            >
              <span className="font-medium">{p.name}</span>
              <span className="text-stone text-xs">{p.type}</span>
            </li>
          ))}
        </ul>
      )}

      {open && query && suggestions.length === 0 && (
        <div className="absolute z-10 w-full bg-white border border-linen
                        rounded-lg mt-1 px-4 py-3 text-sm text-stone">
          No perfume found
        </div>
      )}
    </div>
  );
};

export default PerfumeSearch;