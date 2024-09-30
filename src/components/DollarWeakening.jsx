import React from 'react';
import weakingingImage from "../../public/dollar_weakening.png";
import weakingingImage1990 from "../../public/dollarWeakening_1990.png";

const DollarWeakening = () => {
  return (
    <div className="p-4 border rounded-lg shadow-md bg-teal-500">
      <h3 className="text-lg font-semibold">Impact of Dollar Weakening</h3>
      <p>
      And then, there was the glaring reality, the same dollar that bought her parents groceries in the 1990s now barely covered half of what it used to. It struck her that what used to be $1 back then now felt like $3 today.
      </p>
      
      <div className="flex flex-col items-center mt-4">
        <img 
          src={ weakingingImage } 
          className="max-w-full h-auto rounded-md mb-2" 
        />
        <p>The dollar had depreciated over time, leaving her and Steve with less buying power, even as prices for basic goods continued to climb.</p><br/>
        <img 
          src={ weakingingImage1990 }
          className="max-w-full h-auto rounded-md" 
        />
      </div>
    </div>
  );
};

export default DollarWeakening;
