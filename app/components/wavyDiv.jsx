import { FaAccusoft, FaBuilding, FaFileInvoiceDollar } from "react-icons/fa";
import { calistoga } from "../fonts/fonts";

// components/WavyBorderBox.tsx
export default function WavyBorderBox() {
    return (
        <>
        <div id="about" className="relative bg-[url('/wave.svg')] bg- h-[30px] mt-40 bg-contain animate-backgroundPosition">
        <div className="absolute opacity-15 w-full -z-1 bottom-1 bg-[url('/wave.svg')] bg- h-[32px] mt-40 bg-contain animate-backgroundPosition2"></div>
        </div>
      <div className="min-h-screen bg-[#255C3B] flex items-center justify-evenly pt-44 pb-28 px-10  gap-x-16 text-white">
        <div className="px-10">
          <div className="relative">
          <svg className="w-10 h-10 absolute -top-9 -left-9" viewBox="0 0 37 37" id="svg1690633607"><path d="M 27.5 24 C 27.5 24 10.863 17.495 5 5.5" fill="transparent" stroke-width="3" stroke="var(--token-783c9c01-21bf-4403-bd1f-a410e07db715, rgb(247, 245, 240)) /* {&quot;name&quot;:&quot;Main / Warm White&quot;} */" stroke-linecap="round"></path><path d="M 15 12 C 15 12 3.908 7.781 0 0" transform="translate(7.567 23.943) rotate(-27 7.5 6)" fill="transparent" stroke-width="3" stroke="var(--token-783c9c01-21bf-4403-bd1f-a410e07db715, rgb(247, 245, 240)) /* {&quot;name&quot;:&quot;Main / Warm White&quot;} */" stroke-linecap="round"></path><path d="M 33.5 16 C 33.5 16 27.5 11.683 27.5 3" fill="transparent" stroke-width="3" stroke="var(--token-783c9c01-21bf-4403-bd1f-a410e07db715, rgb(247, 245, 240)) /* {&quot;name&quot;:&quot;Main / Warm White&quot;} */" stroke-linecap="round"></path></svg>
          <h1 className={`${calistoga.className} text-5xl leading-15`}>Helping with Incorporation <br></br>and <span className="text-[#54d186]">Legal services.</span></h1>
          <p className="text-lg mt-6 mb-12">Campaigns with highest ROI in the market, seen by millions of potential customers, accordingly with content strategy.</p>
          </div>
          <div>
            <div  className="p-8 flex items-center gap-x-10 border border-white/20 border-dotted border-3 rounded-xl max-w-lg">
            <div className="text-2xl bg-white/30 p-4 rounded-md">
                <FaBuilding/>
            </div>
            <div>
                <h2>Incorporation</h2>
                <p>
                I'm creating campaigns for businesses, along with copy and all the designs.
                </p>
            </div>
            </div>
            <div  className="p-8 mt-8 flex items-center gap-x-10 border border-white/20 border-dotted border-3 rounded-xl max-w-lg">
            <div className="text-2xl bg-white/30 p-4 rounded-md">
                <FaFileInvoiceDollar/>
            </div>
            <div>
                <h2>Share Issuance</h2>
                <p>
                I'm creating campaigns for businesses, along with copy and all the designs.
                </p>
            </div>
            </div>
          </div>
          </div>
          <div>
            <img className="max-w-[24rem] rounded-4xl border-white border-4" src = "mock.avif"></img>
          </div> 
      </div>
      </>
    );
  }
  