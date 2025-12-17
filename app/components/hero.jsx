"use client"
import React from 'react'
import { calistoga, montserrat } from '../fonts/fonts'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import Image from 'next/image'

function Hero() {
  return (
    <section 
      id="top" 
      className='relative w-full mt-14 bg-white overflow-hidden pb-0 mb-0 flex flex-col lg:block justify-end min-h-[85vh] lg:min-h-[95vh]'
    >
      <div className='container relative z-20 mx-auto px-4 sm:px-8 lg:px-12 pt-16 lg:pt-0 lg:h-full lg:flex lg:items-end order-1'>
        
        <div className="flex flex-col lg:mt-35 justify-center items-center lg:items-start text-center lg:text-left space-y-6 mb-8 lg:mb-24 lg:w-7/12">
            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-[#320b54] leading-tight ${calistoga.className}`}>
              Simplifying <br className="hidden sm:block" />
              Corporate <br className="hidden sm:block" />
              Compliance
            </h1>
            
            <p className={`text-lg sm:text-xl text-[#320b54] max-w-[600px] leading-relaxed font-medium ${montserrat.className}`}>
              Reliable Corporate Secretarial & Legal <br className="hidden sm:block" />  Support for Enterprises, MSMEs, and <br className="hidden sm:block" /> Startups across India
            </p>
            
            <Link href={'/contact'}>
              <Button 
                variant="outline"
                className={`
                  border-2 border-[#320b54] text-[#320b54] 
                  hover:bg-[#320b54] hover:text-white 
                  rounded-[6px] px-8 py-6 
                  text-sm sm:text-base font-bold 
                  uppercase tracking-wide transition-all duration-300
                  ${montserrat.className}
                `}
              >
                REQUEST A <span className="font-extrabold ml-1.5">FREE</span> CONSULTATION
              </Button>
            </Link>
        </div>

      </div>
      <div className="relative order-4 w-full h-[280px] sm:h-[400px] lg:absolute lg:bottom-0 lg:left-0 lg:h-[600px] z-0 pointer-events-none mt-auto lg:mt-5">
          <Image
            src="/HeroBg.png"
            alt="Lady Justice Statue"
            fill
            className="object-contain object-bottom sm:object-right-bottom"
            priority
          />
      </div>

    </section>
  )
}

export default Hero