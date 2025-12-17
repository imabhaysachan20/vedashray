import Image from "next/image";
import Hero from "./components/hero";
import QuoteComponent from "./components/quote";
import GlobalContainer from "./components/container";
import About from "./components/wavyDiv";
import Testimony from "./components/testimony";
import Services from "./components/services";
import Insights from "./components/Insights";
import Footer from "./components/footer";
import { calistoga } from "./fonts/fonts";

export default function Home() {
  return (
    <div>
      <GlobalContainer>
      <Hero/>
      </GlobalContainer>
      <Services/>      
      <About/>
      <Testimony/>
      <Insights/>
      {/* <div className="bg-white" id="services">
        <div className='relative bg-[#3e8bc2] h-[15vh] sm:h-[20vh] mt-12 sm:mt-24 flex items-center justify-center'>
        <div className="absolute w-full bottom-0 bg-[url('/wave2.svg')] h-[20px] sm:h-[30px] bg-contain animate-backgroundPosition"></div>  
        </div>
        </div> */}
      <GlobalContainer className="bg-[#d7edfc]">

      </GlobalContainer>
      
    </div>
  );
}
