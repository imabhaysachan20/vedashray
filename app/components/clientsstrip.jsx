"use client"
import React from 'react'
import Image from 'next/image'

function Client() {

  const clients = [
    { name: 'ARI', src: '/client1.png' },
    { name: 'HollySys', src: '/client2.png' },
    { name: 'StatusNeo', src: '/client4.png' }, 
    { name: 'Vijyapana', src: '/client10.png' },
  ];

  return (
    <div className="w-full py-8 sm:py-10 bg-[#CDC5D6] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16">
        <div className="hidden md:flex flex-nowrap items-center justify-between lg:justify-evenly gap-x-16 w-full">
          {clients.map((client, index) => (
            <div 
                key={index} 
                className="relative flex-shrink-0 h-16 w-40 lg:w-48 grayscale brightness-[0.6] contrast-[1.5] hover:grayscale-0 hover:brightness-100 hover:contrast-100 transition-all duration-300 cursor-pointer"
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
        <div className="md:hidden relative w-full overflow-hidden">
           <div className="flex w-[350%] animate-marquee items-center">
              <div className="flex w-1/2 justify-around items-center">
                 {clients.map((client, index) => (
                    <div 
                        key={`a-${index}`} 
                        className="relative h-30 w-45 mx-8 grayscale brightness-[0.6] contrast-[1.5]"
                    >
                        <Image src={client.src} alt={client.name} fill className="object-contain" />
                    </div>
                 ))}
              </div>
              <div className="flex w-1/2 justify-around items-center">
                 {clients.map((client, index) => (
                    <div 
                        key={`b-${index}`} 
                        className="relative h-24 w-48 mx-8 grayscale brightness-[0.6] contrast-[1.5]"
                    >
                        <Image src={client.src} alt={client.name} fill className="object-contain" />
                    </div>
                 ))}
              </div>

           </div>
        </div>

      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 15s linear infinite;
        }
      `}</style>
    </div>
  )
}

export default Client