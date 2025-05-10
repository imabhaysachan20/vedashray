import React from 'react'

function Client() {
  const clients = [
    '/client1.png',
    '/client2.png',
    '/client3.png',
    '/client4.png',
    '/client5.avif',
    '/client1.avif'
  ];

  return (
    <div className="w-full py-8 my-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between overflow-x-auto whitespace-nowrap px-4 py-4">
          {clients.map((client, index) => (
            <div key={index} className="mx-8 flex-shrink-0">
              <img 
                src={client} 
                alt={`Client ${index + 1}`}
                className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Client
