"use client"
import React from 'react'
import Image from 'next/image'
import { calistoga, montserrat } from '../fonts/fonts'

function About() {
  return (
    <section id="about" className="pt-16 sm:pt-24 pb-16 sm:pb-20 bg-white">
      <div className="container mx-auto px-4 sm:px-8 lg:px-12">
        

        <div className="text-center mb-2 lg:mb-16 max-w-4xl mx-auto">
          <h2 className={`text-4xl sm:text-5xl font-bold text-[#320b54] mb-6 sm:mb-3${calistoga.className}`}>
            About Us
          </h2>
          <p className={`text-base sm:text-lg text-[#320b54]/80 leading-relaxed ${montserrat.className}`}>
            We are a team of qualified Company Secretaries and compliance experts dedicated to helping businesses stay fully compliant with Indian corporate laws. From company incorporation to annual filings, we simplify regulatory processes so you can focus on growth.
          </p>
        </div>


        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          

          <div className="lg:col-span-5 flex justify-center lg:justify-center relative">
             
             <div className="relative w-full max-w-[450px] lg:max-w-none h-[400px] sm:h-[500px] lg:h-[550px]">
                <Image 
                    src="/GroupImage.png" 
                    alt="Team of Company Secretaries" 
                    fill
                    className="object-contain object-center"
                    priority 
                />
             </div>
          </div>


          <div className="lg:col-span-7">
            <div className="border border-gray-200 rounded-xl p-6 sm:p-10 shadow-sm bg-white h-full flex flex-col justify-center">
                
                
                <div className="bg-[#F9F9F9] rounded-lg p-6 text-center mb-8">
                    <h3 className={`text-2xl sm:text-3xl text-[#320b54] ${calistoga.className}`}>
                        Our Commitment to <br />
                        Your Compliance Success
                    </h3>
                </div>

                
                <div className={`space-y-6 ${montserrat.className}`}>
                    
                    
                    <div className="flex gap-4 items-start">
                        <span className="text-[#320b54] text-xl mt-1">•</span>
                        <p className="text-[#320b54]/90 text-sm sm:text-base leading-relaxed">
                            <span className="font-bold text-[#320b54]">Regulatory Mastery:</span> Deep knowledge of the Companies Act, FEMA, SEBI, and other Indian Corporate Laws. Led by experienced CS/Law professionals.
                        </p>
                    </div>

                    
                    <div className="flex gap-4 items-start">
                        <span className="text-[#320b54] text-xl mt-1">•</span>
                        <p className="text-[#320b54]/90 text-sm sm:text-base leading-relaxed">
                            <span className="font-bold text-[#320b54]">Zero-Miss Compliance:</span> Proactive reminders and a structured system ensure you never miss a critical statutory deadline.
                        </p>
                    </div>


                    <div className="flex gap-4 items-start">
                        <span className="text-[#320b54] text-xl mt-1">•</span>
                        <p className="text-[#320b54]/90 text-sm sm:text-base leading-relaxed">
                            <span className="font-bold text-[#320b54]">Personalized Assistance:</span> Dedicated point of contact ensures bespoke advice, not a one-size-fits-all solution.
                        </p>
                    </div>

                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About