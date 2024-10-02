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
    <div className="p-4 border rounded-lg shadow-lg shadow-teal-100 hover:shadow-teal-700 bg-teal-100 flex">
      <div className="flex-1 text-left p-4">
        <h3 className="text-lg font-semibold">Increasing Costs</h3>
        <p className='text-xl'>
          Shakira often thought about her parents, who lived through a different time. Her father, a mechanic, and her mother, a schoolteacher, had raised her and her siblings on a single income. They had owned their own home, a small but cozy house with a backyard.
        </p>
        <p className='text-xl' >
          <strong>Education:</strong>
        </p>
        <p className='text-xl'>
          Shakira had gone to school without her parents ever talking about student loans or inflation.
        </p>
        <div className='flex max-w-xs p-4'>
        <img 
          src={ houseDream } 
          className={`max-w-xs h-auto rounded-md mb-2 p-4`} 
          alt="dream"
        />
        </div>
      </div>
      <div className="flex-shrink-0 flex flex-col items-end ml-4">
        <img 
          src={housingPrice}  
          className={`max-w-xs h-auto rounded-md mb-2 transition-opacity duration-700 ${fadeIn ? 'opacity-100' : 'opacity-0'}`} 
          alt="Housing Price"
        />
        <img 
          src={Tution}
          className={`max-w-xs h-auto rounded-md transition-opacity duration-700 ${fadeIn ? 'opacity-100' : 'opacity-0'}`} 
          alt="Tuition Fee"
        />
      </div>
    </div>
  );
};

export default CostIncrease;

