import React from 'react'
import { calistoga } from '../fonts/fonts'
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa'
import GlobalContainer from './container'

function Footer() {
  return (
    
    <footer className='bg-[#d7edfc] py-8 md:py-12'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-2  bg-[#c7e3f8] p-8 border border-[#4a93c6] border-2 border-dashed rounded-2xl gap-8'>
          <div>
            <h3 className={`text-lg font-bold mb-4 ${calistoga.className}`}>CORPORATE OFFICE</h3>
            <p className='text-sm flex items-start'>
              <FaMapMarkerAlt className="mr-2 mt-1 text-[#4a93c6]" />
              ca-06/705, Capital Athena, plot No. GH-12A-2, Sector-1, Gr. Noida West-201306
            </p>
            <div className='mt-4 w-full'>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d448097.3825356063!2d77.386596!3d28.666880000000003!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf073c9669687%3A0x7328485a57cfe52f!2sCapital%20Athena%20Site%20Office!5e0!3m2!1sen!2sus!4v1746472909432!5m2!1sen!2sus" 
                width="100%" 
                height="200" 
                style={{border:0}} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className='rounded-lg'
              ></iframe>
            </div>
          </div>
          
          <div className='bg-gray-50 p-6 rounded-xl'>
          <h3 className={`text-lg font-bold mb-4 ${calistoga.className}`}>BRANCH OFFICE</h3>
            <p className='text-sm mb-2 flex items-start'>
              <FaMapMarkerAlt className="mr-2 mt-1 text-[#4a93c6]" />
              02/102 sector 2 vikas nagar lucknow 226022, opposite bharat gas agency
            </p>
            <p className='text-sm mb-1 flex items-center'>
              <FaPhone className="mr-2 text-[#4a93c6]" />
              Phone: <a href='tel:8177002646' className='hover:underline ml-1'>8177002646</a>
            </p>
            <p className='text-sm mb-1 flex items-center'>
              <FaEnvelope className="mr-2 text-[#4a93c6]" />
              Email: <a href='mailto:business@vedashray.com' className='hover:underline ml-1'>business@vedashray.com</a>
            </p>
            <p className='text-sm mb-1 flex items-center'>
              <FaEnvelope className="mr-2 text-[#4a93c6]" />
              <a href='mailto:admin@vedashray.com' className='hover:underline'>admin@vedashray.com</a>
            </p>
            <p className='text-sm flex items-center'>
              <FaEnvelope className="mr-2 text-[#4a93c6]" />
              <a href='mailto:csshradhashukla@gmail.com' className='hover:underline'>csshradhashukla@gmail.com</a>
            </p>
          </div>
          
          
        </div>
        <p className='mt-4 text-sm text-gray-500'>© 2025 Vedashray Corpsec LLP. All rights reserved</p>
      </div>

    </footer>

  )
}

export default Footer
