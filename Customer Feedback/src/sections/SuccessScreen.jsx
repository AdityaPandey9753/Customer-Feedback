const SuccessScreen = ({ onReset }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-6">
      {/* Icon */}
      <div className="w-16 h-16 rounded-full border border-terra flex items-center
                      justify-center mb-6">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none"
          stroke="#d4896a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>

      <div className="w-7 h-px bg-terra mb-5 mx-auto" />

      <h2 className="font-cormorant text-4xl text-bark leading-tight mb-3">
        Thank you for <br />
        <em className="text-terra">your review.</em>
      </h2>

      <p className="text-sm text-stone leading-relaxed mb-8 max-w-xs">
        Your experience helps us craft better fragrances and helps others find
        their signature scent.
      </p>

      <button
        type="button"
        onClick={onReset}
        className="text-sm text-stone underline underline-offset-4
                   hover:text-bark transition-colors focus:outline-none"
      >
        Submit another review
      </button>
    </div>
  );
};

export default SuccessScreen;