"use client"
import React, { useState } from 'react'
import { Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { FaSquareInstagram, FaLinkedin, FaSquareXTwitter, FaSquareFacebook } from 'react-icons/fa6'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'

const FilledArrowRight = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path d="M6 4l12 8-12 8V4z" />
  </svg>
)

function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/#services' },
    { name: 'About', href: '/#about' },
    { name: 'Insights', href: '/#insights' },
    { name: 'Contact', href: '/#contact' },
  ]

  const socialIcons = [
    { icon: <FaSquareXTwitter className="w-6 h-6 text-black" />, href: 'https://x.com/vedashray_corp?s=11' },
    { icon: <FaSquareInstagram className="w-6 h-6 text-black" />, href: 'https://www.instagram.com/vedashray_corp/' },
    { icon: <FaSquareFacebook className="w-6 h-6 text-black" />, href: 'https://www.facebook.com/share/1Cemy4rrPt/?mibextid=wwXIfr' },
    { icon: <FaLinkedin className="w-6 h-6 text-black" />, href: 'https://www.linkedin.com/company/vedashray-corpsec-llp/' },
  ]

  const { scrollYProgress } = useScroll();
  const background = useTransform(scrollYProgress, [0, 0.1], ['#ffffff', '#ffffff']);
  const shadow = useTransform(scrollYProgress, [0, 0.1], ['none', '0 4px 6px -1px rgb(0 0 0 / 0.1)']);

  return (
    <motion.div 
      style={{ background, boxShadow: shadow }} 
      className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300"
    >
      <div className="container mx-auto py-2 sm:py-3 px-4 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center gap-x-6">
            <Link href={"/"} className="flex-shrink-0 flex items-center">
                <img
                    src="/logo.png"
                    alt="Vedashray Logo"
                    className="w-auto h-12 sm:h-14 lg:h-16 object-contain"
                />
            </Link>
            <div className='hidden min-[1023px]:block h-8 w-[1px] bg-gray-300'></div>
            <nav className="hidden min-[1023px]:flex items-center space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="font-bold text-[15px] text-[#320b54] hover:text-[#5a1e8a] transition-colors font-sans"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
          <div className="hidden min-[1023px]:flex items-center gap-x-6">
            <div className="flex items-center gap-x-3">
              {socialIcons.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-black hover:text-[#320b54] transition-colors p-1"
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <div className='h-8 w-[1px] bg-gray-300'></div>

            <Link href={'/#contact'}>
              <Button 
                size={'sm'} 
                className="bg-[#320b54] hover:bg-[#24063d] text-white rounded-[6px] px-6 py-5 font-bold text-sm shadow-md"
              >
                Get In Touch <FilledArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>
          <div className="min-[1023px]:hidden flex items-center">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="h-10 w-10 p-0 text-[#320b54]">
                  <Menu className="h-8 w-8" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] p-6 bg-white">
                <div className="flex flex-col space-y-6 mt-8">
                  <div className="w-32 mb-4">
                      <img
                        src="/logo.png" 
                        alt="Vedashray" 
                        className="w-full h-auto"
                      />
                  </div>
                  
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-lg font-bold text-[#320b54]"
                    >
                      {item.name}
                    </Link>
                  ))}
                  
                  <div className="h-[1px] w-full bg-gray-300 my-2"></div>

                  <div className="flex space-x-4 justify-start">
                    {socialIcons.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        className="text-black hover:text-[#320b54]"
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                  <Link href={"/#contact"} onClick={() => setIsOpen(false)}>
                    <Button className="mt-4 w-full bg-[#320b54] hover:bg-[#24063d] rounded-full font-bold">
                        Get In Touch
                    </Button>
                  </Link>
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