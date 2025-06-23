"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import Image from "next/image";
import Typography from "@/components/Typography";

import "swiper/css";
import "swiper/css/effect-coverflow";

export default function Event() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-[300px] h-[300px] flex items-center justify-center pointer-events-auto">
        <Swiper
          effect="coverflow"
          direction="vertical"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={2.1} // 🔧 Only show what's needed
          loop={true}
          touchRatio={1}
          touchStartPreventDefault={false}
          passiveListeners={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 24,
            depth: 50,
            modifier: 4,
            slideShadows: false,
          }}
          modules={[EffectCoverflow]}
          className="w-full h-full"
        >
          <SwiperSlide>
            <div className="w-[300px] h-[190px] relative mx-auto rounded-[35px] overflow-hidden border-4 border-primary-300">
              <Image
                src="https://raw.githubusercontent.com/EPW16-ITS/assets/refs/heads/main/homepage-swiper2.webp"
                alt="gambar1"
                fill
                className="object-cover z-0"
              />
              <Typography.CrystalUniverseOblique className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[15%] text-fifth-50 text-[15px] font-normal z-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                INJECTION
              </Typography.CrystalUniverseOblique>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-[300px] h-[190px] relative mx-auto rounded-[35px] overflow-hidden border-4 border-third-400">
              <Image
                src="https://raw.githubusercontent.com/EPW16-ITS/assets/refs/heads/main/homepage-swiper3.webp"
                alt="gambar2"
                fill
                className="object-cover z-0"
              />
              <Typography.CrystalUniverseOblique className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[15%] text-fifth-50 text-[15px] font-normal z-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                MICON
              </Typography.CrystalUniverseOblique>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-[300px] h-[190px] relative mx-auto rounded-[35px] overflow-hidden border-4 border-fourth-400">
              <Image
                src="https://raw.githubusercontent.com/EPW16-ITS/assets/refs/heads/main/homepage-swiper4.webp"
                alt="gambar3"
                fill
                className="object-cover z-0"
              />
              <Typography.CrystalUniverseOblique className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[15%] text-fifth-50 text-[15px] font-normal z-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                EPC
              </Typography.CrystalUniverseOblique>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-[300px] h-[190px] relative mx-auto rounded-[35px] overflow-hidden border-4 border-black">
              <Image
                src="https://raw.githubusercontent.com/EPW16-ITS/assets/refs/heads/main/homepage-swiper1.webp"
                alt="gambar4"
                fill
                className="object-cover z-0"
              />
              <Typography.CrystalUniverseOblique className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[15%] text-fifth-50 text-[15px] font-normal z-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                EPHYFEST
              </Typography.CrystalUniverseOblique>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
