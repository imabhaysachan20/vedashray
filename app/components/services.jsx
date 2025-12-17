import React from 'react'
import { calistoga } from '../fonts/fonts'
import ServicesGrid from './servicesGrid'

function Services() {
  return (

    <div className="bg-[#E3DBEB] pb-16 sm:pb-24 pt-8 sm:pt-12">
      <div className="container mx-auto px-4 sm:px-8 lg:px-12">
        <div id="services" className="text-center mb-12 sm:mb-16">
          <h2 className={`${calistoga.className} text-4xl sm:text-5xl font-bold text-[#320b54] mb-4`}>
            Our Services
          </h2>
          <p className='text-lg sm:text-xl text-[#320b54] opacity-80 max-w-3xl mx-auto'>
            Comprehensive Company Secretary and Compliance Solutions
          </p>
        </div>
        <ServicesGrid/>
      </div>
    </div>
  )
}

export default Services