import Typography from "@/components/Typography";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

const Tekfis = () => {
  return (
    <div>
      {/* ---------- SECTION 1: HERO ---------- */}
      <div className="overflow-hidden relative w-full min-h-screen bg-gradient-to-br from-[#037CB8] via-[#341479] to-[#DDBC06] flex flex-col justify-center items-center">
        
        {/* Background Pattern */}
        <div className="absolute inset-0 z-0 opacity-[0.04]">
          <Image
            src="https://raw.githubusercontent.com/EPW16-ITS/assets/refs/heads/main/Pattern.svg"
            alt="Pattern"
            fill
            className="object-cover w-full h-full"
            priority
          />
        </div>

        <div className="z-20 flex justify-center items-center w-full mt-[-22%]">
          <Typography.CrystalUniverseOblique
            level={4}
            className="text-[#FBD921] text-center xs:text-xl sm:text-2xl md:text-4xl lg:text-4xl"
          >
            Teknik Fisika
          </Typography.CrystalUniverseOblique>
        </div>

        {/* Background Clock Image */}
        

        {/* Gear Decorations */}
        <div className="absolute z-10 opacity-70 lg:w-[612px] lg:h-[612px] lg:right-[-250px] lg:top-[-250px] md:right-[-200px] md:top-[-200px] md:w-[500px] md:h-[500px] sm:w-[400px] sm:h-[400px] xs:w-[300px] xs:h-[300px] sm:right-[-100px] sm:top-[-100px] xs:right-[-100px] xs:top-[-30px] xs:rotate-45">
          <Image
            src="https://raw.githubusercontent.com/EPW16-ITS/assets/refs/heads/main/GerigiKuning612x612.svg"
            alt="Gerigi Kuning"
            width={0}
            height={0}
            className="object-cover w-full h-full"
            priority
          />
        </div>

        <div className="absolute z-10 opacity-70 lg:w-[115px] lg:h-[115px] lg:mt-[-340px] lg:ml-[-1150px] md:w-[115px] md:h-[115px] md:mt-[-240px] md:ml-[-740px] sm:w-[100px] sm:h-[100px] sm:mt-[-160px] sm:ml-[-530px] xs:w-[80px] xs:h-[80px] xs:mt-[-280px] xs:ml-[-380px] " >
          <Image
            src="https://raw.githubusercontent.com/EPW16-ITS/assets/refs/heads/main/gerigibiru.svg"
            alt="Gerigi Biru"
            width={140}
            height={140}
            className="object-cover w-full h-full"
            priority
          />
        </div>

        <div className="absolute z-10 opacity-70 lg:w-[191px] lg:h-[191px]  lg:mt-[-500px] lg:ml-[-1000px] md:w-[191px] md:h-[191px]  md:mt-[-350px] md:ml-[-600px] sm:w-[170px] sm:h-[170px]  sm:mt-[-300px] sm:ml-[-400px] xs:w-[120px] xs:h-[120px] xs:mt-[-400px] xs:ml-[-290px]  "  >
          <Image
            src="https://raw.githubusercontent.com/EPW16-ITS/assets/refs/heads/main/gerigikuning.svg"
            alt="Gerigi Kuning" 
            width={140}
            height={140}
            className="object-cover w-full h-full"
            priority
          />
        </div>

        <div className="absolute z-10 opacity-70 lg:w-[140px] lg:h-[139.94px] lg:mt-[300px] lg:ml-[1400px] md:w-[140px] md:h-[140px] md:mt-[100px] md:ml-[900px] sm:w-[120px] sm:h-[120px] sm:mt-[100px] sm:ml-[630px] xs:w-[100px] xs:h-[100px] xs:mt-[120px] xs:ml-[180px]" >
          <Image
            src="https://raw.githubusercontent.com/EPW16-ITS/assets/refs/heads/main/gerigikuning.svg"
            alt="Gerigi Kuning"
            width={140}
            height={140}
            className="object-cover w-full h-full"
            priority
          />
        </div>

        {/* Gradient Div */}
     
      <div className="absolute z-20 bottom-0 left-0 w-full lg:h-[200px] md:h-[150px] sm:h-[100px] xs:h-[50px] pointer-events-none bg-gradient-to-b from-transparent to-[#2F126D]/100 ">
       
       </div>
       <div className="absolute z-10 left-1/2 lg:-bottom-[50%] xs:-bottom-[0%] sm:-bottom-[20%] md:-bottom-[40%] transform -translate-x-1/2 w-full xh:w-[496.46px] lg:w-[1100px] lg:h-[900px] overflow-hidden">
          <Image
            src="https://raw.githubusercontent.com/EPW16-ITS/assets/refs/heads/main/BGwaktu%20(3).svg"
            alt="BG waktu"
            width={1440}
            height={1000}
            className="mx-auto object-cover object-top w-full h-full"
            priority 
          />
        </div>
        
      

      </div>
    </div>
  );
};

export default Tekfis;