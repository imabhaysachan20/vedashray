import Image from "next/image";
import Hero from "./components/hero";
import QuoteComponent from "./components/quote";
import GlobalContainer from "./components/container";
import WavyDiv from "./components/wavyDiv";
import Client from "./components/clientsstrip";
import Testimony from "./components/testimony";
import Services from "./components/services";

export default function Home() {
  return (
    <div>
      <GlobalContainer>
      <Hero/>
      <QuoteComponent/>
      </GlobalContainer>
      <WavyDiv/>
      <Testimony/>
      <Client/>
      <Services/>
    </div>
  );
}
