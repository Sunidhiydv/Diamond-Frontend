import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Grading() {
  return (
    <section className="bg-gradient-to-r from-black via-gray-900 to-black min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        {/* Color Section */}
        <div className="text-center py-8">
          <h1 className="text-4xl font-bold text-blue-500 mb-4">Color</h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          The color of a diamond is one of its most significant attributes. A diamond's color grading reflects its lack of color, with the highest grade being completely colorless. This enhances the diamond's ability to reflect light, creating a brilliant sparkle.
          </p>
          <div className="mt-6">
            <img
              src="color.jpg"
              alt="Color Grading"
              className="rounded-lg shadow-lg mx-auto w-3/4 md:w-1/2"
            />
          </div>
        </div>

        {/* Clarity Section */}
        <div className="text-center py-8 bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg shadow-lg mb-8">
          <h1 className="text-4xl font-bold text-blue-500 mb-4">Clarity</h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          Clarity measures the absence of inclusions and blemishes. The fewer imperfections a diamond has, the higher its clarity grade, which directly influences its visual appeal and overall value.
          </p>
          <div className="mt-6">
            <img
              src="clarity.jpg"
              alt="Clarity"
              className="rounded-lg shadow-lg mx-auto w-3/4 md:w-1/2"
            />
          </div>
        </div>

        {/* Carat Section */}
        <div className="text-center py-8">
          <h1 className="text-4xl font-bold text-blue-500 mb-4">Carat</h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          Carat weight represents the size of the diamond. Larger diamonds are rarer and more valuable, but carat is only one factor; a smaller diamond with superior cut, color, and clarity can outshine a larger one.
          </p>
          <div className="mt-6">
            <img
              src="carat.png"
              alt="Carat Weight"
              className="rounded-lg shadow-lg mx-auto w-3/4 md:w-1/2"
            />
          </div>
        </div>

        {/* Cut, Polish, Symmetry Section */}
        <div className="text-center py-8 bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold text-blue-500 mb-4">
            Cut, Polish, Symmetry
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          A diamond's cut grade evaluates its craftsmanship. Excellent cuts maximize brilliance and fire. Polish and symmetry grades further determine the precision and shine, showcasing the diamond's ultimate beauty.
          </p>
          <div className="mt-6">
            <img
              src="symmetry.jpg"
              alt="Cut, Polish, Symmetry"
              className="rounded-lg shadow-lg mx-auto w-3/4 md:w-1/2"
            />
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
