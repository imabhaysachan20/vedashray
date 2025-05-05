// components/WavyBorderBox.tsx
export default function WavyBorderBox() {
    return (
        <>
        <div className="relative bg-[url('/wave.svg')] bg- h-[38px] mt-40 bg-contain animate-backgroundPosition">
        <div className="absolute opacity-15 w-full -z-1 bottom-1 bg-[url('/wave.svg')] bg- h-[38px] mt-40 bg-contain animate-backgroundPosition2"></div>
        </div>
      <div className="min-h-screen bg-[#255C3B] ">
          <p>Your content here</p>
      </div>
      </>
    );
  }
  