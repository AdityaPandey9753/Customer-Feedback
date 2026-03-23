import { useForm } from "../context/FormContext";

const Footer = ({ loading }) => {
  const { formData } = useForm();

  const isDisabled =
    loading ||
    !formData.selectedPerfume ||
    formData.overallRating === 0 ||
    !formData.name ||
    !formData.phone;

  return (
    <div className="mt-2">
      <button
        type="submit"
        disabled={isDisabled}
        className={`w-full py-3.5 rounded-lg text-sm tracking-wide font-medium
          transition-all duration-150 focus:outline-none flex items-center justify-center gap-2
          ${isDisabled
            ? "bg-linen text-stone cursor-not-allowed"
            : "bg-bark text-parchment hover:opacity-90 active:scale-[0.99]"
          }`}
      >
        {loading ? (
          <>
            <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 12a9 9 0 1 1-6.219-8.56" />
            </svg>
            Submitting...
          </>
        ) : (
          <>
            Submit My Review
            <span className="text-base">→</span>
          </>
        )}
      </button>

      {/* Required fields hint */}
      {!loading && isDisabled && (
        <p className="text-xs text-dust text-center mt-2">
          Select a perfume, add a rating, name and phone to submit.
        </p>
      )}

      <p className="text-xs text-dust text-center mt-3">
        By submitting you agree to our{" "}
        <span className="text-stone underline cursor-pointer">privacy policy</span>.
        Your data is never sold.
      </p>
    </div>
  );
};

export default Footer;