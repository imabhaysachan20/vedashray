import Image from "next/image";
import Hero from "./components/hero";
import QuoteComponent from "./components/quote";
import GlobalContainer from "./components/container";
import WavyDiv from "./components/wavyDiv";
import Client from "./components/clientsstrip";
import Testimony from "./components/testimony";
import Services from "./components/services";
import Footer from "./components/footer";
import { calistoga } from "./fonts/fonts";

export default function Home() {
  return (
    <div>
      <GlobalContainer>
      <Hero/>
      </GlobalContainer>
      
      <WavyDiv/>
      <Testimony/>
      <Client/>
      <div className="bg-white" id="services">
        <div className='relative bg-[#3e8bc2] h-[15vh] sm:h-[20vh] mt-12 sm:mt-24 flex items-center justify-center'>
          <div className="absolute w-full bottom-0 bg-[url('/wave2.svg')] h-[20px] sm:h-[30px] bg-contain animate-backgroundPosition"></div>  
        </div>
        <div className="px-4 sm:px-0">
          <h2 className={`${calistoga.className} mt-8 sm:mt-10 text-center text-3xl sm:text-4xl font-bold text-gray-800 leading-tight sm:leading-12`}>Our Services</h2>
          <p className='mt-2 sm:mt-4 leading-6 sm:leading-7 text-center text-sm sm:text-base font-medium'>We offer all types of corporate secretarial services:</p>
        </div>
      </div>
      <GlobalContainer className="bg-white bg-gradient-to-t from-[#d7edfc] to-transparent">
      <Services/>
      </GlobalContainer>
      <GlobalContainer className="bg-[#d7edfc]">

      </GlobalContainer>
      
    </div>
  );
}
