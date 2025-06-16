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

        <Typography.CrystalUniverseRegular
          level={7}
          className="xs:text-xl sm:text-2xl md:text-2xl xl:text-4xl absolute left-1/2 transform -translate-x-1/2 xs:top-[15%] sm:top-[12%] md:top-[12%] xl:top-[10%] text-center z-40 text-[#3A1E77]"
          style={{
            WebkitTextStroke: "64px rgb(var(--color-secondary-300))"
          }}
        >
          INJECTION
        </Typography.CrystalUniverseRegular>

        {/* Rectangle Judul - Primary Fill */}
        <div className="xs:hidden sm:w-[160px] sm:h-[30px] md:w-[200px] md:h-[32px] lg:w-[257px] lg:h-[36px] xl:w-[257px] xl:h-[50px] 2xl:w-[257px] 2xl:h-[60px] absolute sm:left-[5%] md:left-[5%] xl:left-[5%] xs:top-[17%] sm:top-[20%] sm:transform sm:-translate-y-1/2 md:top-[20%] md:transform md:-translate-y-1/2 xl:top-[22%] xl:transform xl:-translate-y-1/2 bg-primary-400 z-40">
          <div className="w-full h-full p-2 flex items-center justify-center">
            <Typography.Poppins
              level={7}
              className="text-white xs:text-xs sm:text-sm md:text-base xl:text-2xl text-center">
              what is injection?
            </Typography.Poppins>
          </div>
        </div>

        {/* Rectangle Kubu kiri - Solid Fill */}
        <div className="xs:w-[280px] xs:h-[120px] sm:w-[300px] sm:h-[150px] md:w-[300px] md:h-[250px] lg:w-[517px] lg:h-[249px] xl:w-[617px] xl:h-[349px] 2xl:w-[750px] 2xl:h-[349px] absolute xs:left-1/2 xs:transform xs:-translate-x-1/2 sm:left-[5%] sm:transform sm:-translate-y-1/2 md:left-[5%] md:transform md:-translate-y-1/2 xl:left-[5%] xs:top-[20%] sm:top-[30%] md:top-[35%] xl:top-[40%] xl:transform xl:-translate-y-1/2 bg-third-50 z-30"
          style={{
            borderRadius: '0 20px 0 20px',
          }}>
          <div className="w-full h-full xs:p-3 sm:p-4 md:p-5 xl:p-6 flex items-center justify-center">
            {/* Konten untuk kiri kanan */}
            <Typography.Poppins
              level={5}
              size="lg"
              className="text-fourth-400 text-center xs:text-xs sm:text-xs md:text-base lg:text-xl xl:text-2xl 2xl:text-3xl">
              Injection (Science Project and Innovation) merupakan salah satu sub-event dari serangkaian Engineering Physics Week (EPW) ke-16. Injection adalah kompetisi pembuatan karya tulis ilmiah inovatif. Injection akan terdiri dari 3 babak, yaitu seleksi abstrak, seleksi full paper, dan babak final.
            </Typography.Poppins>
          </div>
        </div>

        {/* Swiper dengan layout yang diperbaiki */}
        <div className="xs:w-[200px] xs:h-[120px] sm:w-[230px] sm:h-[140px] md:w-[300px] md:h-[240px] xl:w-[465px] xl:h-[292px] absolute xs:left-1/2 xs:transform xs:-translate-x-1/2 sm:right-[5%] sm:transform sm:-translate-y-1/2 md:right-[10%] md:transform md:-translate-y-1/2 xl:right-[5%] 2xl:right-[10%] xs:top-[40%] sm:top-[30%] md:top-[35%] xl:top-[37%] xl:transform xl:-translate-y-1/2 2xl:top-[37%] 2xl:transform 2xl:-translate-y-1/2 z-40">
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
              <div className="xs:w-[200px] xs:h-[120px] sm:w-[230px] sm:h-[140px] md:w-[300px] md:h-[240px] xl:w-[465px] xl:h-[292px] relative overflow-hidden">
                <Image
                  src="https://raw.githubusercontent.com/EPW16-ITS/assets/main/inject1.webp"
                  alt="Injection Image 1"
                  fill
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex items-center justify-center">
              <div className="xs:w-[200px] xs:h-[120px] sm:w-[230px] sm:h-[140px] md:w-[300px] md:h-[240px] xl:w-[465px] xl:h-[292px] relative overflow-hidden">
                <Image
                  src="https://raw.githubusercontent.com/EPW16-ITS/assets/main/inject2.webp"
                  alt="Injection Image 2"
                  fill
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex items-center justify-center">
              <div className="xs:w-[200px] xs:h-[120px] sm:w-[230px] sm:h-[140px] md:w-[300px] md:h-[240px] xl:w-[465px] xl:h-[292px] relative overflow-hidden">
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
          <div className="absolute xs:left-[-10px] xs:bottom-[-15px] sm:left-[-20px] sm:bottom-[-18px] md:left-[-40px] md:bottom-[-25px] xl:left-[-50px] xl:bottom-[-30px] xs:w-[65px] xs:h-[28px] sm:w-[90px] sm:h-[38px] md:w-[180px] md:h-[65px] xl:w-[221px] xl:h-[79px] bg-fourth-25 border-2 border-neutral-800 z-50 flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity"
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
          <div className="absolute xs:right-[-10px] xs:bottom-[-15px] sm:right-[-20px] sm:bottom-[-18px] md:right-[-40px] md:bottom-[-23px] xl:right-[-50px] xl:bottom-[-25px] xs:w-[60px] xs:h-[26px] sm:w-[85px] sm:h-[35px] md:w-[160px] md:h-[60px] xl:w-[195px] xl:h-[73px] bg-fourth-25 border-2 border-neutral-800 z-50 flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity"
            style={{
              borderRadius: '52% 48% 45% 55% / 60% 35% 65% 40%',
            }}>
            <Typography.Homica
              className="xs:text-xs sm:text-sm md:text-xl xl:text-2xl text-neutral-800 text-center"
              level={9}>
              Guidebook
            </Typography.Homica>
          </div>
        </div>

        {/* Prizepool Component - Integrated and positioned to the right for md, lg, xl */}
        <div className="absolute xs:left-1/2 xs:transform xs:-translate-x-1/2 xs:bottom-[35%] sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:bottom-[45%] md:right-[5%] md:left-auto md:transform-none md:bottom-[15%] lg:right-[5%] lg:left-auto lg:transform-none lg:bottom-[15%] xl:left-auto xl:transform-none 2xl:left-auto 2xl:transform-none xl:right-[5%] 2xl:right-[10%] xl:bottom-[15%] z-40">
          {/* Container div untuk md dan lg yang membuat semua centered */}
          <div className="md:flex md:flex-col md:items-center md:justify-center md:relative lg:flex lg:flex-col lg:items-center lg:justify-center lg:relative">
            {/* PRIZEPOOL Text */}
            <div className="xs:absolute xs:left-1/2 xs:transform xs:-translate-x-1/2 xs:top-[-20%] sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:top-[-20%] md:relative md:left-auto md:transform-none md:top-auto md:mb-2 lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:top-[-20%] xl:absolute xl:left-1/2 xl:transform xl:-translate-x-1/2 xl:top-[-20%] z-50">
              <Typography.Homica
                level={4}
                className="text-fourth-25 md:text-center xs:text-sm sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                PRIZEPOOL
              </Typography.Homica>
            </div>

            {/* Main Rectangle Component */}
            <div className="xs:w-[130px] xs:h-[35px] sm:w-[250px] sm:h-[90px] md:w-[300px] md:h-[100px] lg:w-[340px] lg:h-[125px] xl:w-[365px] xl:h-[135px] bg-fourth-100 rounded-[33px] shadow-xl opacity-100 xs:flex xs:items-center xs:justify-center sm:flex sm:items-center sm:justify-center md:mb-4 lg:mb-4">
              <Typography.Homica
                level={5}
                className="text-neutral-800 text-center xs:text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                Rp. 14.000.000
              </Typography.Homica>
            </div>

            {/* Buttons Container for md and lg */}
            <div className="md:flex md:gap-4 md:relative lg:flex lg:gap-4 lg:relative">
              <Button.Primary
                type="default"
                suffix={<FaArrowRight size={20} className="xs:hidden sm:hidden"/>}
                className="flex xs:text-xs sm:text-xs md:text-sm lg:text-base xs:absolute sm:absolute sm:bottom-[-40%] sm:right-[0%] md:relative md:bottom-auto md:right-auto lg:relative lg:bottom-auto lg:right-auto xl:relative xl:bottom-auto xl:right-auto xs:bottom-[-100%]  xs:right-[-60%] items-center justify-center xs:w-[100px] xs:h-[28px] sm:w-[120px] sm:h-[32px] md:w-[130px] md:h-[44px] lg:w-[135px] lg:h-[46px] xl:w-[140px] xl:h-[48px] xs:px-2 xs:py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 lg:px-5 lg:py-2.5 xl:px-6 xl:py-3 z-[30]"
              >
                <a href="#" className="xl:text-base lg:text-base xs:text-xs sm:text-xs xs:whitespace-nowrap sm:whitespace-nowrap">Timeline</a>
              </Button.Primary>
              <Button.Primary
                type="default"
                suffix={<FaArrowRight size={20} className="xs:hidden sm:hidden"/>}
                className="flex xs:text-xs sm:text-xs md:text-sm lg:text-base xs:absolute sm:absolute sm:bottom-[-40%] sm:left-[0%] md:relative md:bottom-auto md:left-auto lg:relative lg:bottom-auto lg:left-auto xl:relative xl:bottom-auto xl:right-auto xs:bottom-[-100%]  xs:left-[-60%] items-center justify-center xs:w-[100px] xs:h-[28px] sm:w-[120px] sm:h-[32px] md:w-[130px] md:h-[44px] lg:w-[135px] lg:h-[46px] xl:w-[140px] xl:h-[48px] xs:px-2 xs:py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 lg:px-5 lg:py-2.5 xl:px-6 xl:py-3 z-[30]"
              >
                <a href="#" className="xl:text-base lg:text-base xs:text-xs sm:text-xs xs:whitespace-nowrap sm:whitespace-nowrap">Link Kebutuhan</a>
              </Button.Primary>
            </div>
          </div>
        </div>

        {/* Benefit Group Section - All benefits grouped in one div */}
        <div className="absolute xs:left-1/2 xs:transform xs:-translate-x-1/2 xs:top-[75%] xs:w-[300px] xs:h-[180px] sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:top-[65%] sm:w-[450px] sm:h-[240px] md:left-[30%] md:top-[60%] xl:left-[30%] xl:top-[60%] xl:w-[674px] xl:h-[280px] md:w-[150px] md:h-[90px] z-30">
          {/* Rectangle Sertifikat Nasional - Left */}
          <div className="xs:rounded-[33px] sm:rounded-[33px] absolute xs:left-[10%] xs:top-[10%] sm:left-[0%] sm:top-[25%] md:left-[55%] md:top-[25%] xs:w-[120px] xs:h-[40px] sm:w-[200px] sm:h-[60px] md:w-[200px] md:h-[60px] xl:left-[0%] xl:top-[25%] xl:w-[324px] xl:h-[77px] bg-fifth-50 border-2 border-primary-300 md:rounded-[33px] xl:rounded-[33px] flex items-center justify-center">
            <Typography.Poppins
              level={5}
              size="lg"
              className="text-primary-300 text-center xs:text-xs sm:text-xl md:text-xl xl:text-3xl">
              Sertifikat Nasional
            </Typography.Poppins>
          </div>

          {/* Rectangle Public Exhibition - Right */}
          <div className="xs:rounded-[33px] sm:rounded-[33px] absolute xs:right-[10%] xs:top-[10%] sm:right-[0%] sm:top-[25%] md:right-[55%] md:top-[25%] xs:w-[120px] xs:h-[40px] sm:w-[200px] sm:h-[60px] md:w-[200px] md:h-[60px] xl:right-[0%] xl:top-[25%] xl:w-[324px] xl:h-[77px] bg-fifth-50 border-2 border-primary-300 md:rounded-[33px] xl:rounded-[33px] flex items-center justify-center">
            <Typography.Poppins
              level={5}
              size="lg"
              className="text-primary-300 text-center xs:text-xs sm:text-xl md:text-xl xl:text-3xl">
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