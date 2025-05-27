"use client";
import Typography from "@/components/Typography";

export default function Home() {
  return (
    <div>
      {/* Main Content */}
      <section className="w-full min-h-screen overflow-hidden bg-gradient-to-b from-primary-25 from-5% bg-[#1C1C4B] to-80% absolute inset-0">
        <div>
            <img className="opacity-5 w-full h-auto object-cover"
            src="/components/Pattern.svg"
            />          
          <div className="">
             <img className="mx-auto mt-[-900px]"
            src="/components/PapanEPW.svg"
            />                     
             {/* <img className="mt-[-200px] mx-auto w-[1000px]"
            src="/components/glass-shade-bottom.svg"
            />           */}
          </div>
          <img
            src="/components/benang-biru.svg"
            alt="Benang Biru"
            className="absolute bottom-0 left-0"
          />
        </div>
      </section>
    </div>
  );
}