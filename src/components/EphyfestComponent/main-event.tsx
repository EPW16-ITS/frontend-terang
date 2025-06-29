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

const MainEvent = () => {
    // Ref for main event swiper
    const mainEventSwiperRef = useRef<SwiperType | null>(null);

    // Sample data for slider cards
    const mainEventData = [
        {
            id: 1,
            title: "Exhibition",
            description: "Exhibition Lab, Injection, Microcontroller Contest (Micon), dan Pameran 60 tahun Teknik Fisika"
        },
        {
            id: 2,
            title: "Talkshow",
            description: "Diskusi tentang suatu topik Soft Skill antara Moderator dan Narasumber."
        },
        {
            id: 3,
            title: "Closing Ceremony",
            description: "Penutupan resmi dari Engineering Physics Week ke-16."
        },
        {
            id: 4,
            title: "Awarding",
            description: "Memberikan apresiasi kepada peserta kompetisi atas pencapaian mereka."
        }
    ];

    return (
        <div className="h-[23%] border-2 border-red-500 flex flex-col justify-start m-[5%]">
            <Typography.Poppins
                level={5}
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#F85F73] to-[#037CB8] text-center leading-tight"
                style={{
                WebkitTextStroke: "2px rgb(var(--color-primary-100))",
                }}
            >
                Main Event
            </Typography.Poppins>

            {/* Slider Container */}
            <div className="relative w-full flex-1 border-red-400 border">
                <Swiper
                    onSwiper={(swiper) => {
                        mainEventSwiperRef.current = swiper;
                    }}
                    slidesPerView={2}
                    spaceBetween={10}
                    grabCursor={true}
                    modules={[]}
                    className="w-full h-full"
                >
                {mainEventData.map((item) => (
                    <SwiperSlide key={item.id} className="h-full">
                        <div className="h-full bg-fourth-25 border-4 border-fifth-25 flex flex-col relative rounded-lg">
                            <div className="flex-1 p-2">
                                <Typography.Poppins
                                    level={1}
                                    className="text-third-50 text-base text-center mb-1 whitespace-nowrap border-b border-fourth-300 pb-1"
                                >
                                    {item.title}
                                </Typography.Poppins>
                                <Typography.Poppins
                                    level={11}
                                    className="text-fourth-400 text-2xs text-justify leading-snug"
                                >
                                    {item.description}
                                </Typography.Poppins>
                            </div>

                            {/* View More Button */}
                            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[60%]">
                                <div
                                    className="h-[14px] bg-fourth-300 flex items-center justify-center cursor-pointer rounded-full"
                                    onClick={() => {
                                    console.log("View more clicked for:", item.title);
                                    }}
                                >
                                    <Typography.Poppins
                                        level={11}
                                        className="text-white text-2xs whitespace-nowrap"
                                        >
                                        View more
                                    </Typography.Poppins>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
                </Swiper>
                <img
                    src="https://raw.githubusercontent.com/EPW16-ITS/assets/main/homepage-GerigiPink.svg"
                    className="absolute w-[40%] h-[40%] bottom-0 left-0 -translate-x-[48%] translate-y-[46%] z-20 -rotate-[15deg]"
                />
            </div>
        </div>
    );
}

export default MainEvent;