import React, { useState } from 'react';
import { IoIosStar } from "react-icons/io";

import { useForm } from '../context/FormContext';

const StarRating = ({ totalStars = 5 }) => {
  // State for selected rating
  const {formData, updateField} = useForm();
  // State for temporary hover rating
  const [hover, setHover] = useState(0);
  

  return (
    <div className="flex items-center gap-1">
      {[...Array(totalStars)].map((_, index) => {
        const starValue = index + 1;
        return (
          <button
            type="button"
            key={starValue}
            className={`${
              starValue <= (hover || formData.overallRating) ? 'text-terra' : 'text-dust'
            } transition-colors duration-150 focus:outline-none`}
            onClick={() => updateField("overallRating", starValue)}
            onMouseEnter={() => setHover(starValue)}
            onMouseLeave={() => setHover(0)}
          >
            <IoIosStar size={24} />
          </button>
        );
      })}
      <span className="ml-4 text-m italic text-terra font-light">
        {formData.overallRating} / {totalStars}
      </span>
    </div>
  );
};

export default StarRating;
