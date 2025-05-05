"use client"
import React, { useRef } from 'react'
import { calistoga } from '../fonts/fonts'

function Hero() {
 
  return (
    <div className='min-h-[100vh] mt-[50px] flex flex-col items-center justify-center gap-y-6'>
        <div className="flex items-center gap-x-2 text-[#3E8BC2] font-[600] tracking-wide text-lg">
        <h2>Hey, I'm</h2>
        <span>
        <img className='w-10 h-10 border border-4 rounded-full'  src="./avatar.png"/>
        </span>
        <h2>Shradha Shukla 👋</h2>
        </div>
        <div className="max-w-[550px] flex text-center">
        <h2 className={`text-6xl ${calistoga.className} leading-18`}>
        Your guide through the legal ⚖️<br></br> jungle.
        </h2>
        </div>
        <div className="w-[150px] h-2 bg-[#54D186] rounded-3xl">

        </div>
        <div className="flex text-gray-800 text-xl font-semibold mt-4">
        Practicing Company Secretaries
        </div>
    </div>
  )
}

export default Hero
