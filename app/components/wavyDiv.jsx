"use client"
import { FaAccusoft, FaBuilding, FaFileInvoiceDollar } from "react-icons/fa";
import { calistoga } from "../fonts/fonts";
import { useRouter } from "next/navigation";

// components/WavyBorderBox.tsx
export default function WavyBorderBox() {
  const router = useRouter()
  const handleRedirect = (service)=>{
    router.push(`/contact?source=${service}`)
  }
    return (
        <>
        <div id="about" className="relative bg-[url('/wave.svg')] h-[20px] sm:h-[30px] bg-contain animate-backgroundPosition">
          <div className="absolute opacity-15 w-full -z-1 bottom-1 bg-[url('/wave.svg')] h-[22px] sm:h-[32px] mt-40 bg-contain animate-backgroundPosition2"></div>
        </div>
        <div className="min-h-screen bg-[#255C3B] flex flex-col md:flex-row items-center justify-center md:justify-evenly pt-20 sm:pt-32 md:pt-44 pb-16 sm:pb-20 md:pb-28 px-4 sm:px-10 gap-y-10 md:gap-x-16 text-white">
          <div className="px-4 sm:px-10">
            <div className="relative">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 absolute -top-6 -left-6 sm:-top-9 sm:-left-9" viewBox="0 0 37 37" id="svg1690633607"><path d="M 27.5 24 C 27.5 24 10.863 17.495 5 5.5" fill="transparent" stroke-width="3" stroke="var(--token-783c9c01-21bf-4403-bd1f-a410e07db715, rgb(247, 245, 240)) /* {&quot;name&quot;:&quot;Main / Warm White&quot;} */" stroke-linecap="round"></path><path d="M 15 12 C 15 12 3.908 7.781 0 0" transform="translate(7.567 23.943) rotate(-27 7.5 6)" fill="transparent" stroke-width="3" stroke="var(--token-783c9c01-21bf-4403-bd1f-a410e07db715, rgb(247, 245, 240)) /* {&quot;name&quot;:&quot;Main / Warm White&quot;} */" stroke-linecap="round"></path><path d="M 33.5 16 C 33.5 16 27.5 11.683 27.5 3" fill="transparent" stroke-width="3" stroke="var(--token-783c9c01-21bf-4403-bd1f-a410e07db715, rgb(247, 245, 240)) /* {&quot;name&quot;:&quot;Main / Warm White&quot;} */" stroke-linecap="round"></path></svg>
              <h1 className={`${calistoga.className} text-3xl sm:text-4xl md:text-5xl leading-tight sm:leading-15`}>Helping with Incorporation <br></br>and <span className="text-[#54d186]">ROC Companies</span></h1>
              <p className="text-base sm:text-lg mt-4 sm:mt-6 mb-8 sm:mb-12">Providing Consultancy services in the matters of Companies Act, 2013, SEBI Act, 1992, IPR Laws and many other Commercial and Economic Laws.</p>
            </div>
            <div>
              <div onClick={()=>handleRedirect("Incorporation")} className="p-4 sm:p-6 md:p-8 flex items-center gap-x-4 sm:gap-x-10 border border-white/20 border-dotted border-3 rounded-xl max-w-lg transition transition-normal hover:bg-white/10 hover:cursor-pointer">
                <div className="text-xl sm:text-2xl bg-white/30 p-3 sm:p-4 rounded-md">
                  <FaBuilding/>
                </div>
                <div>
                  <h2 className="font-bold mb-1">Incorporation</h2>
                  <p className="text-sm sm:text-base">
                    I'm creating campaigns for businesses, along with copy and all the designs.
                  </p>
                </div>
              </div>
              <div onClick={()=>handleRedirect("Share Issuance")} className="p-4 sm:p-6 md:p-8 mt-6 sm:mt-8 flex items-center gap-x-4 sm:gap-x-10 border border-white/20 border-dotted border-3 rounded-xl max-w-lg hover:bg-white/10 hover:cursor-pointer">
                <div className="text-xl sm:text-2xl bg-white/30 p-3 sm:p-4 rounded-md">
                  <FaFileInvoiceDollar/>
                </div>
                <div>
                  <h2 className="font-bold mb-1">Share Issuance</h2>
                  <p className="text-sm sm:text-base">
                    I'm creating campaigns for businesses, along with copy and all the designs.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 md:mt-0">
            <img className="max-w-[280px] sm:max-w-[340px] md:max-w-[24rem] rounded-4xl border-white border-4" src="statue.jpg" alt="Mock image"></img>
          </div> 
        </div>
      </>
    );
  }
  