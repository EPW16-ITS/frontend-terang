"use client";

// import Typography from "@/components/Typography";
// import Button from "@/components/Button";
import Image from "next/image";
// import { FaArrowDown, FaArrowRight, FaBook, FaCalendar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import { FaWhatsapp } from "react-icons/fa";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

// import required modules
import { Pagination, EffectCoverflow, Autoplay, Navigation } from 'swiper/modules';
// import { useRef } from 'react';
// import type { Swiper as SwiperType } from 'swiper';

export default function SwiperLamp() { 
    return (
        <div className="relative w-[90%] h-[30%] mx-[5%] border-2 border-red-700">
            <Swiper
                effect={"coverflow"}
                direction={"vertical"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={3}
                spaceBetween={20}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 15,
                    slideShadows: false,
                    }}
                    loop={true}
                    pagination={{
                    clickable: true,
                    }}
                    modules={[EffectCoverflow, Pagination, Navigation]}
                    className="w-[85%] sm:w-[55%] h-[60%] border border-red-400"
            >
                <SwiperSlide className="flex items-center justify-center">
                    <div className="relative rounded-2xl overflow-hidden w-[315px] h-[200px]">
                        <img
                            src="https://raw.githubusercontent.com/EPW16-ITS/assets/main/ephyfest-swiper1.webp"
                            alt="Ephyfest Image 1"
                            className="rounded-2xl object-cover"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="flex items-center justify-center">
                    <div className="relative rounded-2xl overflow-hidden w-[315px] h-[200px]">
                        <img
                            src="https://raw.githubusercontent.com/EPW16-ITS/assets/main/ephyfest-swiper2.webp"
                            alt="Ephyfest Image 1"
                            className="rounded-2xl object-cover"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="flex items-center justify-center">
                    <div className="relative rounded-2xl overflow-hidden w-[315px] h-[200px]">
                        <img
                            src="https://raw.githubusercontent.com/EPW16-ITS/assets/main/ephyfest-swiper3.webp"
                            alt="Ephyfest Image 1"
                            className="rounded-2xl object-cover"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="flex items-center justify-center">
                    <div className="relative rounded-2xl overflow-hidden w-[315px] h-[200px]">
                        <img
                            src="https://raw.githubusercontent.com/EPW16-ITS/assets/main/ephyfest-swiper4.webp"
                            alt="Ephyfest Image 1"
                            className="rounded-2xl object-cover"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="flex items-center justify-center">
                    <div className="relative rounded-2xl overflow-hidden w-[315px] h-[200px]">
                        <img
                            src="https://raw.githubusercontent.com/EPW16-ITS/assets/main/ephyfest-swiper5.webp"
                            alt="Ephyfest Image 1"
                            className="rounded-2xl object-cover"
                        />
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className="relative w-[55%] h-[55%] border border-yellow-300 mx-auto -translate-y-[35%]">
                <Image
                    src="https://raw.githubusercontent.com/EPW16-ITS/assets/main/ephyfest-gerigi-lampu.svg"
                    alt="lampu"
                    fill
                    className="object-contain object-center"
                />
            </div>
        </div>
    );
}