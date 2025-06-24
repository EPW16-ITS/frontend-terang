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
    className="text-[#FBD921] text-center xs:text-xl sm:text-2xl md:text-4xl lg:text-4xl  "
  >
    Teknik Fisika
  </Typography.CrystalUniverseOblique>
</div>



        {/* Background Clock Image */}
        <div className="absolute z-10 left-1/2 lg:-bottom-[60%] xs:-bottom-[10%] sm:-bottom-[20%] md:-bottom-[40%] transform -translate-x-1/2 w-full xh:w-[496.46px]  lg:w-[1100px] lg:h-[900px] overflow-hidden">
          <Image
            src="https://raw.githubusercontent.com/EPW16-ITS/assets/refs/heads/main/BGwaktu%20(3).svg"
            alt="BG waktu"
            width={1440}
            height={1000}
            className="mx-auto object-cover object-top w-full h-full"
            priority
          />
        </div>

      

        {/* Gear Decorations */}
        <div className="absolute z-10 opacity-70 lg:w-[612px] lg:h-[612px] lg:right-[-250px] lg:top-[-250px] md:right-[-200px] md:top-[-200px] md:w-[500px] md:h-[500px] sm:w-[400px] sm:h-[400px] xs:w-[300px] xs:h-[300px] sm:right-[-100px] sm:top-[-100px] xs:right-[-150px] xs:top-[-150px]">
          <Image
            src="https://raw.githubusercontent.com/EPW16-ITS/assets/refs/heads/main/GerigiKuning612x612.svg"
            alt="Gerigi Kuning"
            width={0}
            height={0}
            className="object-cover w-full h-full"
            priority
          />
        </div>

        <div className="absolute z-10 opacity-70 w-[115px] h-[115px]" style={{ top: "287.98px", left: "89px" }}>
          <Image
            src="https://raw.githubusercontent.com/EPW16-ITS/assets/refs/heads/main/gerigibiru.svg"
            alt="Gerigi Biru"
            width={140}
            height={140}
            className="object-cover w-full h-full"
            priority
          />
        </div>

        <div className="absolute z-10 opacity-70 w-[191.21px] h-[191.19px]" style={{ top: "166px", left: "124.56px" }}>
          <Image
            src="https://raw.githubusercontent.com/EPW16-ITS/assets/refs/heads/main/gerigikuning.svg"
            alt="Gerigi Kuning"
            width={140}
            height={140}
            className="object-cover w-full h-full"
            priority
          />
        </div>

        <div className="absolute z-10 opacity-70 w-[140px] h-[139.94px]" style={{ top: "400px", left: "1242.97px" }}>
          <Image
            src="https://raw.githubusercontent.com/EPW16-ITS/assets/refs/heads/main/gerigikuning.svg"
            alt="Gerigi Kuning"
            width={140}
            height={140}
            className="object-cover w-full h-full"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Tekfis;