"use client";
import Typography from "../Typography";
import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { useRef, useState } from "react";
import type { SwiperRef } from "swiper/react";
import React from "react";


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

// import required modules
import { Pagination, EffectCoverflow, Autoplay, Navigation } from 'swiper/modules';

const slides = [
  "https://raw.githubusercontent.com/EPW16-ITS/assets/main/inject1.webp",
  "https://raw.githubusercontent.com/EPW16-ITS/assets/main/inject2.webp",
  "https://raw.githubusercontent.com/EPW16-ITS/assets/main/inject3.webp",
];

const getSlidesWithDummy = () => {
  const dummyStart = slides[slides.length - 1];
  const dummyEnd = slides[0];
  return [dummyStart, ...slides, dummyEnd];
};

const Injection = () => {
  const swiperRef = useRef<SwiperRef>(null);

  const handleNext = () => {
    swiperRef.current?.swiper.slideNext();
  };

  const handlePrev = () => {
    swiperRef.current?.swiper.slidePrev();
  };

  const enhancedSlides = getSlidesWithDummy();



  return (
    <div>
      {/* Main Content */}
      <section className="relative w-full xs:h-[800px] sm:h-[850px] md:h-[900px] xl:h-[1024px] overflow-hidden bg-gradient-to-b from-[#D65263] from-0% via-[#702B34] to-[#702B34] to-68%">
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

        {/*Elemen*/}
        <Image
          src="https://raw.githubusercontent.com/EPW16-ITS/assets/refs/heads/main/GirUngu.svg"
          alt="gir_ungu"
          width={0}
          height={0}
          className="absolute xs:h-[100px] xs:w-[100px] sm:w-[100px] sm:h-[100px] sm:top-0 md:w-[250px] md:h-[250px] md:top-[150px] md:right-5 xl:w-[400px] xl:h-[400px] xl:top-[155px] 2xl:w-[500px] 2xl:h-[500px] xl:right-8 2xl:top-[132px] 2xl:right-20"
        />
        <Image
          src="https://raw.githubusercontent.com/EPW16-ITS/assets/refs/heads/main/GirMerah.svg"
          alt="gir_ungu"
          width={0}
          height={0}
          className="absolute xs:h-[100px] xs:w-[100px] sm:w-[100px] sm:h-[100px] sm:top-0 md:w-[250px] md:h-[250px] md:top-[40%] md:right-[20%] xl:w-[400px] xl:h-[400px] xl:top-[45%] xl:right-[20%] 2xl:w-[500px] 2xl:h-[500px] 2xl:top-[42%] 2xl:right-[21%]"
        />
        <Image
          src="https://raw.githubusercontent.com/EPW16-ITS/assets/refs/heads/main/GigiKuningEmas.svg"
          alt="gir_ungu"
          width={0}
          height={0}
          className="xs:h-[100px] xs:w-[100px] sm:w-[100px] sm:h-[100px] sm:top-0 md:w-[250px] md:h-[250px] md:top-[40%] md:right-[20%] xl:w-[400px] xl:h-[400px] xl:top-[45%] xl:right-[20%] 2xl:w-[450px] 2xl:h-[450px] 2xl:top-0 2xl:right-0"
        />
        <Image
          src="https://raw.githubusercontent.com/EPW16-ITS/assets/refs/heads/main/RackKuning.svg"
          alt="rack_kuning"
          width={0}
          height={0}
          className="absolute xs:h-[100px] xs:w-[100px] sm:w-[100px] sm:h-[100px] sm:top-0 md:w-[250px] md:h-[250px] md:top-[75%] md:left-0 xl:w-[400px] xl:h-[400px] xl:top-[65%] xl:left-0 2xl:w-[500px] 2xl:h-[500px] 2xl:top-[55%] 2xl:left-0"
        />

        <Typography.CrystalUniverseRegular
          level={7}
          className="xs:text-xl sm:text-2xl md:text-2xl xl:text-4xl absolute left-1/2 transform -translate-x-1/2 xs:top-[15%] sm:top-[15%] md:top-[15%] xl:top-[11%] text-center z-40 text-[#3A1E77]"
          style={{
            WebkitTextStroke: "64px rgb(var(--color-secondary-300))"
          }}
        >
          INJECTION
        </Typography.CrystalUniverseRegular>

        {/* Rectangle Judul - Primary Fill */}
        <div className="xs:hidden sm:w-[160px] sm:h-[30px] md:w-[170px] md:h-[32px] xl:w-[257px] xl:h-[50px] 2xl:w-[257px] 2xl:h-[60px] absolute sm:left-[5%] md:left-[7%] xl:left-[5%] xs:top-[17%] sm:top-[20%] sm:transform sm:-translate-y-1/2 md:top-[28%] md:transform md:-translate-y-1/2 xl:top-[25%] xl:transform xl:-translate-y-1/2 bg-primary-400 z-40">
          <div className="w-full h-full p-2 flex items-center justify-center">
            <Typography.Poppins
              level={7}
              size="lg"
              className="text-white xs:text-xs sm:text-sm md:text-base xl:text-2xl text-center">
              What is Injection?
            </Typography.Poppins>
          </div>
        </div>

        {/* Rectangle kiri - Solid Fill */}
        <div className="xs:w-[280px] xs:h-[120px] sm:w-[600px] sm:h-[100px] md:w-[400px] md:h-[230px] xl:w-[650px] xl:h-[349px] 2xl:w-[750px] 2xl:h-[310px] absolute xs:left-1/2 xs:transform xs:-translate-x-1/2 sm:left-[5%] sm:transform sm:-translate-y-1/2 md:left-[10%] md:transform md:-translate-y-1/2 xl:left-[7%] xs:top-[20%] sm:top-[30%] md:top-[41%] xl:top-[40%] xl:transform xl:-translate-y-1/2 bg-third-50 z-30"
          style={{
            borderRadius: '0 20px 0 20px',
          }}>
          <div className="w-full h-full xs:p-3 sm:p-4 md:p-14 xl:p-16 2xl:p-20 flex items-center justify-center">
            {/* Konten untuk kiri kanan */}
            <Typography.Poppins
              level={5}
              size="base"
              className="text-fourth-400 xs:text-xs sm:text-xs md:text-base xl:text-2xl 2xl:text-2xl text-justify">
              Injection (Science Project and Innovation) merupakan salah satu sub-event dari serangkaian Engineering Physics Week (EPW) ke-16. Injection adalah kompetisi pembuatan karya tulis ilmiah inovatif. Injection akan terdiri dari 3 babak, yaitu seleksi abstrak, seleksi full paper, dan babak final.
            </Typography.Poppins>
          </div>
        </div>

        {/* Swiper*/}
        <div className="absolute z-40 xs:w-[200px] xs:h-[120px] xs:left-1/2 xs:transform xs:-translate-x-1/2 xs:top-[40%] sm:w-[150px] sm:h-[120px] sm:right-[5%] sm:transform sm:-translate-y-1/2 sm:top-[30%] md:w-[320px] md:h-[260px] md:right-[10%] md:transform md:-translate-y-1/2 md:top-[40%] xl:h-[450px] xl:right-[8%] xl:top-[45%] xl:w-[500px] 2xl:w-[500px] 2xl:h-[450px] 2xl:right-[15%] 2xl:top-[45%] 2xl:transform 2xl:-translate-y-1/2">
          <Swiper
            ref={swiperRef}
            effect={"coverflow"}
            direction={"vertical"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={2}
            spaceBetween={0}
            coverflowEffect={{
              rotate: 0,
              stretch: 24,
              depth: 30,
              modifier: 5,
              slideShadows: false,
            }}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}

            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
            className="w-full h-full"
          >
            {enhancedSlides.map((slide, index) => (
              <SwiperSlide
                key={index}
                className="flex items-center justify-center relative"
              >
                <div className="w-[200px] h-[120px] sm:w-[220px] sm:h-[120px] md:w-[320px] md:h-[203px] xl:w-[465px] xl:h-[297px] relative">
                  <Image
                    src={slide}
                    alt={`Slide ${index + 1}`}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/*Arrow Button up and down*/}
          <FaArrowAltCircleUp
            onClick={handlePrev}
            className=" absolute z-40 cursor-pointer
          text-white 
          xs:w-[15px] xs:h-[15px] xs:right-[-20%] xs:hidden
          sm:w-[15px] sm:h-[15px] sm:right-[-5%] xs:top-[40%] sm:top-[30%] sm:hidden
          md:w-[20px] md:h-[20px] md:top-[35%] md:right-[-12%] md:block
          xl:top-[37%] xl:w-[25px] xl:h-[25px] xl:right-[-9%] xl:block
          2xl:h-[25px] 2xl:right-[-10%] 2xl:w-[25px] 2xl:top-[37%] 2xl:block"
          />
          <FaArrowAltCircleUp
            onClick={handleNext}
            className=" absolute z-40 rotate-180 cursor-pointer
          text-white 
          xs:w-[15px] xs:h-[15px] xs:right-[-20%] xs:hidden
          sm:w-[15px] sm:h-[15px] sm:right-[-5%] xs:top-[40%] sm:top-[30%] sm:hidden
          md:w-[20px] md:h-[20px] md:top-[55%] md:right-[-12%] md:block
          xl:top-[55%] xl:w-[25px] xl:h-[25px] xl:right-[-9%] xl:block
          2xl:h-[25px] 2xl:right-[-10%] 2xl:w-[25px] 2xl:top-[55%] 2xl:block"
          />

          {/* Register Here Capsule - Bottom left of swiper, overlapping */}
          <div className="absolute xs:left-[-25px] xs:bottom-[-30px] sm:left-[-20px] sm:bottom-[-18px] md:left-[-40px] md:bottom-[-25px] xl:left-[-50px] xl:bottom-[-30px] xs:w-[65px] xs:h-[38px] sm:w-[90px] sm:h-[38px] md:w-[180px] md:h-[65px] xl:w-[221px] xl:h-[79px] bg-fourth-25 border-4 border-neutral-800 z-50 flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity"
            style={{
              borderRadius: '45% 55% 48% 52% / 38% 42% 58% 62%',
            }}>
            <Typography.Homica
              className="xs:text-xs sm:text-sm md:text-xl xl:text-2xl text-neutral-800 text-center"
              level={9}>
              Register Here
            </Typography.Homica>
          </div>

          {/* Guidebook Capsule - Bottom right of swiper, overlapping */}
          <div className="absolute border-4 xs:right-[-25px] xs:bottom-[-30px] sm:right-[-20px] sm:bottom-[-18px] md:right-[-40px] md:bottom-[-23px] xl:right-[-50px] xl:bottom-[40px] xs:w-[60px] xs:h-[36px] sm:w-[85px] sm:h-[35px] md:w-[160px] md:h-[60px] xl:w-[195px] xl:h-[73px] bg-fourth-25 border-neutral-100 z-50 flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity"
            style={{
              borderRadius: '52% 48% 45% 55% / 60% 35% 80% 40%',
            }}
          >
            <a
              href="https://drive.google.com/drive/folders/1Xh0l0XYWoMT8_yDMxM9aW8Vu0kTWWCEA?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full h-full"
            >
              <Typography.Homica
                className="xs:text-xs sm:text-sm md:text-xl xl:text-2xl text-neutral-800 text-center"
                level={9}
              >
                Guidebook
              </Typography.Homica>
            </a>
          </div>
        </div>


        {/* Prizepool Component - Integrated and positioned to the right for md, lg, xl */}
        <div className="absolute xs:left-1/2 xs:transform xs:-translate-x-1/2 xs:bottom-[35%] sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:bottom-[45%] md:right-[11%] md:left-auto md:transform-none md:bottom-[15%] xl:left-auto xl:transform-none 2xl:left-auto 2xl:transform-none xl:right-[13%] 2xl:right-[19%] xl:bottom-[8%] z-40">
          {/* Container div untuk md dan lg yang membuat semua centered */}
          <div className="md:flex md:flex-col md:items-center md:justify-center md:relative lg:flex lg:flex-col lg:items-center lg:justify-center lg:relative">
            {/* PRIZEPOOL Text */}

            {/* Main Rectangle Component */}
            <div
              className="xs:w-[130px] xs:h-[35px] sm:w-[250px] sm:h-[90px] md:w-[300px] md:h-[100px] xl:w-[340px] xl:h-[100px] bg-fourth-100/70 rounded-[33px] flex items-center justify-center md:mb-4 xl:mb-4"
              style={{
                boxShadow: '0px 4px 4px rgba(0, 0, 0, 10)',
              }}
            >
              <Typography.Homica
                level={5}
                className="text-third-50 text-center xs:text-xl sm:text-3xl md:text-4xl xl:text-4xl 2xl:text-4xl"
              >
                Rp. 14.000.000
              </Typography.Homica>
            </div>

            <div className="xs:absolute xs:left-1/2 xs:transform xs:-translate-x-1/2 xs:top-[-20%] sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:top-[-20%] md:left-[35%] md:top-[-15%] absolute xl:left-[20%] xl:top-[-20%] 2xl:left-[30%] 2xl:top-[-20%] z-50">
              <Typography.Homica
                level={4}
                className="text-fourth-25 md:text-center xs:text-sm sm:text-4xl md:text-4xl xl:text-6xl 2xl:text-6xl"
                style={{
                  textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                }}
              >
                PRIZEPOOL
              </Typography.Homica>
            </div>
            <div className="xs:absolute xs:left-1/2 xs:transform xs:-translate-x-1/2 xs:top-[-20%] sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:top-[-20%] md:left-[70%] md:top-[-15%] absolute xl:left-[80%] xl:top-[-20%] 2xl:left-[75%] 2xl:top-[-20%] z-50">
              <Typography.Homica
                level={4}
                className="text-fourth-25 md:text-center xs:text-sm sm:text-4xl md:text-4xl xl:text-6xl 2xl:text-6xl"
                style={{
                  textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                }}
              >
                ?!
              </Typography.Homica>
            </div>

            {/* Buttons Container for md and lg */}
            <div className="xs:flex md:flex md:gap-4 md:relative lg:flex lg:gap-4 lg:relative">
              <Button.Primary
                type="default"
                suffix={<FaArrowRight size={20} className="xs:size-3 xs:ml-1 sm:ml-2 md:ml-3 lg:ml-4" />}
                className="flex xs:text-xs sm:text-xs md:text-sm lg:text-base xs:absolute sm:absolute sm:bottom-[-40%] sm:right-[0%] md:relative md:bottom-auto md:right-auto lg:relative lg:bottom-auto lg:right-auto xl:relative xl:bottom-auto xl:right-auto xs:bottom-[-100%]  xs:right-[-60%] items-center justify-center xs:w-[100px] xs:h-[28px] sm:w-[120px] sm:h-[32px] md:w-[130px] md:h-[44px] lg:w-[135px] lg:h-[46px] xl:w-[140px] xl:h-[48px] xs:px-2 xs:py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 lg:px-5 lg:py-2.5 xl:px-6 xl:py-3 z-[30]"
              >
                <a href="https://twibbo.nz/injectionepw16" className="xl:text-base lg:text-base xs:text-xs sm:text-xs xs:whitespace-nowrap sm:whitespace-nowrap">Twibbon</a>
              </Button.Primary>
              <Button.Primary
                type="default"
                suffix={<FaArrowRight size={20} className="xs:size-3 xs:ml-1 sm:ml-2 md:ml-3 lg:ml-4" />}
                className="flex xs:text-xs sm:text-xs md:text-sm lg:text-base xs:absolute sm:absolute sm:bottom-[-40%] sm:left-[0%] md:relative md:bottom-auto md:left-auto lg:relative lg:bottom-auto lg:left-auto xl:relative xl:bottom-auto xl:right-auto xs:bottom-[-100%]  xs:left-[-60%] items-center justify-center xs:w-[100px] xs:h-[28px] sm:w-[120px] sm:h-[32px] md:w-[130px] md:h-[44px] lg:w-[135px] lg:h-[46px] xl:w-[140px] xl:h-[48px] xs:px-2 xs:py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 lg:px-5 lg:py-2.5 xl:px-6 xl:py-3 z-[30]"
              >
                <a href="#" className="xl:text-base lg:text-base xs:text-xs sm:text-xs xs:whitespace-nowrap sm:whitespace-nowrap">KEBUTUHAN</a>
              </Button.Primary>
            </div>
          </div>
        </div>

        {/* Benefit Group Section - All benefits grouped in one div */}
        <div className="absolute xs:left-1/2 xs:transform xs:-translate-x-1/2 xs:top-[75%] xs:w-[300px] xs:h-[180px] sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:top-[65%] sm:w-[450px] sm:h-[240px] md:left-[28%] md:top-[60%] xl:left-[29%] xl:top-[60%] xl:w-[674px] xl:h-[280px] md:w-[150px] md:h-[90px] z-30">
          {/* Rectangle Sertifikat Nasional - Left */}
          <div className="2xl:p-4 xs:rounded-[33px] sm:rounded-[33px] absolute xs:left-[10%] xs:top-[10%] sm:left-[0%] sm:top-[25%] md:left-[55%] md:top-[30%] xs:w-[120px] xs:h-[40px] sm:w-[200px] sm:h-[60px] md:w-[250px] md:h-[60px] xl:left-[0%] xl:top-[25%] xl:w-[324px] xl:h-[77px] bg-fifth-50 border-2 border-primary-300 md:rounded-[33px] xl:rounded-[33px] flex items-center justify-center">
            <Image
              src="https://raw.githubusercontent.com/EPW16-ITS/assets/refs/heads/main/PlateMerah.svg"
              alt="platemerah"
              width={40}
              height={40}
              className="2xl:w-[35px] 2xl:h-[35px] xl:w-[35px] xl:h-[35px] md:w-[28px] md:h-[28px] pr-2" />
            <Typography.Poppins
              level={5}
              size="lg"
              className="text-primary-300 text-center xs:text-xs sm:text-xl md:text-lg xl:text-2xl">
              Sertifikat Nasional
            </Typography.Poppins>
          </div>

          {/* Rectangle Public Exhibition - Right */}
          <div className="2xl:p-4 xs:rounded-[33px] sm:rounded-[33px] absolute xs:right-[10%] xs:top-[10%] sm:right-[0%] sm:top-[25%] md:right-[55%] md:top-[30%] xs:w-[120px] xs:h-[40px] sm:w-[200px] sm:h-[60px] md:w-[250px] md:h-[60px] xl:right-[0%] xl:top-[25%] xl:w-[324px] xl:h-[77px] bg-fifth-50 border-2 border-primary-300 md:rounded-[33px] xl:rounded-[33px] flex items-center justify-center">
            <Image
              src="https://raw.githubusercontent.com/EPW16-ITS/assets/refs/heads/main/PlateMerah.svg"
              alt="platemerah"
              width={40}
              height={40}
              className="2xl:w-[35px] 2xl:h-[35px] xl:w-[35px] xl:h-[35px] md:w-[28px] md:h-[28px] pr-2" />
            <Typography.Poppins
              level={5}
              size="lg"
              className="text-primary-300 text-center xs:text-xs sm:text-xl md:text-lg xl:text-2xl">
              Public Exhibition
            </Typography.Poppins>
          </div>

          {/* Rectangle Judul Benefit - Paling depan, menumpuk di atas */}
          <div className="absolute left-1/2 transform -translate-x-1/2 xs:top-[0%] xs:w-[80px] xs:h-[30px] sm:top-[5%] sm:w-[150px] sm:h-[55px] md:top-[-15%] md:left-[50%] md:w-[150px] md:h-[50px] xl:top-[5%] xl:w-[219px] xl:h-[71px] bg-fifth-400 flex items-center justify-center z-50">
            <Typography.Poppins
              level={1}
              size="lg"
              className="text-secondary-50 text-center xs:text-xs sm:text-3xl md:text-3xl xl:text-6xl">
              Benefit
            </Typography.Poppins>
          </div>

          {/* Open Registration Rectangle - Bottom center of benefit group */}
          <div className="xl:rounded-3xl absolute left-1/2 transform -translate-x-1/2 xs:top-[90px] xs:w-[260px] xs:h-[80px] sm:top-[170px] sm:w-[300px] sm:h-[100px] md:top-[170px] md:w-[340px] md:h-[115px] xl:top-[170px] xl:w-[361px] xl:h-[127px] bg-fourth-25 rounded-xl z-40 xs:p-1 sm:p-2 md:p-2 xl:p-2 border-2 border-black flex flex-col items-center">
            {/* Kapsul Open Registration */}
            <div className="xs:w-[140px] xs:h-[20px] sm:w-[180px] sm:h-[26px] md:w-[195px] md:h-[28px] xl:w-[210px] xl:h-[30px] border-2 border-black bg-secondary-400 rounded-full flex items-center justify-center xs:mb-1 sm:mb-2 md:mb-2.5 xl:mb-3">
              <Typography.Poppins
                level={7}
                className="text-secondary-25 text-center xs:text-xs sm:text-sm sm:font-medium md:text-base md:font-semibold xl:text-xl xl:font-bold">
                Open Registration
              </Typography.Poppins>
            </div>

            {/* Tanggal */}
            <div className="flex items-center justify-center xs:h-[40px] sm:h-[50px] md:h-[55px] xl:h-[60px]">
              <Typography.Poppins
                level={5}
                size="lg"
                className="text-fourth-900 text-center xs:text-xs sm:text-xl md:text-2xl xl:text-3xl">
                23 Juni - 22 Juli 2025
              </Typography.Poppins>
            </div>
          </div>
        </div>

        {/* Custom Styles untuk Swiper */}
        <style jsx global>{`
          .swiper-slide {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          
          .swiper-pagination {
           position: absolute;
           top: 95% !important; 
           left: 48% !important;
           right: auto !important;
           transform: translateX(-50%);
           width: auto !important;
           display: flex !important;
           gap: 8px; /* jarak antar bullet */
          }
          
          .swiper-pagination-bullet {
            background: #FBD921 !important;
            opacity: 0.5;
          }
          
          .swiper-pagination-bullet-active {
            opacity: 1 !important;
          }

          /* Responsive pagination */
          @media (max-width: 768px) {
            .swiper-pagination {
              right: 10px !important;
            }
          }
        `}</style>
      </section>
    </div>
  );

};

export default Injection;