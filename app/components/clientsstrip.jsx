"use client"
import React from 'react'
import Image from 'next/image'

function Client() {

  const clients = [
    { name: 'ARI', src: '/ARI.png' },
    { name: 'HollySys', src: '/HollySys.png' },
    { name: 'StatusNeo', src: '/StatusNeo.png' }, 
    { name: 'Vijyapana', src: '/Vijyapana.png' },
  ];

  return (

    <div className="w-full py-8 sm:py-10 bg-[#CDC5D6]">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16">

        <div className="flex flex-wrap md:flex-nowrap items-center justify-center md:justify-evenly gap-x-12 gap-y-8 md:gap-0">
          {clients.map((client, index) => (
            <div 
                key={index} 

                className="relative h-10 sm:h-12 md:h-16 w-32 sm:w-40 md:w-48 grayscale brightness-[0.6] contrast-[1.5] hover:grayscale-0 hover:brightness-100 hover:contrast-100 transition-all duration-300 cursor-pointer"
            >
              <Image 
                src={client.src} 
                alt={`${client.name} Logo`}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Client