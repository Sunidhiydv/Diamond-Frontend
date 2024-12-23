import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Contact() {
  return (
    <div className="bg-black min-h-screen ">
      <Navbar />
    
      <div className="container mx-auto py-12 px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-yellow-500 mb-4">Contact Us</h1>
          <p className="text-gray-300">We would love to hear from you. Reach out to us for any queries or assistance.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 shadow-sm ">
          {/* Contact Form */}
          <div className="bg-gray-300 p-8 shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Send Us a Message</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-600 mb-2">Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-600 mb-2">Email</label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-600 mb-2">Message</label>
                <textarea
                  placeholder="Your Message"
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-500 text-white py-2 rounded-md hover:bg-yellow-600 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col justify-center p-8 rounded-lg  items-center shadow-sm shadow-yellow-600">
            <h2 className="text-2xl font-semibold text-yellow-300 mb-6">Our Contact Details</h2>
            <p className="text-gray-300 mb-4">
              <strong>Address:</strong> 123 Diamond Street, Jewelry City, CA 90210
            </p>
            <p className="text-gray-300 mb-4">
              <strong>Email:</strong> contact@jewelerycompany.com
            </p>
            <p className="text-gray-300 mb-4">
              <strong>Phone:</strong> +1 234 567 8900
            </p>

            <h3 className="text-lg font-medium text-yellow-300 mt-6 mb-4">Business Hours</h3>
            <p className="text-gray-300">Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p className="text-gray-300">Saturday: 10:00 AM - 4:00 PM</p>
            <p className="text-gray-300">Sunday: Closed</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
