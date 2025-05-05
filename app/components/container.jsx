"use client"
import React from 'react'

const GlobalContainer = ({ children,className }) => {
  return (
    <div className={` mx-auto px-12 ${className}`}>
      {children}
    </div>
  )
}

export default GlobalContainer
