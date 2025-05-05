import React from 'react'
import { calistoga } from '../fonts/fonts'
import ServicesGrid from './servicesGrid'

function Services() {
  return (
    <>
    <div className="bg-white">
    <div className='relative bg-[#3e8bc2] h-[20vh] mt-24 flex items-center justify-center'>
    <div className="absolute w-full bottom-0 bg-[url('/wave2.svg')] bg- h-[30px] mt-40 bg-contain animate-backgroundPosition"></div>  

    
    </div>
    <h2 className={`${calistoga.className} mt-10 text-center text-4xl font-bold text-gray-800 leading-12`}>We offer a variety of <br/> services 🌊</h2>
    <p className='mt-4 leading-7 text-center font-medium'>We offer an array of quality and fruitful<br></br> corporate secretarial services:</p>
    </div>
    <ServicesGrid/>
    </>
  )
}

export default Services
