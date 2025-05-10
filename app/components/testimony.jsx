import React from 'react'
import { calistoga } from '../fonts/fonts'

function Testimony() {
  return (
    <section className='min-h-screen py-25 mt-8 px-10 flex items-center space-x-24 justify-evenly'>
      <div className='max-w-sm '>
        <img className='w-full border border-black rounded-4xl border-2' src='testimonial.jpeg'></img>
      </div>
      <div>
        <div className='max-w-2xl'>
      <h2 className={`${calistoga.className} text-5xl leading-16`}>
      Their corporate secretarial service saved us from <br></br><span className='text-green-800'> major compliance</span> issues and costly delays. We’d have been lost without their support. 
      </h2>
      <p className='mt-4'>
        <span className='font-bold'>Pulkit Gupta</span>
        <br/>
        <span className='mt-2'>
        Vijyapana, Founder
        </span>
      </p>
      </div>
      </div>
    </section>
  )
}

export default Testimony
