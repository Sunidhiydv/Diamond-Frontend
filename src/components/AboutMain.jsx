import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import About from './About'


export default function AboutMain() {
  return (
    <>
    <section className='bg-gradient-to-r from-black via-gray-900 to-black min-h-screen'>
      <Navbar/>
      <About/>

      <section className="container mx-auto py-16 px-6 space-y-20">
        <div className="flex flex-col md:flex-row-reverse items-center" data-aos="fade-left">
          {/* Left Side */}
          <div className="w-full md:w-2/5 mb-6 md:mb-0  ">
            <img
              src="Map-removebg-preview.png"
              alt="Website Services"
              className="rounded-lg shadow-lg h-72 mx-auto"
            />
          </div>
          {/* Right Side */}
          <div className="w-full md:w-3/5 md:pr-10">
            <h3 className="text-4xl font-bold text-yellow-500 mb-4">Market focus</h3>
            <p className="text-gray-300 leading-relaxed">
            P.N.Shah has been at the forefront of partnering with special marketing initiatives, bringing beauty, rarity and a promise of responsibly sourced diamonds which are exported to US, Europe, Middle East, and Far East among other countries. We have large client base comprising of B2B, B2C, retailers, jewellery manufacturers and traders. P.N.Shah promises to meet the high demands of its discerning customers and live up to its commitment as a conscientious organization by ensuring compliance with industry standards, Corporate Social Responsibilities and ethical business practices.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center shadow-sm shadow-yellow-500" data-aos="fade-right">
          {/* Left Side */}
          <div className="w-full md:w-2/5 mb-6 md:mb-0">
            <img
              src="diamondbg.png"
              alt="App Development"
              className="rounded-lg shadow-lg h-80 mx-auto"
            />
          </div>
          {/* Right Side */}
          <div className="w-full md:w-3/5 md:pl-10">
            <h3 className="text-4xl font-bold text-yellow-500 mb-4">Natural in Nature</h3>
            <p className="text-gray-300 leading-relaxed">
            We specialize and are renowned across the industry for the solitaire stones ranging from D to M color of IF – I1 clarity and size varying from 0.20 to 10 carats. We comply with the requirement of Gem and Jewellery Export Promotion Council (GJEPC) as regards declaration confirming that diamonds we sell are natural.
            </p>
          </div>
        </div>
       
      </section>

      <Footer/>
    </section>
    </>
    
  )
}
