"use client"
import React from 'react'
import Image from 'next/image'
import { calistoga, montserrat } from '../fonts/fonts'

function Insights() {
  const insights = [
    {
      
      image: '/blog1.png', 
      title: "Why annual filings are more than just a compliance task",
      description: "Your annual return filing and ROC compliance activities are far more important than routine paperwork"
    },
    {
      image: '/blog2.png',
      title: "Decoding the Mystery of the AOC-4: MCA Filings in India",
      description: "One of the most critical tasks for every company is the annual filing with the Ministry of Corporate Affairs (MCA)"
    },
    {
      image: '/blog3.png',
      title: "Unraveling the 'Significant Beneficial Owner' (SBO) Concept in India",
      description: "An SBO is an individual who holds ultimate beneficial interest of not less than 10% in a company"
    }
  ]

  return (
    <section id="insights" className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className={`text-4xl sm:text-5xl font-bold text-[#320b54] mb-4 ${calistoga.className}`}>
            Learn with Our Experts
          </h2>
          <p className={`text-base sm:text-lg text-[#320b54]/70 max-w-3xl mx-auto ${montserrat.className}`}>
            Expert Guidance on Company Incorporation, Annual Filings, and Regulatory Best Practices
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {insights.map((item, index) => (
            <div key={index} className="flex flex-col group cursor-pointer">
              
              {/* Card Image */}
              <div className="relative w-full h-56 sm:h-64 mb-6 rounded-xl overflow-hidden border border-gray-100 shadow-sm">
                <Image 
                  src={item.image} 
                  alt={item.title}
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Card Text */}
              <div className="text-center px-2">
                <h3 className={`text-lg sm:text-xl font-bold text-[#320b54] mb-3 leading-snug group-hover:text-[#5a2d82] transition-colors ${montserrat.className}`}>
                  {item.title}
                </h3>
                <p className={`text-sm sm:text-base text-gray-500 leading-relaxed ${montserrat.className}`}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Insights