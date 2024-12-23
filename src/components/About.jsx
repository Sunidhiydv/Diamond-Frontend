import Lottie from 'lottie-react';
import diamoond from '../assets/diamoond.json'; // Assuming it's a local JSON file.
import React from 'react';

export default function About() {
  return (
    <section className="flex flex-col md:flex-row h-auto md:h-[60vh] w-full items-center justify-between px-4 sm:px-8 py-8 bg-gradient-to-r from-black via-gray-900 to-black">
      {/* Left Div (Lottie Animation) */}
      <div className="w-full md:w-1/2 flex justify-center items-center mb-8 md:mb-0">
        <Lottie
          animationData={diamoond} // Pass the JSON data here
          loop={true}
          className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] rounded-lg shadow-lg"
        />
      </div>

      {/* Right Div (Text Content) */}
      <div className="w-full md:w-1/2 text-left md:mr-12 text-white">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 underline">
          About Us
        </h1>
        <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed">
          Founded over six decades ago in India, M/s. Popatlal Nathalal Shah (P.N.Shah) is a global leader in the diamond
          industry, spanning the entire pipeline from rough manufacturing to polished sales. Established by Late Shri
          Popatlal Nathalal Shah in Mumbai's iconic Opera House, P.N.Shah's legacy of quality and sustainable growth
          continues under the leadership of his son, Mr. Ajay Shah, and grandson, Mr. Nirav Shah.
        </p>
      </div>
    </section>
  );
}
