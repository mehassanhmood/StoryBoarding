import React from 'react';

const HomePage = () => {
  return (
    <section className="flex flex-col justify-center items-center bg-violet-100 p-8">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Inflation, Income, Inequality
        </h1>
        <p className="text-lg text-gray-600 mb-4">
          Understanding the diminishing value of a dollar and its impact on purchasing power.
        </p>
        <p className="text-lg text-gray-600 mb-8">
          Explore strategies for navigating these challenges in today's economic climate.
        </p>
      </div>
    </section>
  );
};

export default HomePage;
