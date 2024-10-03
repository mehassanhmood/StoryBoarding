import React, { useEffect, useState } from 'react';
import housingPrice from "../../public/housingPrice.png";
import Tution from "../../public/TutionFee.png";
import houseDream from "../../public/assecory1.jpg"; // Placeholder image

const CostIncrease = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeIn(true);
    }, 100); // Delay to trigger fade-in effect

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="p-4 border rounded-lg shadow-lg shadow-indigo-100 hover:shadow-indigo-700 bg-indigo-100 flex flex-col sm:flex-row">
      {/* Text Section */}
      <div className="flex-1 text-left p-4">
        <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold">Increasing Costs</h3>
        <p className='text-lg sm:text-xl lg:text-2xl'>
          Shakira often thought about her parents, who lived through a different time. Her father, a mechanic, and her mother, a schoolteacher, had raised her and her siblings on a single income. They had owned their own home, a small but cozy house with a backyard.
        </p>
        <p className='text-lg sm:text-xl lg:text-2xl'>
          <strong>Education:</strong>
        </p>
        <p className='text-lg sm:text-xl lg:text-2xl'>
          Shakira had gone to school without her parents ever talking about student loans or inflation.
        </p>
        {/* Image of Dream House */}
        <div className='flex justify-center sm:justify-start max-w-xs p-4'>
          <img 
            src={houseDream} 
            className="w-full sm:w-auto h-auto rounded-md mb-2 p-4" 
            alt="Dream House"
          />
        </div>
      </div>

      {/* Image Section */}
      <div className="flex-shrink-0 flex flex-col items-center sm:items-end mt-4 sm:mt-0 ml-0 sm:ml-4">
        <img 
          src={housingPrice}  
          className={`w-full sm:w-72 h-auto rounded-md mb-2 transition-opacity duration-700 ${fadeIn ? 'opacity-100' : 'opacity-0'}`} 
          alt="Housing Price"
        />
        <img 
          src={Tution}
          className={`w-full sm:w-72 h-auto rounded-md transition-opacity duration-700 ${fadeIn ? 'opacity-100' : 'opacity-0'}`} 
          alt="Tuition Fee"
        />
      </div>
    </div>
  );
};

export default CostIncrease;

