import React from 'react';
import housingPrice from "../../public/housingPrice.png";
import Tution from "../../public/TutionFee.png";

const CostIncrease = () => {
  return (
    <div className="p-4 border rounded-lg shadow-md bg-teal-100">
      <h3 className="text-lg font-semibold">Increasing Costs</h3>
      <p>
      
      </p>
      <p>
      Shakira often thought about her parents, who lived through a different time. Her father, a mechanic, and her mother, a schoolteacher, had raised her and her siblings on a single income. They had owned their own home, a small but cozy house with a backyard.
      </p><br />
      <img 
        src={ housingPrice }  
        className="max-w-full h-auto rounded-md mb-4" 
      />

      <p>
        <strong>Education:</strong>
      </p>
      <p>
      Shakira had gone to school without her parents ever talking about student loans or inflation. 
      </p><br />
      <img 
        src={ Tutinq }
        className="max-w-full h-auto rounded-md mb-4" 
      />
    </div>
  );
};

export default CostIncrease;