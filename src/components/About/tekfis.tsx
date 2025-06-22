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
      <div className="overflow-hidden relative w-full min-h-screen bg-gradient-to-br from-[#037CB8] via-[#341479] to-[#DDBC06]">
        <div className="absolute inset-0 z-0 opacity-[0.04]">
          <Image
            src="https://raw.githubusercontent.com/EPW16-ITS/assets/refs/heads/main/Pattern.svg"
            alt="Pattern"
            fill
            className="object-cover w-full h-full"
            priority
          />
        </div>

        <div
          className="absolute z-20"
          style={{
            top: "25%",
            left: "50%",
            transform: "translateX(-50%) translateY(-25%)",
            width: "410px",
            height: "50px",
          }}
        >
          <Typography.CrystalUniverseOblique
            level={6}
            className="text-[#FBD921] text-[36px] text-center leading-[50px]"
          >
            Teknik Fisika
          </Typography.CrystalUniverseOblique>
        </div>

        <div className="absolute z-10 left-1/2 bottom-0 transform -translate-x-1/2 w-full max-w-[1440px] h-[500px] overflow-hidden">
          <Image
            src="https://raw.githubusercontent.com/EPW16-ITS/assets/refs/heads/main/homepage-BGwaktu_new.svg"
            alt="BG waktu"
            width={1440}
            height={1000}
            className="mx-auto object-cover object-top w-full h-full"
            priority
          />
        </div>

        <div className="absolute z-10 opacity-70 w-[612px] h-[612px] overflow-hidden" style={{ top: "-250px", right: "-250px" }}>
          <Image
            src="https://raw.githubusercontent.com/EPW16-ITS/assets/refs/heads/main/GerigiKuning612x612.svg"
            alt="Gerigi Kuning"
            width={612}
            height={612}
            className="object-cover w-full h-full"
            priority
          />
        </div>

        <div className="absolute z-10 opacity-70 w-[115px] h-[115px] overflow-hidden" style={{ top: "287.98px", left: "89px" }}>
          <Image
            src="https://raw.githubusercontent.com/EPW16-ITS/assets/refs/heads/main/gerigibiru.svg"
            alt="Gerigi Biru"
            width={140}
            height={140}
            className="object-cover w-full h-full"
            priority
          />
        </div>

        <div className="absolute z-10 opacity-70 w-[191.21px] h-[191.19px] overflow-hidden" style={{ top: "166px", left: "124.56px" }}>
          <Image
            src="https://raw.githubusercontent.com/EPW16-ITS/assets/refs/heads/main/gerigikuning.svg"
            alt="Gerigi Kuning"
            width={140}
            height={140}
            className="object-cover w-full h-full"
            priority
          />
        </div>

        <div className="absolute z-10 opacity-70 w-[140px] h-[139.94px] overflow-hidden" style={{ top: "400px", left: "1242.97px" }}>
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