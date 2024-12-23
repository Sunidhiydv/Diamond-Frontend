import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function TnC() {
  return (
    <section className="min-h-screen flex flex-col bg-black">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-yellow-50 via-yellow-100 to-yellow-50 py-10">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold text-yellow-700">Terms & Conditions</h1>
          <p className="text-lg text-yellow-600 mt-4">
            Please read the following terms carefully before using our services.
          </p>
        </div>
      </div>

      {/* Terms Content */}
      <div className="container mx-auto px-4 py-8 flex-1">
        <div className="bg-yellow-50 shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold text-yellow-700 mb-4">P. N. Shah Diamonds – Terms of Use and Sale</h2>
          <p className="text-gray-700 mb-4">
            These "Terms and Conditions" (TAC) are a binding legal contract between P. N. Shah Diamonds (DCOM) and
            the user of the www.pnshahdiamonds.com website (SITE) as well as anyone who buys or sells products through
            the SITE. By using the SITE, you agree to be bound by these terms and conditions.
          </p>
          <h3 className="text-xl font-semibold text-yellow-600 mb-2">Changes to Terms and Conditions</h3>
          <p className="text-gray-700 mb-4">
            P. N. Shah Diamonds reserves the right to change these TAC. Your continued use of the SITE constitutes
            your acceptance of the new or modified TAC.
          </p>

          <h3 className="text-xl font-semibold text-yellow-600 mb-2">Site Content</h3>
          <p className="text-gray-700 mb-4">
            The SITE and all content and materials, including designs, text, graphics, and pictures, are the
            proprietary property of P. N. Shah Diamonds or its vendors and are protected by intellectual property
            laws.
          </p>

          <h3 className="text-xl font-semibold text-yellow-600 mb-2">Returns and Exchanges</h3>
          <p className="text-gray-700 mb-4">
            Buyers have 24 hours from receipt of the product to request a return. The product must be shipped back
            within three business days.
          </p>

          <h3 className="text-xl font-semibold text-yellow-600 mb-2">Policy on Ethical Sourcing</h3>
          <p className="text-gray-700 mb-4">
            P. N. Shah Diamonds ensures all diamonds and gemstones adhere to legal and ethical standards, including
            the Kimberley Process and U.S. Patriot Act.
          </p>

          <h3 className="text-xl font-semibold text-yellow-600 mb-2">Privacy Policy</h3>
          <p className="text-gray-700 mb-4">
            For details on how we collect and use personal information, please refer to our Privacy Policy.
          </p>

          <p className="text-gray-600 text-sm mt-6">
            If you have any questions, please contact us at info@pnshah.com or +1-702-893-9400.
          </p>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </section>
  );
}
