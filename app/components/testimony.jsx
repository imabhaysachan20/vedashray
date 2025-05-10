import React from 'react'
import { calistoga } from '../fonts/fonts'

function Testimony() {
  return (
    <section className='min-h-screen py-10 sm:py-25 mt-8 px-4 sm:px-10 flex flex-col md:flex-row items-center md:space-x-8 lg:space-x-24 justify-center md:justify-evenly gap-y-10 md:gap-y-0'>
      <div className='max-w-[250px] sm:max-w-sm'>
        <img className='w-full border border-black rounded-4xl border-2' src='testimonial.jpeg'></img>
      </div>
      <div className='max-w-full md:max-w-2xl'>
        <h2 className={`${calistoga.className} text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-snug sm:leading-16 text-center md:text-left`}>
          Their corporate secretarial service saved us from <br className='hidden md:block'></br><span className='text-green-800'> major compliance</span> issues and costly delays. We'd have been lost without their support. 
        </h2>
        <p className='mt-4 text-center md:text-left'>
          <span className='font-bold'>Pulkit Gupta</span>
          <br/>
          <span className='mt-2'>
          Vijyapana, Founder
          </span>
        </p>
      </div>
    </section>
  )
}

export default Testimony
