import React from 'react';
import Lottie from 'lottie-react';
import makeDia from '../assets/makeDia.json';

export default function Services() {
  return (
    <section className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8 px-6 py-8 gap-14 mx-4 md:mx-10 shadow-sm shadow-yellow-600">
      {/* First Div: Information About Services */}
      <div className="w-full md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl font-semibold text-yellow-600 mb-4">
          Natural Diamond & Jewelry Manufacturer and Exporter
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
          We specialize in manufacturing and exporting high-quality natural diamonds and exquisite diamond jewelry, offering customers worldwide the best of craftsmanship and design.
        </p>
      </div>

      {/* Second Div: Lottie Animation */}
      <div className="w-full md:w-1/3 flex justify-center items-center">
        <Lottie
          animationData={makeDia} // Pass the JSON data here
          loop={true}
          className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] rounded-lg shadow-lg"
        />
      </div>

      {/* Third Div: "Why Choose Us" Card */}
      <div className="w-full md:w-1/3 bg-gradient-to-r from-yellow-500 to-yellow-700 p-6 rounded-lg shadow-lg flex flex-col items-center">
        <h2 className="text-2xl font-bold text-center text-white mb-4">
          Why Choose Us?
        </h2>
        <ul className="space-y-4">
          <li className="flex items-center text-lg text-white">
            <span className="text-green-500 mr-2">✔</span> High-quality diamonds with expert craftsmanship
          </li>
          <li className="flex items-center text-lg text-white">
            <span className="text-green-500 mr-2">✔</span> Timely delivery and global export services
          </li>
          <li className="flex items-center text-lg text-white">
            <span className="text-green-500 mr-2">✔</span> Sustainable sourcing and ethical practices
          </li>
          <li className="flex items-center text-lg text-white">
            <span className="text-green-500 mr-2">✔</span> Competitive pricing and customer satisfaction
          </li>
        </ul>
      </div>
    </section>
  );
}
