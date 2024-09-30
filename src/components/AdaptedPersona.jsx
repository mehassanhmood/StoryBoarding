import React from 'react';
import APersona from  "../../public/adaptedPersone.jpg";

const AdaptedPersona = ({ name }) => {
    return (
      <div className="p-4 border rounded-lg shadow-md">
        <h2 className="text-xl font-bold">{name}</h2>
        <p><b>Amjad</b></p>
        <img 
          src={APersona}
          alt={`${name} Image`} 
          className="mt-2 w-full h-auto rounded" 
        />
      </div>
    );
};

export default AdaptedPersona;