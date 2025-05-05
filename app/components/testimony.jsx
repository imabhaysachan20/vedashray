import React from 'react'
import { calistoga } from '../fonts/fonts'

function Testimony() {
  return (
    <section className='min-h-screen py-25 mt-8 px-10 flex items-center space-x-24'>
      <div className='max-w-sm '>
        <img className='w-full border border-black rounded-4xl border-2' src='mock.avif'></img>
      </div>
      <div>
        <div className='max-w-2xl'>
      <h2 className={`${calistoga.className} text-5xl leading-16`}>
        Shraddha was a life-saver for our business, we have finally <span className='text-green-800'>break even</span> with our ads and made positive ROI. Without her we would burn thousands of $$$.
      </h2>
      <p className='mt-4'>
        <span className='font-bold'>Zack Zuckerberg</span>
        <br/>
        <span className='mt-2'>
        BackBook, CEO
        </span>
      </p>
      </div>
      </div>
    </section>
  )
}

export default Testimony
