import React from 'react'

const QuoteComponent = () => {
  return (
    <div className="bg-gray-200 mt-2 p-4 sm:p-8 rounded-lg relative mx-auto max-w-[90%] sm:max-w-full">
      {/* Big quote at the top-right */}
      <div className="absolute top-2 left-2 text-4xl sm:text-6xl text-black opacity-20">
      ❝
      </div>
      <div className="absolute top-2 right-1 text-4xl sm:text-6xl text-black opacity-20">
      ❞
      </div>
      

      {/* Quote text in the center */}
      <p className="text-center text-sm sm:text-md text-gray-900 px-4 sm:px-6">
      At the heart of every successful business, a Company Secretary bridges the gap between law and business, safeguarding corporate integrity and driving sustainable growth.
      </p>
      
      
    </div>
  )
}

export default QuoteComponent
