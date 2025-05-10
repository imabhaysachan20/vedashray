"use client"
import React from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { FaFileContract, FaBalanceScale, FaHandshake, FaBuilding, FaFileInvoiceDollar, FaGavel } from "react-icons/fa"
import GlobalContainer from './container'
import { services } from '@/lib/services'
import { servicesCard } from '@/lib/services'
import { useRouter } from 'next/navigation'

function ServicesGrid() {
  const router = useRouter()
  const handleRedirect = (service)=>{
    router.push(`/contact?source=${service}`)
  }
  return (
    
      <div className="py-12 sm:py-16 md:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {servicesCard.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card onClick={()=>handleRedirect(service.title)} className="group hover:shadow-lg transition-all duration-300 cursor-pointer h-full flex flex-col">
                <CardHeader className="flex-1">
                  <div className="flex flex-col gap-3 sm:gap-4">
                    <div className="p-2 sm:p-3 rounded-lg bg-primary/5 text-primary group-hover:bg-[#3e8bc2] group-hover:text-white transition-colors duration-300 w-full">
                      <CardTitle className="text-base sm:text-lg md:text-xl flex items-center gap-2">
                        {service.icon}
                        <span>{service.title}</span>
                      </CardTitle>
                    </div>
                    <CardDescription className="mt-1 sm:mt-2 text-sm sm:text-base">
                      <p>
                        {service.description}
                      </p>
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
