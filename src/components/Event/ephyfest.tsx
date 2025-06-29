"use client";

import Image from "next/image";
import TitleDeskripsi from "@/components/EphyfestComponent/title-deskripsi";
import MainEvent from "@/components/EphyfestComponent/main-event";
import TimelineEphyfest from "@/components/EphyfestComponent/timeline-ephyfest";
import SwiperLamp from "@/components/EphyfestComponent/swiper-lamp";

export default function Ephyfest() {
  return (
    <div>
      {/* Mobile */}
      <section className="relative md:hidden w-full h-[900px] overflow-hidden bg-gradient-to-b from-[#1F0C49] from-10% bg-[#116B98] to-90%">
        {/* Pattern Background */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="https://raw.githubusercontent.com/EPW16-ITS/assets/main/Pattern.webp"
            alt="Pattern Background"
            fill
            className="object-cover opacity-100"
            priority
          />
        </div>

        {/* Main Content */}
        <div className="relative w-full h-full mt-[10%]">

          <TitleDeskripsi />

          <MainEvent />

          <TimelineEphyfest />

          <SwiperLamp />

        </div>

        {/* Background Decorations */}
        <img
          src="https://raw.githubusercontent.com/EPW16-ITS/assets/main/homepage-awan.svg"
          className="absolute w-[40%] h-[40%] bottom-0 right-0 translate-x-[60%] translate-y-[-20%] z-0"
        />
        <img
          src="https://raw.githubusercontent.com/EPW16-ITS/assets/main/homepage-awan.svg"
          className="absolute w-[40%] h-[40%] bottom-0 left-0 -translate-x-[60%] translate-y-[10%] z-0"
        />
      </section>
    </div>
  );
};
