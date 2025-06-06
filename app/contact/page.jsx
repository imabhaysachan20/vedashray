"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {dropdownServies} from "@/lib/services"
import { useCallback, useEffect, useState, Suspense } from "react";
import { Button, } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { toast } from "react-toastify";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

function ContactForm() {
  const [isSubmitting,setIsSubmitting] = useState(false);
  const searchParams = useSearchParams();
  const source = searchParams.get("source");
  
  const [selectedService, setSelectedService] = useState(source || "");
  
  const handleSubmit = useCallback((e) => {
    setIsSubmitting(true)
    e.preventDefault();
  
    // Use FormData to gather data from the form
    const formData = new FormData(e.currentTarget);
  
    // Convert formData to a regular object to view the data
    const formValues = Object.fromEntries(formData.entries());
    fetch('https://sheetdb.io/api/v1/YOUR_SHEET_ID', {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          data: [
                  formValues
          ]
      })
  })
    .then((response) => toast.success("Submitted"))
    .finally(()=>{setIsSubmitting(false)})
    // Here you can send formValues to your API or backend
    // Example: await fetch('/api/submit', { method: 'POST', body: JSON.stringify(formValues) });
  
    // Optionally, reset the form after submission

    e.target.reset();
  }, []);
  return (
    <div className="container mx-auto my-24 p-6 md:p-10 bg-[#f7f5f0] rounded-lg">
      <h1 className="text-4xl font-bold text-center mb-6 text-gray-900">
        Connect with Us
      </h1>
      <p className="text-center text-gray-700 mb-10 text-lg">
        Feel free to reach out for any project or query. We&apos;re here to help!
      </p>
      
      <div className="flex flex-col md:flex-row items-center justify-center space-y-10 md:space-y-0 md:space-x-10">
        
        {/* Left Side: Stock Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/contact.png" // Replace with your stock image path
            alt="Contact Us"
            width={500}
            height={350}
            
          />
        </div>
        
        {/* Right Side: Contact Form */}
        <div className="w-full md:w-1/2 bg-gray-50 p-8 rounded-lg shadow-lg border border-gray-200">
        <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-gray-800 font-semibold">
          Name
        </label>
        <input
          id="name"
          name="name" // Include name attribute to work with FormData
          type="text"
          required
          placeholder="Your Name"
          className="w-full mt-2 p-3 bg-white text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-gray-800 font-semibold">
          Phone Number
        </label>
        <input
          id="phone"
          maxLength={10}
          required
          name="phone" // Include name attribute to work with FormData
          type="tel"
          placeholder="Your Phone Number"
          className="w-full mt-2 p-3 bg-white text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-gray-800 font-semibold">
          Email
        </label>
        <input
          id="email"
          name="email" // Include name attribute to work with FormData
          required
          type="email"
          placeholder="Your Email"
          className="w-full mt-2 p-3 bg-white text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
      </div>
      <div>
 
 <Select 
name="service" 

value={selectedService} 
onValueChange={setSelectedService}
>
<SelectTrigger className="w-full">
<SelectValue placeholder="Inquiring for service..."/>
</SelectTrigger>
<SelectContent>
{dropdownServies.map((service) => (
 <SelectItem key={service} value={service}>
   {service}
 </SelectItem>
))}
</SelectContent>
</Select>
<input type="hidden" name="service" value={selectedService} />
   </div>
      <div>
        <label htmlFor="message" className="block text-gray-800 font-semibold">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          placeholder="Your Message"
          rows={4}
          className="w-full mt-2 p-3 bg-white text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 resize-none"
        />
      </div>
     
      <div>
        <button
        disabled={isSubmitting}
          type="submit"
          className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold text-lg transition duration-300 hover:bg-gray-700"
        >
          Send
        </button>
      </div>
    </form>

         
        </div>
      </div>
    </div>
  );
}

export default function ContactUs() {
  return (
    <Suspense fallback={<div className="container mx-auto my-24 p-6 md:p-10 bg-[#f7f5f0] rounded-lg text-center">Loading...</div>}>
      <ContactForm />
    </Suspense>
  );
}