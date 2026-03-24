import React from "react";
import StarRating from "../components/StartRating";
import PerfumeSearch from "../components/PerfumeSearch"

const Perfume = () => {
  return (
    <>
      <section className="mt-5"><PerfumeSearch /></section>

      <section className="flex flex-col mt-3 gap-[0.5rem]">
        <span className="text-stone font-sans text-sm font-light">
          OVERALL RATING
        </span>
        <StarRating />
      </section>
    </>
  );
};

export default Perfume;
