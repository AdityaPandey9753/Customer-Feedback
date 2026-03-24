import React from "react";

const Header = () => {
  return (
    <section className="flex gap-[0.5rem] flex-col">
      <p className="border-b-4 w-[60px] border-solid text-terra mb-1"></p>
      <span className="font-sans text-sm font-light font-stretch-ultra-expanded text-stone ">
        CUSTOMER REVIEW
      </span>
      <span className="text-5xl font-cormorant font-stretch-ultra-condensed text-bark">
        <b>
          How did it <span className="text-terra italic">feel?</span>
        </b>
      </span>
      <span className="text-stone font-sans text-sm font-light">
        Your experience helps others find their signature scent.
      </span>
    </section>
  );
};

export default Header;
