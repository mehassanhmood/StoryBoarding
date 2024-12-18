import React from 'react';
import APersona from "../../public/adaptedPersone.jpg";

const AdaptedPersona = ({ name }) => {
    return (
        <div className="p-4 border rounded-lg shadow-lg shadow-indigo-100 hover:shadow-indigo-700 bg-indigo-700">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">{name}</h2>
            <p className='text-lg sm:text-xl lg:text-2xl text-white'>
                <b>Amjad</b>: The person who adapted. <br />
                People who adapted had one thing in common: <em>financial literacy</em>. <br />
                Some of the things that are observed among individuals who have adapted to the changing economic environment:
            </p>
            <ul className='text-lg sm:text-xl lg:text-2xl text-white list-disc list-inside mb-2'>
                <li>According to a report by McKinsey, individuals who diversify their income sources tend to be more resilient to economic downturns.</li>
                <li>National Endowment for Financial Education (NEFE) highlights that financial education leads to better financial decision-making.</li>
                <li>Harvard Business Review discusses how resilience and adaptability are crucial traits in facing economic challenges.</li>
            </ul>
            <img 
                src={APersona}
                alt={`${name} Image`} 
                className="mt-2 w-full h-auto rounded" 
            />
        </div>
    );
};

export default AdaptedPersona;
