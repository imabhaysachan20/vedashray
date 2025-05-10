import React from 'react'

function Client() {
  const clients = [
    '/client1.png',
    '/client2.png',
    '/client3.png',
    '/client4.png',
    '/client10.png',
    '/client5.avif',
  ];

  return (
    <div className="w-full py-6 sm:py-8 my-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-start sm:justify-between overflow-x-auto scrollbar-hide whitespace-nowrap py-4">
          {clients.map((client, index) => (
            <div key={index} className="mx-3 md:mx-6 lg:mx-8 flex-shrink-0">
              <img 
                src={client} 
                alt={`Client ${index + 1}`}
                className="h-8 sm:h-10 md:h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Client
