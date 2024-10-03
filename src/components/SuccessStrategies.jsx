import React from 'react';
import CPI from "../../public/cpi.png";

const SuccessStrategies = () => {
  return (
    <div className="p-4 border rounded-lg shadow-lg shadow-indigo-100 hover:shadow-indigo-600 bg-indigo-500">
      {/* Heading */}
      <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white">
        Navigating Inflation
      </h3>

      {/* Paragraph 1 */}
      <p className="text-lg sm:text-xl lg:text-2xl text-white mt-2">
        <strong>"How did they do it?"</strong> she wondered, knowing they hadn’t faced the relentless erosion of purchasing power like she and Steve did. Back then, a dollar stretched much further—the cost of housing, education, and food had been far more affordable.
      </p>

      {/* Paragraph 2 */}
      <p className="text-lg sm:text-xl lg:text-2xl text-white mt-4">
        <strong>The Answer?</strong> Her parents hadn't experienced the same pressures of inflation or the gap between wages and living costs that seemed to define life for her generation.
      </p>

      {/* Image */}
      <div className="flex justify-center mt-4">
        <img
          className="w-full sm:w-3/4 lg:w-1/2 h-auto rounded-md object-cover"
          src={CPI}
          alt="Income Inequality"
        />
      </div>
    </div>
  );
};

export default SuccessStrategies;
