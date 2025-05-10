"use client"
import React, { useRef } from 'react'
import { calistoga } from '../fonts/fonts'
import QuoteComponent from './quote'

function Hero() {
 
  return (
    <div id="top" className='min-h-[110vh] mt-[50px] flex flex-col items-center justify-center gap-y-6'>
        <div className="flex items-center gap-x-2 text-[#3E8BC2] font-[600] tracking-wide text-lg">
        <h2>Hey, We're</h2>
        <span>
        <img className='w-10 h-10 border border-4 rounded-full'  src="./avatar.png"/>
        </span>
        <h2>VEDASHRAY CORPSEC LLP👋</h2>
        </div>
        <div className="max-w-[750px] flex text-center">
        <h2 className={`text-6xl ${calistoga.className} leading-18`}>
        Ensuring Compliance.<br></br> Empowering Governance.
        </h2>
        </div>
        <div className="flex text-gray-800 text-xl font-bold tracking-tighter mt-4">
        सत्यं वद। धर्मं चर। 🇮🇳
        </div>
        <div className="w-[150px] h-2 bg-[#54D186] rounded-3xl"></div>
        <p className='font-semibold'>Practicing Company Secretaries</p>
        <QuoteComponent/>
    </div>
  )
}

export default Hero
