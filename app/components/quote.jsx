import React from 'react'

const QuoteComponent = () => {
  return (
    <div className="hidden md:block bg-gray-200 mt-2 p-8 rounded-lg relative mx-auto">
      {/* Big quote at the top-right */}
      <div className="absolute top-2 left-2 text-6xl text-black opacity-20">
      ❝
      </div>
      <div className="absolute top-2 right-1 text-6xl text-black opacity-20">
      ❞
      </div>
      

      {/* Quote text in the center */}
      <p className="text-center text-md text-gray-900 text-center">
      At the heart of every successful business, a Company Secretary bridges the gap between law and business, safeguarding corporate integrity and driving sustainable growth.
      </p>
      
      
    </div>
  )
}

export default QuoteComponent
