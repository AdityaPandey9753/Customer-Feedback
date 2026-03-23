import { useForm } from "../context/FormContext";

const fields = [
  { key: "name", placeholder: "Your name", type: "text", required: true },
  { key: "phone", placeholder: "Phone number", type: "tel", required: true },
  {
    key: "email",
    placeholder: "Email address",
    type: "email",
    required: false,
  },
  {
    key: "city",
    placeholder: "City / Location",
    type: "text",
    required: false,
  },
];

const inputClass = `w-full bg-white border border-linen rounded-lg px-4 py-3
  text-sm text-bark placeholder-dust focus:outline-none
  focus:border-terra transition-colors`;

const CustomerDetails = () => {
  const { formData, updateField } = useForm();
  return (
    <section>
      <span className="text-stone font-sans text-sm font-light">ABOUT YOU</span>
      <div className="grid grid-cols-2 gap-3 mt-2">
        {fields.map(({ key, placeholder, type, required }) => (
          <div
            key={key}
            className={
              key === "email" || key === "city" ? "col-span-1" : "col-span-1"
            }
          >
            <input
              type={type}
              value={formData[key]}
              onChange={(e) => updateField(key, e.target.value)}
              placeholder={required ? placeholder : `${placeholder} (optional)`}
              className={inputClass}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomerDetails;
