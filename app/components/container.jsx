"use client"
import React from 'react'

const GlobalContainer = ({ children }) => {
  return (
    <div className="container mx-auto px-12">
      {children}
    </div>
  )
}

export default GlobalContainer
