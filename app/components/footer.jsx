"use client"
import React from 'react'
import Image from 'next/image'
import { calistoga } from '../fonts/fonts'
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import { FaSquareXTwitter, FaSquareInstagram, FaLinkedin } from 'react-icons/fa6'
import { Button } from "@/components/ui/button"

function Footer() {
  return (
    <footer className='relative w-full text-white overflow-hidden'>

      <div className="absolute inset-0 z-0">
         <Image 
            src="/officebg.png" 
            alt="Office Background"
            fill
            className="object-cover"
         />
         <div className="absolute inset-0 bg-[#5a2d82]/85 mix-blend-multiply"></div> 
         <div className="absolute inset-0 bg-black/20"></div> 
      </div>

      <div className='container relative z-10 mx-auto px-4 sm:px-8 lg:px-12 py-16 lg:py-24'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-start'>
          
          
          <div className='bg-white/90 backdrop-blur-sm p-6 sm:p-8 rounded-lg shadow-2xl w-full max-w-lg mx-auto lg:mx-0'>
             
             
             <h2 className={`text-3xl sm:text-4xl font-bold text-[#320b54] mb-6 ${calistoga.className}`}>
               Contact
             </h2>

             
             <div className='space-y-3 mb-8 text-[#320b54]'>
                <div className='flex items-center gap-3 font-medium'>
                   <FaEnvelope className="text-lg" />
                   <a href='mailto:business@vedashray.com' className='hover:underline'>business@vedashray.com</a>
                </div>
                <div className='flex items-center gap-3 font-medium'>
                   <FaPhone className="text-lg" />
                   <a href='tel:+919451033990' className='hover:underline'>+91 9451033990</a>
                </div>
                <div className='flex items-start gap-3 font-medium'>
                   <FaMapMarkerAlt className="text-lg mt-1 flex-shrink-0" />
                   <p>Sector 1, Greater Noida West, Uttar Pradesh, India</p>
                </div>
             </div>

             
             <form className='space-y-4 text-gray-700'>
                
                <div className='grid grid-cols-4 items-center gap-4'>
                   <label className='font-bold text-[#320b54] col-span-1'>Name</label>
                   <input type="text" className='col-span-3 bg-gray-200/80 rounded h-10 px-3 focus:outline-none focus:ring-2 focus:ring-[#320b54]' />
                </div>
                
                
                <div className='grid grid-cols-4 items-center gap-4'>
                   <label className='font-bold text-[#320b54] col-span-1'>Phone</label>
                   <input type="text" className='col-span-3 bg-gray-200/80 rounded h-10 px-3 focus:outline-none focus:ring-2 focus:ring-[#320b54]' />
                </div>

                
                <div className='grid grid-cols-4 items-center gap-4'>
                   <label className='font-bold text-[#320b54] col-span-1'>Email</label>
                   <input type="email" className='col-span-3 bg-gray-200/80 rounded h-10 px-3 focus:outline-none focus:ring-2 focus:ring-[#320b54]' />
                </div>

                
                <div className='grid grid-cols-4 items-start gap-4'>
                   <label className='font-bold text-[#320b54] col-span-1 pt-2'>Details</label>
                   <textarea rows={4} className='col-span-3 bg-gray-200/80 rounded p-3 focus:outline-none focus:ring-2 focus:ring-[#320b54] resize-none'></textarea>
                </div>

                
                <div className='flex justify-center mt-6'>
                    <Button className="bg-[#320b54] hover:bg-[#24063d] text-white px-8 py-2 rounded font-bold flex items-center gap-2 transition-all">
                        Submit <span className="text-sm">▶</span>
                    </Button>
                </div>
             </form>
          </div>

          
          <div className='flex flex-col h-full justify-between gap-8'>
             
             
             <div className="w-full h-64 sm:h-80 lg:h-full min-h-[300px] rounded-lg overflow-hidden shadow-lg border-2 border-white/20 bg-gray-200">
                <iframe 
                  width="100%" 
                  height="100%" 
                  style={{border:0}} 
                  loading="lazy" 
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  
                  src="https://maps.google.com/maps?q=Capital+Athena+Sector+1+Greater+Noida+West&t=&z=15&ie=UTF8&iwloc=&output=embed"
                ></iframe>
             </div>

             <div className='flex flex-col items-center lg:items-end text-center lg:text-right space-y-4'>
                
                <div className='flex items-center gap-4'>
                    <a href='#' className='bg-white p-2 rounded hover:bg-gray-200 transition-colors group'>
                        <FaSquareXTwitter className="text-[#320b54] text-2xl group-hover:scale-110 transition-transform" />
                    </a>
                    <a href="https://www.instagram.com/vedashray_corp/" className='bg-white p-2 rounded hover:bg-gray-200 transition-colors group'>
                        <FaSquareInstagram className="text-[#320b54] text-2xl group-hover:scale-110 transition-transform" />
                    </a>
                    <a href='https://www.linkedin.com/company/vedashray-corpsec-llp/' className='bg-white p-2 rounded hover:bg-gray-200 transition-colors group'>
                        <FaLinkedin className="text-[#320b54] text-2xl group-hover:scale-110 transition-transform" />
                    </a>
                </div>

                <p className='text-sm sm:text-base font-light opacity-90'>
                    © 2025 Vedashray Corpsec LLP. All rights reserved
                </p>
             </div>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer