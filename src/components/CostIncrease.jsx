import React, { useEffect, useState } from 'react';
import housingPrice from "../../public/housingPrice.png";
import Tution from "../../public/TutionFee.png";

const CostIncrease = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeIn(true);
    }, 100); // Delay to trigger fade-in effect

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="p-4 border rounded-lg shadow-md bg-teal-100 text-center">
      <h3 className="text-lg font-semibold">Increasing Costs</h3>
      <p>
        Shakira often thought about her parents, who lived through a different time. Her father, a mechanic, and her mother, a schoolteacher, had raised her and her siblings on a single income. They had owned their own home, a small but cozy house with a backyard.
      </p>
      <br />
      <div className="flex justify-center mb-4"> {/* Flex container to center the image */}
        <img 
          src={housingPrice}  
          className={`max-w-full h-auto rounded-md transition-opacity duration-700 ${fadeIn ? 'opacity-100' : 'opacity-0'}`} 
          alt="Housing Price"
        />
      </div>
      <p>
        <strong>Education:</strong>
      </p>
      <p>
        Shakira had gone to school without her parents ever talking about student loans or inflation.
      </p>
      <br />
      <div className="flex justify-center mb-4"> {/* Flex container to center the image */}
        <img 
          src={Tution}
          className={`max-w-full h-auto rounded-md transition-opacity duration-700 ${fadeIn ? 'opacity-100' : 'opacity-0'}`} 
          alt="Tuition Fee"
        />
      </div>
    </div>
  );
};

export default CostIncrease;


// import React from 'react';
// import housingPrice from "../../public/housingPrice.png";
// import Tution from "../../public/TutionFee.png";

// const CostIncrease = () => {
//   return (
//     <div className="p-4 border rounded-lg shadow-md bg-teal-100">
//       <h3 className="text-lg font-semibold">Increasing Costs</h3>
//       <p>
      
//       </p>
//       <p>
//       Shakira often thought about her parents, who lived through a different time. Her father, a mechanic, and her mother, a schoolteacher, had raised her and her siblings on a single income. They had owned their own home, a small but cozy house with a backyard.
//       </p><br />
//       <img 
//         src={ housingPrice }  
//         className="max-w-full h-auto rounded-md mb-4" 
//       />

//       <p>
//         <strong>Education:</strong>
//       </p>
//       <p>
//       Shakira had gone to school without her parents ever talking about student loans or inflation. 
//       </p><br />
//       <img 
//         src={ Tution }
//         className="max-w-full h-auto rounded-md mb-4" 
//       />
//     </div>
//   );
// };

// export default CostIncrease;