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
    <div className="p-4 border rounded-lg shadow-md bg-teal-100">
      <div className="mb-4">
      <div className="p-4 border rounded-lg shadow-md bg-teal-100 text-center"> {/* Added text-center class here */}
        <h2 className="text-xl font-bold">
          <b>Shakira:</b> and her family of 3:
        </h2>
        <p className='text-xl'>
          In a small, sunlit apartment on the outskirts of a bustling city,
          Shakira sat at the kitchen table, her brow furrowed with worry. Bills
          were strewn across the table, reminders of the tightrope she and her
          husband, Steve, walked every month.
        </p>
        <p className="text-xl mt-2">Their goals:</p>
        <ul className="text-xl list-disc list-inside mb-2">
          <li className="flex items-center justify-center"> {/* Added justify-center class */}
            <FaHome className="mr-2 text-teal-600" /> Home
          </li>
          <li className="flex items-center justify-center"> {/* Added justify-center class */}
            <FaAppleAlt className="mr-2 text-teal-600" /> Food
          </li>
          <li className="flex items-center justify-center"> {/* Added justify-center class */}
            <FaGraduationCap className="mr-2 text-teal-600" /> Education for their daughter, Lily
          </li>
        </ul>
        <p>The three basic needs of a human.</p>
      </div>

        <img
          ref={imageRef}
          src={personaImage}
          alt="Shakira and her family"
          className={`w-full h-auto rounded-lg mt-4 transition-opacity duration-100 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        />
      </div>
      <div className=" border-2 border-gray-300 h-48 flex items-center justify-center mb-4">
        <span className="text-xl text-gray-900 p-2">
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
