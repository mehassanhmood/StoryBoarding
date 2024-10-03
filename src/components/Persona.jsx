import React, { useEffect, useRef, useState } from 'react';
import personaImage from "../../public/persona.jpeg";
import inequalitImage from "../../public/income-inequality.png";
import { FaHome, FaAppleAlt, FaGraduationCap } from 'react-icons/fa'; // Importing icons

const Persona = () => {
  const [isVisible, setIsVisible] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing after it is visible
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the image is visible
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  return (
    <div className="p-4 border rounded-lg shadow-lg hover:shadow-indigo-600 bg-indigo-300">
      <div className="mb-4">
        <div className="p-4 border rounded-lg shadow-lg bg-indigo-400 text-center">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">
            <b>Shakira:</b> and her family of 3:
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl mt-2">
            In a small, sunlit apartment on the outskirts of a bustling city,
            Shakira sat at the kitchen table, her brow furrowed with worry. Bills
            were strewn across the table, reminders of the tightrope she and her
            husband, Steve, walked every month.
          </p>
          <p className="text-lg sm:text-xl lg:text-2xl mt-2">Their goals:</p>
          <ul className="text-lg sm:text-xl lg:text-2xl list-disc list-inside mb-2">
            <li className="flex items-center justify-center">
              <FaHome className="mr-2 text-teal-600" /> Home
            </li>
            <li className="flex items-center justify-center">
              <FaAppleAlt className="mr-2 text-teal-600" /> Food
            </li>
            <li className="flex items-center justify-center">
              <FaGraduationCap className="mr-2 text-teal-600" /> Education for their daughter, Lily
            </li>
          </ul>
          <p className="text-lg sm:text-xl lg:text-2xl">The three basic needs of a human.</p>
        </div>

        <img
          ref={imageRef}
          src={personaImage}
          alt="Shakira and her family"
          className={`w-full h-auto rounded-lg mt-4 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        />
      </div>
      <div className="border-2 border-gray-300 h-48 sm:h-64 lg:h-72 flex flex-col sm:flex-row items-center justify-center mb-4">
        <span className="text-lg sm:text-xl lg:text-2xl text-gray-900 p-2 text-center sm:text-left">
          In the back of her mind, Shakira couldn't shake the image of the curve she’d seen in the news recently—one showing how income inequality had widened over the years. The top 1% was growing wealthier, while families like hers were left struggling.
        </span>
        <img
          className="max-w-full h-full object-cover sm:ml-4 mt-4 sm:mt-0"
          src={inequalitImage}
          alt="Income Inequality"
        />
      </div>
    </div>
  );
};

export default Persona;

