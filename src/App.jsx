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
    // <div className="flex flex-col justify-center items-center min-h-screen bg-teal-300 p-4">
      <div>
      <HomePage />
      <div className="mt-4 w-full max-w-3xl">
        <Persona />
      </div>
      <div className="mt-4 w-full max-w-3xl">
        <DollarWeakening />
      </div>
      <div className="mt-4 w-full max-w-3xl">
        <CostIncrease />
      </div>
      <div className="mt-4 w-full max-w-3xl">
        <SuccessStrategies />
      </div>
      <div className="mt-4 w-full max-w-3xl">
        <SPReturns />
      </div>
      <div className="mt-4 w-full max-w-3xl">
        <AdaptedPersona />
      </div>
    </div>
  );
}

export default App;
