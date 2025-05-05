"use client"
import React, { useEffect, useState } from 'react'

import { Menu, X, Facebook, Twitter, Instagram, LucideGavel, LucideGalleryVertical, ArrowRight } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import {calistoga} from "@/app/fonts/fonts"
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { motion, useScroll, useTransform } from 'framer-motion'

function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Service', href: '/service' },
    { name: 'Contact', href: '/contact' },
  ]

  const socialIcons = [
    { icon: <FaFacebook className="w-4 h-4" />, href: '#' },
    { icon: <FaTwitter className="w-4 h-4" />, href: '#' },
    { icon: <FaLinkedin className="w-4 h-4" />, href: '#' },
  ]
  const { scrollYProgress } = useScroll();

  const background = useTransform(scrollYProgress, [0, 0.1], ['#f7f5f0', '#fff']);
  return (
    <motion.div style={{ background }} className="fixed top-0 left-0 right-0 z-50 bg-transparent ">
      <div className="container mx-auto lg:py-4 px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Heading */}
          <div  className="flex-shrink-0 flex items-center gap-x-8">
            <h1 className={`text-2xl font-bold ${calistoga.className}`}>Vedashray</h1>
            <div className='hidden lg:block h-6 w-0.5 bg-gray-300'></div>
            <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className=" font-bold text-[15px] text-gray-900"
              >
                {item.name}
              </a>
            ))}
          </nav>
          </div>

          {/* Desktop Navigation */}
          

          {/* Desktop Social Icons and CTA */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="flex gap-x-4">
            {socialIcons.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="text-gray-900"
              >
                {social.icon}
              </a>
            ))}
            </div>
            <div className='h-6 w-0.5 bg-gray-300'></div>
            <Button size={'lg'} className="rounded-4xl font-bold text-sm cursor-pointer">Get In Touch <ArrowRight/></Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-gray-600 hover:text-gray-900"
                    >
                      {item.name}
                    </a>
                  ))}
                  <div className="flex space-x-4 mt-4">
                    {socialIcons.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        className="text-gray-600 hover:text-gray-900"
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                  <Button className="mt-4">Get Started</Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Header
