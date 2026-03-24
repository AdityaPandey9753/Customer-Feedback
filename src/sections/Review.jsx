import { useForm } from "../context/FormContext";

const options = ["Definitely", "Maybe", "Not really"];

const Review = () => {
  const { formData, updateField } = useForm();
  const max = 500;
  return (
    <section className="flex flex-col gap-[0.5rem]">
      <span className="text-stone font-sans text-sm font-light">
        WOULD YOU RECOMMEND THIS?
      </span>
      <div className="flex gap-2">
        {options.map((option) => {
          const active = formData.recommend === option;
          return (
            <button
              type="button"
              key={option}
              onClick={() => updateField("recommend", option)}
              className={`flex-1 py-2.5 rounded-lg border text-sm transition-all
              duration-150 focus:outline-none
              ${
                active
                  ? "bg-blush border-terra text-terra-dark font-medium"
                  : "bg-white border-linen text-stone hover:border-terra hover:text-terra"
              }`}
            >
              {option}
            </button>
          );
        })}
      </div>
      <span className="text-stone font-sans text-sm font-light">
        YOUR REVIEW
      </span>
      <div className="relative">
        <textarea
          value={formData.reviewText}
          onChange={(e) => {
            if (e.target.value.length <= max) {
              updateField("reviewText", e.target.value);
            }
          }}
          placeholder="Describe how it made you feel, when you'd wear it, who it reminds you of..."
          rows={4}
          className="w-full bg-white border border-linen rounded-lg px-4 py-3
                   text-sm text-bark placeholder-dust resize-none
                   focus:outline-none focus:border-terra transition-colors leading-relaxed"
        />
        <span className="absolute bottom-3 right-3 text-xs text-dust">
          {formData.reviewText.length}/{max}
        </span>
      </div>
    </section>
  );
};

export default Review;
