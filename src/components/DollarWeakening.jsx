import React from 'react';
import weakingingImage from "../../public/dollar_weakening.png";
import weakingingImage1990 from "../../public/dollarWeakening_1990.png";
import inflation from "../../public/inflation_pic.jpg";

const DollarWeakening = () => {
  return (
    <div className="p-4 border rounded-lg shadow-lg shadow-indigo-400 hover:shadow-indigo-600 bg-indigo-300 flex flex-col sm:flex-row">
      {/* Text Section */}
      <div className="flex-1 text-left p-4">
        <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold">Impact of Dollar Weakening</h3>
        <p className='text-lg sm:text-xl lg:text-2xl'>
          And then, there was the glaring reality, the same dollar that bought her parents groceries in the 1990s now barely covered half of what it used to. It struck her that what used to be $1 back then now felt like $3 today.
        </p>
        <p className='text-lg sm:text-xl lg:text-2xl'>
          The dollar had depreciated over time, leaving her and Steve with less buying power, even as prices for basic goods continued to climb.
        </p>
        {/* Inflation Image */}
        <div className='flex justify-center sm:justify-start max-w-xs p-4'>
          <img 
            src={inflation} 
            className="w-full sm:w-auto h-auto rounded-md mb-2 p-2 transition duration-700 opacity-100" 
            alt="Inflation"
          />
        </div>
      </div>

      {/* Images Section */}
      <div className="flex-shrink-0 flex flex-col items-center sm:items-end mx-4">
        <img 
          src={weakingingImage} 
          className="w-full sm:w-72 h-auto rounded-md mb-2" 
          alt="Dollar Weakening"
        />
        <img 
          src={weakingingImage1990}
          className="w-full sm:w-72 h-auto rounded-md p-2" 
          alt="Dollar Weakening in 1990"
        />
      </div>
    </div>
  );
};

export default DollarWeakening;

