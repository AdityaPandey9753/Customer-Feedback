// NoteTags.jsx
import { useForm } from "../context/FormContext";

const NoteTags = () => {
  const { formData, updateField } = useForm();
  const notes = formData.selectedPerfume?.notes ?? [];

  if (!formData.selectedPerfume) {
    return (
      <p className="text-dust text-sm">
        Select a perfume above to see its notes
      </p>
    );
  }

  const toggle = (note) => {
    const current = formData.noteTags;
    const updated  = current.includes(note)
      ? current.filter((n) => n !== note)
      : [...current, note];
    updateField("noteTags", updated);
  };

  return (
    <div className="flex flex-wrap gap-2">
      {notes.map((note) => {
        const active = formData.noteTags.includes(note);
        return (
          <button
            type="button"
            key={note}
            onClick={() => toggle(note)}
            className={`text-sm px-4 py-1.5 rounded-full border transition-all
              ${active
                ? "bg-blush border-terra text-terra-dark"
                : "bg-white border-linen text-stone"
              }`}
          >
            {note}
          </button>
        );
      })}
    </div>
  );
};

export default NoteTags;
