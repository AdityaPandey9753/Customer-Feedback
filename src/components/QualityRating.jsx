import React from "react";
import { useState } from "react";

const QualityRating = ({ children }) => {
  console.log(children);
  const [rating, setRating] = useState(1);

  const [hover, setHover] = useState(0);

  const totalBoxes = [1, 2, 3, 4, 5];

  return (
    <div className="flex gap-5 cursor-pointer">
      {totalBoxes.map((boxValue) => (
        <div
          key={boxValue}
          className="width-[40px] height-[40px] flex justify-center items-center border-1px rounded-[8px] transaction-terra duration-200 hover:color-solid"
          onClick={() => setRating(boxValue)}
          onMouseEnter={() => setHover(boxValue)}
          onMouseLeave={() => setHover(0)}
        >
          {boxValue}
        </div>
      ))}
    </div>
  );
};

export default QualityRating;
