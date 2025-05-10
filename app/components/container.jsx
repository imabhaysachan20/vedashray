"use client"
import React from 'react'

const GlobalContainer = ({ children,className }) => {
  return (
    <div className={`mx-auto w-full md:px-4 sm:px-6 md:px-8 lg:px-12 ${className}`}>
      {children}
    </div>
  )
}

export default GlobalContainer
