import React from "react";
import HomePage from "./components/HomePage";
import Persona from "./components/Persona";
import DollarWeakening from "./components/DollarWeakening";
import CostIncrease from "./components/CostIncrease";
import SuccessStrategies from "./components/SuccessStrategies";
import SPReturns from "./components/SPReturns";
import AdaptedPersona from "./components/AdaptedPersona";

function App() {
  return (
    
    <div className="py-4 px-2 sm:py-6 sm:px-4 md:py-8 md:px-6 lg:py-10 lg:px-8 border rounded-lg">
      <HomePage />

      <div className="py-4 px-2 sm:py-6 sm:px-4 md:py-8 md:px-6 lg:py-10 lg:px-8 border rounded-lg">
        <Persona />
      </div>
      
      <div className="py-4 px-2 sm:py-6 sm:px-4 md:py-8 md:px-6 lg:py-10 lg:px-8 border rounded-lg">
        <DollarWeakening />
      </div>
      
      <div className="py-4 px-2 sm:py-6 sm:px-4 md:py-8 md:px-6 lg:py-10 lg:px-8 border rounded-lg">
        <CostIncrease />
      </div>
      
      <div className="py-4 px-2 sm:py-6 sm:px-4 md:py-8 md:px-6 lg:py-10 lg:px-8 border rounded-lg">
        <SuccessStrategies />
      </div>
      
      <div className="py-4 px-2 sm:py-6 sm:px-4 md:py-8 md:px-6 lg:py-10 lg:px-8 border rounded-lg">
        <SPReturns />
      </div>
      
      <div className="py-4 px-2 sm:py-6 sm:px-4 md:py-8 md:px-6 lg:py-10 lg:px-8 border rounded-lg">
        <AdaptedPersona />
      </div>
    </div>
  );
}

export default App;
