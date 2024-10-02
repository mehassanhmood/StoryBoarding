import React, { useEffect, useState } from 'react';
import CPI from "../../public/cpi.png";


const SuccessStrategies = () => {


  return (
    
      <div className="p-4 border rounded-lg shadow-lg shadow-red-100 hover:shadow-red-600 bg-red-100">
        <h3 className="text-lg font-semibold">Navigating Inflation</h3>
        <p className='text-xl'><strong>"How did they do it?" </strong>she wondered, knowing they hadn’t faced the relentless erosion of purchasing power like she and Steve did. Back then, a dollar stretched much further—the cost of housing, education, and food had been far more affordable.</p> <br />
        <p className='text-xl'> <strong>The Answer? </strong> . Her parents hadn't experienced the same pressures of inflation or the gap between wages and living costs that seemed to define life for her generation.</p>
        <img
          className="max-w-full h-full object-cover rotate-left"
          src={CPI}
          alt="Income Inequality"
        />
    </div>
  );
};

export default SuccessStrategies;