"use client"
import React from 'react'
import Image from 'next/image'
import { calistoga, montserrat } from '../fonts/fonts'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'
import Clients from "./clientsstrip";

function Testimony() {
  return (
  
    <section className="py-16 sm:py-24 bg-[#CDC5D6]"> 
      <div className="container mx-auto px-4 sm:px-8 lg:px-12">
        

        <div className="text-center mb-16 max-w-4xl mx-auto">
           <h2 className={`text-3xl sm:text-5xl font-bold text-[#320b54] mb-4 ${calistoga.className}`}>
            Feedback from our clients
           </h2>
           <p className={`text-[#320b54]/80 text-sm sm:text-base font-medium tracking-wide ${montserrat.className}`}>
             Building Long-Term Relationships Through Reliable, Expert, and Ethical Compliance Services
           </p>
        </div>

        
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20 max-w-6xl mx-auto mb-20">
           
           
           <div className="relative w-48 h-48 sm:w-56 sm:h-56 flex-shrink-0">
           
              <Image
                src="/testimonial.jpeg" 
                alt="Pulkit Gupta"
                fill
                className="object-cover rounded-xl border-4 border-white shadow-sm"
              />
           </div>

          
           <div className="relative max-w-2xl text-center lg:text-left">
              
              <FaQuoteLeft className="text-white/60 text-5xl sm:text-7xl absolute -top-2 left-0 lg:-left-16 hidden sm:block" />
              
              <p className={`text-xl sm:text-2xl ml-8 md:text-3xl italic text-[#320b54] leading-relaxed relative z-10 ${montserrat.className}`}>
                 Their corporate secretarial service saved us from <span className="text-[#5a2d82] font-semibold">major compliance issues</span> and costly delays. We'd have been lost without their support."
              </p>
              
              
              <FaQuoteRight className="text-white/60 text-5xl sm:text-7xl absolute bottom-5 right-0 lg:-right-10 hidden sm:block" />
              
              <div className="mt-8">
                 <p className={`text-[#320b54] font-bold text-lg sm:text-xl ${montserrat.className}`}>
                    - Pulkit Gupta, <span className="font-medium italic opacity-90">Founder (Vijyapana)</span>
                 </p>
              </div>
           </div>
        </div>
    <Clients/>
      </div>
    </section>
  )
}

export default Testimony