import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import About from './About'
import Footer from './Footer'
import Services from './Services'

export default function Home() {
  return (
    <>
    <div className='bg-black'>
        <Navbar/>
        <Hero/>
        <About/>
        <Services/>
        <Footer/>
    </div>
    
    </>
  )
}
