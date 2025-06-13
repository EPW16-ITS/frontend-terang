"use client";
import Typography from "../Typography";
import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

// import required modules
import { Pagination, EffectCoverflow, Autoplay, Navigation } from 'swiper/modules';

const Injection = () => {
  return (
    <div>
      {/* Main Content */}
      <section className="relative w-full h-[1024px] overflow-hidden bg-gradient-to-b from-[#D65263] from-0% via-[#702B34] to-[#702B34] to-68%">
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

        <Typography.CrystalUniverseRegular
          level={7}
          className="md:text-2xl lg:text-4xl absolute left-1/2 transform -translate-x-1/2 top-[10%] text-center z-40 text-[#3A1E77]"
          style={{
            WebkitTextStroke: "64px rgb(var(--color-secondary-300))"
          }}
        >
          INJECTION
        </Typography.CrystalUniverseRegular>

        {/* Rectangle Judul - Primary Fill */}
        <div className="md:w-[179px] absolute lg:left-[3%] lg:top-[22%] transform -translate-y-1/2 lg:w-[252px] lg:h-[41px] bg-primary-400 z-40">
          <div className="w-full h-full p-2 flex items-center justify-center">
            <Typography.Poppins
              level={7}
              className="text-white text-center">
              what is injection?
            </Typography.Poppins>
          </div>
        </div>

        {/* Rectangle Kubu kiri - Solid Fill */}
        <div className="md:w-[450px] absolute lg:left-[5%] lg:top-[40%] transform -translate-y-1/2 lg:w-[617px] lg:h-[349px] bg-third-50 z-30"
          style={{
            borderRadius: '0 20px 0 20px',
          }}>
          <div className="w-full h-full p-6 flex items-center justify-center">
            {/* Konten untuk kiri kanan */}
            <Typography.Poppins
              level={5}
              size="lg"
              className="text-fourth-400 text-center">
              Injection (Science Project and Innovation) merupakan salah satu sub-event dari serangkaian Engineering Physics Week (EPW) ke-16. Injection adalah kompetisi pembuatan karya tulis ilmiah inovatif. Injection akan terdiri dari 3 babak, yaitu seleksi abstrak, seleksi full paper, dan babak final.
            </Typography.Poppins>
          </div>
        </div>

        {/* Swiper dengan layout yang diperbaiki */}
        <div className="md:w-[433px] md:h-[268px] md:right-[-5%] absolute lg:right-[5%] lg:top-[37%] transform -translate-y-1/2 z-40 lg:w-[465px] lg:h-[292px]">
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
            className="w-full h-full"
          >
            <SwiperSlide className="flex items-center justify-center">
              <div className="md:w-[433px] md:h-[268px] relative lg:w-[465px] lg:h-[292px] overflow-hidden">
                <Image
                  src="https://raw.githubusercontent.com/EPW16-ITS/assets/main/inject1.webp"
                  alt="Injection Image 1"
                  fill
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex items-center justify-center">
              <div className="md:w-[433px] md:h-[268px] relative lg:w-[465px] lg:h-[292px] overflow-hidden">
                <Image
                  src="https://raw.githubusercontent.com/EPW16-ITS/assets/main/inject2.webp"
                  alt="Injection Image 2"
                  fill
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex items-center justify-center">
              <div className="md:w-[433px] md:h-[268px] relative lg:w-[465px] lg:h-[292px] overflow-hidden">
                <Image
                  src="https://raw.githubusercontent.com/EPW16-ITS/assets/main/inject3.webp"
                  alt="Injection Image 3"
                  fill
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
          </Swiper>

          {/* Register Here Capsule - Bottom left of swiper, overlapping */}
          <div className="absolute lg:left-[-50px] lg:bottom-[-30px] lg:w-[221px] lg:h-[79px] bg-fourth-25 border-2 border-neutral-800 z-50 flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity"
            style={{
              borderRadius: '45% 55% 48% 52% / 38% 42% 58% 62%',
            }}>
            <Typography.Homica
              className="text-neutral-800 text-center"
              level={9}>
              Register Here !
            </Typography.Homica>
          </div>

          {/* Guidebook Capsule - Bottom right of swiper, overlapping */}
          <div className="md:right-[15%] md:bottom-[-30%] absolute lg:right-[-50px] lg:bottom-[-25px] lg:w-[195px] lg:h-[73px] bg-fourth-25 border-2 border-neutral-800 z-50 flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity"
            style={{
              borderRadius: '52% 48% 45% 55% / 60% 35% 65% 40%',
            }}>
            <Typography.Homica
              className="text-neutral-800 text-center"
              level={9}>
              Guidebook
            </Typography.Homica>
          </div>
        </div>

        {/* Prizepool Component - Bottom right section */}
        <div className="absolute lg:right-[8%] lg:bottom-[12%] z-40">
          {/* PRIZEPOOL ?! Text - Half outside, half inside */}
          <div className="absolute left-1/2 transform -translate-x-1/2 lg:top-[-20%] z-50">
            <Typography.Homica
              level={4}
              className="text-fourth-25">
              PRIZEPOOL
            </Typography.Homica>
          </div>

          {/* Main Rectangle Component */}
          <div className="lg:w-[365px] lg:h-[135px] bg-fourth-100 rounded-[33px] shadow-lg opacity-100 flex items-center justify-center">
            <Typography.Homica
              level={5}
              className="text-neutral-800 text-center">
              Rp. 14.000.000
            </Typography.Homica>
          </div>
        </div>

        {/* Benefit Group Section - All benefits grouped in one div */}
        <div className="absolute lg:left-[5%] lg:top-[60%] lg:w-[674px] lg:h-[280px] z-30">
          {/* Rectangle Sertifikat Nasional - Left */}
          <div className="absolute lg:left-0 lg:top-[71px] lg:w-[324px] lg:h-[77px] bg-fifth-50 border-2 border-primary-300 rounded-lg flex items-center justify-center">
            <Typography.Poppins
              level={5}
              size="lg"
              className="text-primary-300 text-center">
              Sertifikat Nasional
            </Typography.Poppins>
          </div>

          {/* Rectangle Public Exhibition - Right */}
          <div className="absolute lg:right-0 lg:top-[71px] lg:w-[324px] lg:h-[77px] bg-fifth-50 border-2 border-primary-300 rounded-lg flex items-center justify-center">
            <Typography.Poppins
              level={5}
              size="lg"
              className="text-primary-300 text-center">
              Public Exhibition
            </Typography.Poppins>
          </div>

          {/* Rectangle Judul Benefit - Paling depan, menumpuk di atas */}
          <div className="absolute left-1/2 transform -translate-x-1/2 lg:top-[10px] lg:w-[219px] lg:h-[71px] bg-fifth-400 flex items-center justify-center z-50">
            <Typography.Poppins
              level={1}
              size="lg"
              className="text-secondary-50 text-center">
              Benefit
            </Typography.Poppins>
          </div>

          {/* Open Registration Rectangle - Bottom center of benefit group */}
          <div className="absolute left-1/2 transform -translate-x-1/2 lg:top-[170px] lg:w-[361px] lg:h-[127px] bg-fourth-25 rounded-lg z-40 p-2 border-2 border-black flex flex-col items-center">
            {/* Kapsul Open Registration */}
            <div className="lg:w-[210px] lg:h-[30px] border-2 border-black bg-secondary-400 rounded-full items-center justify-center mb-3">
              <Typography.Poppins
                level={7}
                className="text-secondary-25 text-center lg:font-medium">
                Open Registration
              </Typography.Poppins>
            </div>

            {/* Tanggal */}
            <div className="flex items-center justify-center lg:h-[60px]">
              <Typography.Poppins
                level={5}
                size="lg"
                className="text-fourth-900 text-center">
                23 Juni - 22 Juli 2025
              </Typography.Poppins>
            </div>
          </div>
          {/* Timeline Capsule - Bottom right, overlapping open registration */}
          <Button.Primary
            type="default"
            suffix={<FaArrowRight size={20} />}
            className="absolute lg:bottom-[-12%] lg:right-[15%] items-center px-6 py-3 z-[50]"
          >
            <a href="#">Timeline</a>
          </Button.Primary>
        </div>

        {/* Custom Styles untuk Swiper */}
        <style jsx global>{`
          .swiper-slide {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          
          .swiper-pagination {
            right: 20px !important;
            left: auto !important;
            width: auto !important;
          }
          
          .swiper-pagination-bullet {
            background: #D65263 !important;
            opacity: 0.5;
          }
          
          .swiper-pagination-bullet-active {
            opacity: 1 !important;
          }
        `}</style>
      </section>
    </div>
  );
};

export default Injection;