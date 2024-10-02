import React from 'react';
import APersona from  "../../public/adaptedPersone.jpg";

const AdaptedPersona = ({ name }) => {
    return (
      <div className="p-4 border rounded-lg shadow-lg shadow-teal-100 hover:shadow-teal-700">
        <h2 className="text-xl font-bold">{name}</h2>
        <p className='text-xl'><b>Amjad</b>: The person who adapted. <br />
        People who adapted had one thing in common <em>financial literacy</em> . <br/>
        Some of the things that are observed among individuals who have adapted to the changing economic environment:
        <ul className='text-xl list-disc list-inside mb-2'>
            <li>According to a report by McKinsey, individuals who diversify their income sources tend to be more resilient to economic downturns.</li>
            <li>National Endowment for Financial Education (NEFE) highlights that financial education leads to better financial decision-making.</li>
            <li>Harvard Business Review discusses how resilience and adaptability are crucial traits in facing economic challenges.</li>
        </ul>
        </p>
        <img 
          src={APersona}
          alt={`${name} Image`} 
          className="mt-2 w-full h-auto rounded" 
        />
      </div>
    );
};

export default AdaptedPersona;