"use client"
import React, { useEffect, useState } from 'react'

import { Menu, X, Facebook, Twitter, Instagram, LucideGavel, LucideGalleryVertical, ArrowRight } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import {calistoga} from "@/app/fonts/fonts"
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'

function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: 'Home', href: '/#top' },
    { name: 'About', href: './#about' },
    { name: 'Service', href: './#services' },
    { name: 'Contact', href: '/contact' },
    { name: 'Blog', href: '/blog' },
  ]

  const socialIcons = [
    { icon: <FaFacebook className="w-4 h-4" />, href: '#' },
    { icon: <FaTwitter className="w-4 h-4" />, href: '#' },
    { icon: <FaLinkedin className="w-4 h-4" />, href: 'https://www.linkedin.com/company/vedashray-corpsec-llp/' },
    { icon: <FaInstagram className="w-4 h-4" />, href: 'https://www.instagram.com/vedashray_corpsec_llp' },
  ]
  const { scrollYProgress } = useScroll();

  const background = useTransform(scrollYProgress, [0, 0.1], ['#f7f5f0', '#fff']);
  return (
    <motion.div style={{ background }} className="fixed top-0 left-0 right-0 z-50 bg-transparent ">
      <div className="container mx-auto py-2 sm:py-3 lg:py-4 px-4 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo/Heading */}
          <div className="flex-shrink-0 flex items-center gap-x-4 sm:gap-x-8">
            <Link href={"./"}><h1 className={`text-2xl sm:text-3xl uppercase font-bold ${calistoga.className}`}>Vedashray</h1></Link>
            <div className='hidden md:block h-6 w-0.5 bg-gray-300'></div>
            <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="font-bold text-[14px] sm:text-[15px] text-gray-900"
              >
                {item.name}
              </a>
            ))}
          </nav>
          </div>

          {/* Desktop Navigation */}
          

          {/* Desktop Social Icons and CTA */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            <div className="flex gap-x-3 lg:gap-x-4">
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
            <Link href={'/contact'}><Button size={'sm'} className="rounded-4xl font-bold text-xs sm:text-sm cursor-pointer">Get In Touch <ArrowRight className="h-4 w-4 ml-1"/></Button></Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Sheet >
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="h-9 w-9 p-0">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[350px] p-2">
                <div className="flex flex-col space-y-6 mt-8">
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-lg font-medium text-gray-600 hover:text-gray-900"
                    >
                      {item.name}
                    </a>
                  ))}
                  <div className="flex space-x-5 mt-4">
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
                  <Link href={"/contact"}><Button className="mt-4 w-full">Get In Touch</Button></Link>
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
