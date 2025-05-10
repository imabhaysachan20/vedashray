"use client"
import React, { useRef } from 'react'
import { calistoga } from '../fonts/fonts'
import QuoteComponent from './quote'

function Hero() {
 
  return (
    <div id="top" className='min-h-[90vh] sm:min-h-[110vh] mt-[50px] flex flex-col items-center justify-center gap-y-4 sm:gap-y-6 px-4 sm:px-0'>
        <div className="flex items-center gap-x-2 text-[#3E8BC2] font-[600] tracking-wide text-sm sm:text-lg flex-wrap justify-center">
        <h2>Hey, We're</h2>
        <span>
        <img className='w-8 h-8 sm:w-10 sm:h-10 border border-4 rounded-full'  src="./avatar.png"/>
        </span>
        <h2>VEDASHRAY CORPSEC LLP👋</h2>
        </div>
        <div className="max-w-[750px] flex text-center">
        <h2 className={`text-[28px] sm:text-4xl md:text-5xl lg:text-6xl ${calistoga.className} leading-tight sm:leading-18`}>
        Ensuring Compliance.<br></br> Empowering Governance.
        </h2>
        </div>
        <div className="flex text-gray-800 text-lg sm:text-xl font-bold tracking-tighter mt-2 sm:mt-4">
        सत्यं वद। धर्मं चर। 🇮🇳
        </div>
        <div className="w-[100px] sm:w-[150px] h-2 bg-[#54D186] rounded-3xl"></div>
        <p className='font-semibold text-sm sm:text-base'>Practicing Company Secretaries</p>
        <QuoteComponent/>
    </div>
  )
}

export default Hero
