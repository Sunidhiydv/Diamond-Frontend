import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Privacy() {
  return (
    <section className="bg-gray-900 text-white">
      <div className="bg-black">
        <Navbar />
      </div>
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4 text-center">Privacy Policy</h1>
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-2">1. Overview</h2>
          <p className="mb-4 leading-relaxed">
            1.1 P. N. Shah Diamonds offers services to the international
            diamond, gem, and jewelry industry. This Privacy Policy describes
            the information we collect and how we use it.
          </p>
          <h3 className="text-xl font-medium mb-2">1.2 Privacy Commitment</h3>
          <p className="mb-4">
            We take your privacy seriously and ensure your personal data is
            handled securely and responsibly.
          </p>

          <h2 className="text-2xl font-semibold mb-2">
            2. Notification of Changes
          </h2>
          <p className="mb-4">
            This policy may be revised over time. Changes will be posted on our
            websites and apps.
          </p>

          <h2 className="text-2xl font-semibold mb-2">
            3. What Data We Collect
          </h2>
          <ul className="list-disc ml-6 mb-4 space-y-2">
            <li>
              <strong>Required Information:</strong> Name, company details,
              address, phone number, and email.
            </li>
            <li>
              <strong>Transaction Information:</strong> Details related to
              purchases, sales, and interactions.
            </li>
            <li>
              <strong>Cookies and Tracking:</strong> Usage data for improving
              user experience.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mb-2">
            4. How We Use Your Data
          </h2>
          <p className="mb-4">
            Your data is used for providing and improving services, marketing,
            and ensuring security.
          </p>
        </div>
      </div>
      <Footer />
    </section>
  );
}
