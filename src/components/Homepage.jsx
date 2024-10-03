import React from 'react';

const HomePage = () => {
  return (
    <section className="flex flex-col justify-center items-center bg-indigo-200 shadow-lg shadow-indigo-500 hover:shadow-indigo-900 p-6 md:p-12 border rounded-lg my-4 mx-2 md:mx-8">
      <div className="max-w-lg md:max-w-2xl text-center">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">
          Inflation, Income, Inequality
        </h1>
        <p className="text-lg text-gray-900 mb-4">
          Understanding the diminishing value of a dollar and its impact on purchasing power.
        </p>
        <p className="text-lg text-gray-900 mb-8">
          Explore strategies for navigating these challenges in today's economic climate.
        </p>
      </div>
    </section>
  );
};

export default HomePage;
