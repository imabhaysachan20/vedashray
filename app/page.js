import Image from "next/image";
import Hero from "./components/hero";
import QuoteComponent from "./components/quote";
import GlobalContainer from "./components/container";
import WavyDiv from "./components/wavyDiv";

export default function Home() {
  return (
    <div>
      <GlobalContainer>
      <Hero/>
      <QuoteComponent/>
      </GlobalContainer>
      <WavyDiv/>
      
    </div>
  );
}
