"use client";

import Typography from "@/components/Typography";
import Button from "@/components/Button";
import Image from "next/image";
import { FaArrowDown, FaArrowRight, FaBook, FaCalendar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

// import required modules
import { Pagination, EffectCoverflow, Autoplay, Navigation } from 'swiper/modules';
import { useRef } from 'react';
import type { Swiper as SwiperType } from 'swiper';

export default function TimelineEphyfest() { 
    return (
        <div className="relative w-[90%] h-[7%] m-[5%] border border-orange-500">
            <Typography.Poppins
                level={4}
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#F85F73] to-[#037CB8] text-center text-xl leading-tight"
                style={{
                WebkitTextStroke: "4px rgb(var(--color-primary-100))"
                }}
            >
                TIMELINE
            </Typography.Poppins>
            {/* Timeline Buttons Container */}
            <div className="relative flex items-center w-full h-[60%] border border-black justify-center gap-[2%]">
                {/* Registration Button - Smaller */}
                <Button.Primary
                    type="default"
                    className="w-[25%] h-[60%] flex items-center justify-center gap-2"
                >
                    <div className="flex items-center gap-2">
                        <Typography.Poppins level={12} className="text-2xs">
                        REGISTRATION
                        </Typography.Poppins>
                        <FaArrowRight className="text-3xs" />
                    </div>
                </Button.Primary>

                {/* Date Component */}
                <div
                    className="w-[60%] h-[100%] bg-gradient-to-r from-[#C64C5C] to-[#BA93E5] border-[2px] border-fifth-25 flex items-center justify-center my-auto cursor-text"
                    style={{
                        borderRadius: '0 15px 0 15px'
                    }}
                >
                    <FaCalendar className="text-white text-sm mr-2" />
                    <Typography.Poppins
                        level={10}
                        className="text-white text-2xs text-center"
                    >
                        25 Oktober 2025
                    </Typography.Poppins>
                </div>

                {/* Guidebook Button - Smaller */}
                <Button.Primary
                    type="default"
                    className="w-[25%] h-[60%] flex items-center justify-center gap-2"
                >
                    <div className="flex items-center gap-2">
                        <Typography.Poppins level={12} className="text-2xs">
                            GUIDEBOOK
                        </Typography.Poppins>
                        <FaBook className="text-3xs" />
                    </div>
                </Button.Primary>
            </div>
        </div>
    );
}