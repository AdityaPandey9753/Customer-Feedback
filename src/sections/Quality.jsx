import { useForm } from "../context/FormContext";

const dimensions = [
  { key: "sillage", label: "Sillage" },
  { key: "longevity", label: "Longevity" },
  { key: "value", label: "Value" },
  { key: "packaging", label: "Packaging" },
];

const Quality = () => {
  const { formData, updateField } = useForm();

  return (
    <section className="flex flex-col gap-3">
      <span className="text-stone font-sans text-sm font-light">
        RATE EACH QUALITY
      </span>
      <div className="flex flex-col gap-3">
        {dimensions.map(({ key, label }) => (
          <div key={key} className="flex items-center gap-4">
            <span className="text-xs text-stone w-20 flex-shrink-0">
              {label}
            </span>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((val) => (
                <button
                  type="button"
                  key={val}
                  onClick={() => updateField(key, val)}
                  className={`w-8 h-8 rounded-md border text-xs font-medium
                  transition-all duration-150 focus:outline-none
                  ${
                    formData[key] >= val
                      ? "bg-terra border-terra text-parchment"
                      : "bg-white border-linen text-dust hover:border-terra hover:text-terra"
                  }`}
                >
                  {val}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Quality;
