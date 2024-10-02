import React from "react";
import personaImage from "../../public/persona.jpeg";
import inequalitImage from "../../public/income-inequality.png";

const Persona = () => {
  return (
    <div className="p-4 border rounded-lg shadow-md bg-teal-100">
      <div className="mb-4">
        <h2 className="text-xl font-bold">
          <b>Shakira:</b> and her family of 3:
        </h2>
        <p>
          In a small, sunlit apartment on the outskirts of a bustling city,
          Shakira sat at the kitchen table, her brow furrowed with worry. Bills
          were strewn across the table, reminders of the tightrope she and her
          husband, Steve, walked every month.
        </p>
        <p className="mt-2">Their goals:</p>
        <ul className="list-disc list-inside mb-2">
          <li>Home</li>
          <li>Food</li>
          <li>Education for their daughter, Lily</li>
        </ul>
        <p>The three basic needs of a human.</p>
        <img
          src={personaImage}
          alt="Shakira and her family"
          className="w-full h-auto rounded-lg mt-4 opacity-0 transition-opacity duration-500"
        />
      </div>
      <div className="placeholder-chart border-dashed border-2 border-gray-300 h-48 flex items-center justify-center mb-4">
        <span className="text-gray-500 p-2">
          In the back of her mind, Shakira couldn't shake the image of the
          curve she’d seen in the news recently—one showing how income
          inequality had widened over the years. The top 1% was growing
          wealthier, while families like hers were left struggling.
        </span>
        <img
          className="max-w-full h-full object-cover rotate-left"
          src={inequalitImage}
          alt="Income Inequality"
        />
      </div>
    </div>
  );
};

export default Persona;
