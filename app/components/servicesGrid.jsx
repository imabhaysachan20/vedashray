"use client"
import React from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { FaFileContract, FaBalanceScale, FaHandshake, FaBuilding, FaFileInvoiceDollar, FaGavel } from "react-icons/fa"
import GlobalContainer from './container'
import { services } from '@/lib/services'

function ServicesGrid() {
  return (
    
      <div className="py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer h-full flex flex-col">
                <CardHeader className="flex-1">
                  <div className="flex flex-col gap-4">
                    <div className="p-3 rounded-lg bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 w-full">
                      <CardTitle className="text-xl flex items-center gap-2">
                        {service.icon}
                        <span>{service.title}</span>
                      </CardTitle>
                    </div>
                    <CardDescription className="mt-2">
                      <ul className='list-disc pl-5'>
                        {service.points.map((point, i) => (
                          <li key={i} className='mb-2'>
                            {point}
                          </li>
                        ))}
                      </ul>
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    
  )
}

export default ServicesGrid
