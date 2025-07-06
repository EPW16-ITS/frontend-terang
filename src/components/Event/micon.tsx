import React from "react";
import Typography from "@/components/Typography";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, EffectCoverflow } from "swiper/modules";
import { FaArrowCircleRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import { Interface } from "readline";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface RectangleButtonProps {
  text: string;
  className?: string;
  onClick?: () => void;
}

interface RegistrationButtonProps {
  text: string;
  className?: string;
  onClick?: () => void;
}

interface TrapeziumInfoProps {
  label: string;
  content: string;
  className?: string;
  isInverted?: boolean; // true for inverted trapezium
}

// Rectangle Button Component
const RectangleButton = ({ text, className = "", onClick }: RectangleButtonProps) => {
  return (
    <div
      className={`z-40 xs:w-[100px] xs:h-[22px] sm:w-[120px] sm:h-[22px] md:w-[140px] md:h-[32px] lg:w-[180px] lg:h-[43px] xl:w-[200px] xl:h-[53px] 2xl:w-[220px] 2xl:h-[63px] bg-primary-400 border border-third-50 rounded-lg flex items-center justify-center gap-1 cursor-pointer hover:opacity-90 transition-opacity ${className}`}
      style={{
        borderRadius: '0 80px 0 80px',
        pointerEvents: 'auto' // Tambahan penting biar klik selalu ditangkap
      }}
      onClick={onClick}
    >
      <Typography.Poppins
        level={8}
        className="text-white xs:text-2xs sm:text-xs md:text-sm lg:text-base xl:text-xl 2xl:text-2xl font-medium">
        {text}
      </Typography.Poppins>
      <FaArrowCircleRight size={20} className="xs:size-3 sm:size-3 md:size-4 text-white text-lg xs:text-2xl sm:text-2xl md:text-xl" />
    </div>
  );
};

// Registration Button Component
const RegistrationButton = ({ text, className = "", onClick }:RegistrationButtonProps) => {
  return (
    <div
      className={`z-45 relative inline-block cursor-pointer hover:opacity-90 transition-opacity ${className}`}
      onClick={onClick}
    >
      {/* Main Rectangle with Gradient Background */}
      <div
        className="lg:border-4 md:border-3 border-black relative 2xl:w-[300px] 2xl:h-[150px] xl:w-[280px] xl:h-[120px] lg:w-[280px] lg:h-[120px] md:w-[220px] md:h-[80px] xs:w-[97px] xs:h-[48px] sm:w-[130px] sm:h-[48px] lg:rounded-2xl md:rounded-xl xs:rounded-xl sm:rounded-xl flex items-center justify-center"
        style={{
          background: 'linear-gradient(to right, #037CB8 0%, #78D1FE 50%, #037CB8 100%)'
        }}
      >
        {/* Text with Poppins Typography */}
        <span
          className="font-bold xs:text-xs sm:text-sm md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-black leading-tight text-center px-4"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          {text}
        </span>

        {/* Top Circles (4) with Sparkling Effect */}
        <div className="absolute lg:top-2 md:top-1.5 xs:top-1 sm:top-1 lg:left-0 md:left-0 xs:left-0 sm:left-0 w-full flex justify-between lg:px-8 md:px-6 xs:px-3 sm:px-3">
          {[...Array(4)].map((_, i) => (
            <div
              key={`top-${i}`}
              className="lg:w-4 lg:h-4 md:w-3 md:h-3 xs:w-1.5 xs:h-1.5 sm:w-1.5 sm:h-1.5 rounded-full xs:border sm:border md:border-2 lg:border-2 border-black relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #A7A9AC 0%, #F1F2F2 30%, #A7A9AC 60%, #F1F2F2 100%)',
                boxShadow: '0 0 8px rgba(241, 242, 242, 0.6), inset 0 1px 2px rgba(255, 255, 255, 0.8)'
              }}
            >
              {/* Sparkling highlight */}
              <div
                className="absolute lg:w-2 lg:h-2 md:w-1.5 md:h-1.5 xs:w-0.5 xs:h-0.5 sm:w-0.5 sm:h-0.5 rounded-full"
                style={{
                  background: 'radial-gradient(circle, #F1F2F2 0%, transparent 70%)',
                  transform: 'translate(25%, 25%)'
                }}
              />
            </div>
          ))}
        </div>

        {/* Bottom Circles (4) with Sparkling Effect */}
        <div className="absolute lg:bottom-2 md:bottom-1.5 xs:bottom-1 sm:bottom-1 lg:left-0 md:left-0 xs:left-0 sm:left-0 w-full flex justify-between lg:px-8 md:px-6 xs:px-3 sm:px-3">
          {[...Array(4)].map((_, i) => (
            <div
              key={`bottom-${i}`}
              className="lg:w-4 lg:h-4 md:w-3 md:h-3 xs:w-1.5 xs:h-1.5 sm:w-1.5 sm:h-1.5 rounded-full xs:border sm:border md:border-2 lg:border-2 border-black relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #A7A9AC 0%, #F1F2F2 30%, #A7A9AC 60%, #F1F2F2 100%)',
                boxShadow: '0 0 8px rgba(241, 242, 242, 0.6), inset 0 1px 2px rgba(255, 255, 255, 0.8)'
              }}
            >
              {/* Sparkling highlight */}
              <div
                className="absolute top-0 left-0 lg:w-2 lg:h-2 md:w-1.5 md:h-1.5 xs:w-0.5 xs:h-0.5 sm:w-0.5 sm:h-0.5 rounded-full"
                style={{
                  background: 'radial-gradient(circle, #F1F2F2 0%, transparent 70%)',
                  transform: 'translate(25%, 25%)'
                }}
              />
            </div>
          ))}
        </div>

        {/* Left Circles (1) with Sparkling Effect */}
        <div className="absolute lg:left-2 md:left-1.5 xs:left-1 sm:left-1 lg:top-0 md:top-0 xs:top-0 sm:top-0 h-full flex flex-col justify-center space-y-3">
          {[...Array(1)].map((_, i) => (
            <div
              key={`left-${i}`}
              className="lg:w-4 lg:h-4 md:w-3 md:h-3 xs:w-1.5 xs:h-1.5 sm:w-1.5 sm:h-1.5 rounded-full xs:border sm:border md:border-2 lg:border-2 border-black relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #A7A9AC 0%, #F1F2F2 30%, #A7A9AC 60%, #F1F2F2 100%)',
                boxShadow: '0 0 8px rgba(241, 242, 242, 0.6), inset 0 1px 2px rgba(255, 255, 255, 0.8)'
              }}
            >
              {/* Sparkling highlight */}
              <div
                className="absolute top-0 left-0 lg:w-2 lg:h-2 md:w-1.5 md:h-1.5 xs:w-0.5 xs:h-0.5 sm:w-0.5 sm:h-0.5 rounded-full"
                style={{
                  background: 'radial-gradient(circle, #F1F2F2 0%, transparent 70%)',
                  transform: 'translate(25%, 25%)'
                }}
              />
            </div>
          ))}
        </div>

        {/* Right Circles (1) with Sparkling Effect */}
        <div className="absolute lg:right-2 md:right-1.5 xs:right-1 sm:right-1 lg:top-0 md:top-0 xs:top-0 sm:top-0 h-full flex flex-col justify-center space-y-3">
          {[...Array(1)].map((_, i) => (
            <div
              key={`right-${i}`}
              className="lg:w-4 lg:h-4 md:w-3 md:h-3 xs:w-1.5 xs:h-1.5 sm:w-1.5 sm:h-1.5 rounded-full xs:border sm:border md:border-2 lg:border-2 border-black relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #A7A9AC 0%, #F1F2F2 30%, #A7A9AC 60%, #F1F2F2 100%)',
                boxShadow: '0 0 8px rgba(241, 242, 242, 0.6), inset 0 1px 2px rgba(255, 255, 255, 0.8)'
              }}
            >
              {/* Sparkling highlight */}
              <div
                className="absolute top-0 left-0 lg:w-2 lg:h-2 md:w-1.5 md:h-1.5 xs:w-0.5 xs:h-0.5 sm:w-0.5 sm:h-0.5 rounded-full"
                style={{
                  background: 'radial-gradient(circle, #F1F2F2 0%, transparent 70%)',
                  transform: 'translate(25%, 25%)'
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Trapezium Info Component with Decorative Studs
const TrapeziumInfo = ({ label, content, className = "", isInverted = false }:TrapeziumInfoProps) => {
  const clipPathStyle = isInverted
    ? 'polygon(0% 0%, 100% 0%, 75% 100%, 25% 100%)' // Trapezium terbalik
    : 'polygon(25% 0%, 75% 0%, 100% 100%, 0% 100%)'; // Trapezium normal

  return (
    <div className={`relative flex flex-col items-center ${className}`}>
      {/* Label Rectangle */}
      <div className="xs:w-[100px] xs:h-[17px] sm:w-[140px] sm:h-[17px] md:w-[170px] md:h-[27px] lg:w-[180px] lg:h-[30px] xl:w-[200px] xl:h-[35px] 2xl:w-[250px] 2xl:h-[40px] relative bg-fifth-50 border-[2px] border-black rounded-md z-10 text-center">
        <Typography.Homica className="text-center text-primary-100 xs:text-xs sm:text-sm md:text-xl lg:text-xl xl:text-2xl 2xl:text-3xl justify-center items-center whitespace-nowrap"
          level={8}>
          {label}
        </Typography.Homica>
      </div>

      {/* Trapezium with Decorative Studs */}
      <div className="relative">
        {/* Main Trapezium */}
        <div
          className="relative xs:w-[121px] xs:h-[43px] sm:w-[141px] sm:h-[43px] lg:w-[200px] lg:h-[90px] xl:w-[230px] xl:h-[100px] 2xl:w-[270px] 2xl:h-[120px] md:w-[180px] md:h-[100px] flex items-center justify-center"
          style={{
            background: 'linear-gradient(to right, #3A1E77 0%, #6C37DD 50%, #3A1E77 100%)',
            clipPath: clipPathStyle
          }}
        >
          {/* Content Text */}
          <div className="text-center px-4 2xl:px-8">
            <Typography.Homica className="xs:text-xs sm:text-sm md:text-xl lg:text-xl xl:text-2xl 2xl:text-3xl text-white font-bold leading-tight"
              level={8}>
              {content}
            </Typography.Homica>
          </div>

          {/* Top Circles (3) with Sparkling Effect - Show on all breakpoints */}
          <div className="absolute md:top-1.5 lg:top-2 xs:top-1 sm:top-1 left-0 w-full flex justify-center md:space-x-6 lg:space-x-8 xs:space-x-3 sm:space-x-3">
            {[...Array(3)].map((_, i) => (
              <div
                key={`top-${i}`}
                className="lg:w-3 lg:h-3 md:w-2.5 md:h-2.5 xs:w-1 xs:h-1 sm:w-1 sm:h-1 rounded-full xs:border sm:border md:border-2 lg:border-2 border-black relative overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #A7A9AC 0%, #F1F2F2 30%, #A7A9AC 60%, #F1F2F2 100%)',
                  boxShadow: '0 0 6px rgba(241, 242, 242, 0.6), inset 0 1px 2px rgba(255, 255, 255, 0.8)'
                }}
              >
                {/* Sparkling highlight */}
                <div
                  className="absolute top-0 left-0 lg:w-1.5 lg:h-1.5 md:w-1 md:h-1 xs:w-0.5 xs:h-0.5 sm:w-0.5 sm:h-0.5 rounded-full"
                  style={{
                    background: 'radial-gradient(circle, #F1F2F2 0%, transparent 70%)',
                    transform: 'translate(25%, 25%)'
                  }}
                />
              </div>
            ))}
          </div>

          {/* Bottom Circles (3) with Sparkling Effect - Show on all breakpoints */}
          <div className="absolute md:bottom-1.5 lg:bottom-2 xs:bottom-1 sm:bottom-1 left-0 w-full flex justify-center md:space-x-6 lg:space-x-8 xs:space-x-3 sm:space-x-3">
            {[...Array(3)].map((_, i) => (
              <div
                key={`bottom-${i}`}
                className="lg:w-3 lg:h-3 md:w-2.5 md:h-2.5 xs:w-1 xs:h-1 sm:w-1 sm:h-1 rounded-full xs:border sm:border md:border-2 lg:border-2 border-black relative overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #A7A9AC 0%, #F1F2F2 30%, #A7A9AC 60%, #F1F2F2 100%)',
                  boxShadow: '0 0 6px rgba(241, 242, 242, 0.6), inset 0 1px 2px rgba(255, 255, 255, 0.8)'
                }}
              >
                {/* Sparkling highlight */}
                <div
                  className="absolute top-0 left-0 lg:w-1.5 lg:h-1.5 md:w-1 md:h-1 xs:w-0.5 xs:h-0.5 sm:w-0.5 sm:h-0.5 rounded-full"
                  style={{
                    background: 'radial-gradient(circle, #F1F2F2 0%, transparent 70%)',
                    transform: 'translate(25%, 25%)'
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Stacked Trapezium Info Layout Component
const StackedTrapeziumLayout = () => {
  return (
    <div className="flex flex-col items-center space-y-0">
      {/* Top Trapezium - Prize Pool */}
      <div className="relative z-30">
        <TrapeziumInfo
          label="Prize Pool"
          content="Rp 5.000.000"
          isInverted={false}
        />
      </div>

      {/* Bottom Row - Two inverted trapeziums side by side */}
      <div className="flex md:space-x-3 lg:space-x-4 space-x-4 relative -mt-4 z-20">
        <TrapeziumInfo
          label="Open Registration"
          content="7 Juli 2025"
          isInverted={true}
        />
        <TrapeziumInfo
          label="Contact Person"
          content="02847389201
          (Nama)"
          isInverted={true}
        />
      </div>
    </div>
  );
};


const Micon = () => {
  // Handler functions untuk button clicks
  const handleRegistrationClick = () => {
    console.log('Registration button clicked');
    // Tambahkan logika untuk navigasi ke halaman registrasi atau action lainnya
  };

  const handleGuidebookClick = () => {
    console.log('Guidebook button clicked');
    // Tambahkan logika untuk membuka guidebook atau action lainnya
  };

  const handleTimelineClick = () => {
    console.log('Timeline button clicked');
    // Tambahkan logika untuk membuka timeline atau action lainnya
  };

  const handleGuidebookRectangleClick = () => {
    console.log('Guidebook rectangle button clicked');
    // Tambahkan logika untuk membuka guidebook atau action lainnya
  };

  const [isTimelineModalOpen, setIsTimelineModalOpen] = useState(false);

  const timelineItems = [
    {
      icon: "GirMerah (1).svg",
      title: (
        <>
          Pendaftaran<br />Batch I
        </>
      ),
      date: "7-19 Juli 2025",
      highlight: true
    },
    {
      icon: "GirMerah (1).svg",
      title: (
        <>
          Pendaftaran<br />Batch II
        </>
      ),
      date: "21 Juli - 2 Agustus 2025"
    },
    {
      icon: "GirMerah (1).svg",
      title: (
        <>
          Pendaftaran<br />Batch III
        </>
      ),
      date: "4 - 16 Agustus 2025"
    },
    {
      icon: "GirMerah (1).svg",
      title: "Penyisihan",
      date: "17 - 31 Agustus 2025",
      highlight: true
    },
    {
      icon: "GirMerah (1).svg",
      title: "Semi Final",
      date: "6 September 2025"
    },
    {
      icon: "GirMerah (1).svg",
      title: "Pengumuman Final",
      date: "24 September 2025",
      highlight: true
    },
    {
      icon: "GirMerah (1).svg",
      title: "Final",
      date: "25 Oktober 2025",
      highlight: true
    }
  ];

  return (
    <section className="relative w-full sm:h-[800px] xs:h-[800px] md:h-[900px] lg:h-[1024px] overflow-hidden bg-gradient-to-b from-[#101428] via-[#101428] to-[#39488E] py-12">
      <AnimatePresence>
        {isTimelineModalOpen && (
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          >
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="bg-secondary-25 rounded-xl p-6 relative xs:px-4 xs:w-[70%] sm:px-20 sm:w-[70%] md:w-[70%] lg:w-[95%] xl:w-[95%] 2xl:w-[95%] pt-4"
            >
              <button
                onClick={() => setIsTimelineModalOpen(false)}
                className="absolute top-4 right-4 text-gray-600 hover:text-black text-2xl"
              >
                ✕
              </button>

              {/* Title Box */}
              <div className="absolute items-center left-1/2 transform -translate-x-1/2 top-[-15%]">
                <h2 className="bg-gradient-to-r from-[#1F0C49] to-[#78D1FE] w-[250px] h-[60px] flex items-center justify-center text-2xl font-bold text-white rounded-lg shadow-lg">
                  Timeline MICON
                </h2>
              </div>

              {/* Timeline Container */}
              <div className="relative w-full px-8 text-2xl">


                {/* Garis Horizontal (hanya tampil di md ke atas) */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.3, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="hidden lg:block absolute top-6 left-8 right-8 h-[3px] bg-gray-700 z-0 origin-left"
                />


                {/* Garis Vertikal (hanya tampil di sm dan xs) */}
                <motion.div
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ delay: 0.3, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="block lg:hidden absolute top-0 bottom-10 xs:left-[50px] sm:left-14 w-[3px] bg-gray-700 z-0 origin-top"
                />


                {/* Wrapper untuk responsif layout */}
                <div className="mt-10 relative z-10 space-y-4 sm:space-y-6 md:space-y-0">
                  {/* Layout Vertikal untuk sm dan xs, Horizontal untuk md ke atas */}
                  <div className="flex flex-col gap-6 sm:gap-6 lg:grid lg:grid-cols-7 lg:gap-10">
                    {timelineItems.map((item, index) => (
                      <motion.div
                        key={`timeline-${index}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + index * 0.1, duration: 0.4, ease: "easeOut" }}
                        className="flex items-start gap-4 lg:flex-col lg:items-center lg:gap-4 lg:text-center"
                      >
                        {/* Gambar Gir */}
                        <div className="shrink-0">
                          <Image
                            src={`https://raw.githubusercontent.com/EPW16-ITS/assets/main/${item.icon}`}
                            width={48}
                            height={48}
                            alt={item.title as string}
                            className={`w-10 h-10 sm:w-12 sm:h-12 object-contain transition-transform ${item.highlight ? 'scale-110 group-hover:scale-125' : 'group-hover:scale-110'}`}
                          />
                        </div>

                        {/* Text Keterangan */}
                        <div className="flex flex-col">
                          <Typography.Poppins
                            size="base"
                            level={2}
                            className={`
              text-black 
              text-xs sm:text-sm md:text-sm lg:text-sm xl:text-xl 2xl:text-2xl 
              leading-snug 
              ${item.highlight ? 'font-semibold' : ''}
            `}
                          >
                            {item.title}
                          </Typography.Poppins>
                          <Typography.Poppins
                            size="base"
                            level={2}
                            className={`
              text-fourth-300 
              pt-1 
              text-[10px] sm:text-xs md:text-sm lg:text-xs xl:text-base 2xl:text-lg 
              leading-tight
            `}
                          >
                            {item.date}
                          </Typography.Poppins>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>






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

      {/* Judul */}
      <Typography.CrystalUniverseRegular
        level={7}
        className="xs:text-2xs sm:text-lg md:text-xl lg:text-2xl xl:text-4xl 2xl:text-4xl z-40 text-[#1DB2FD] text-center mb-10 xs:mb-4 sm:mb-4 md:mb-6 lg:mb-8 xl:mb-10 2xl:mb-12 font-bold"
      >
        M I C R O C O N T R O L L E R
      </Typography.CrystalUniverseRegular>
      <Typography.Homica
        level={4}
        className="xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl z-40 text-[#1DB2FD] text-center mb-10 xs:mb-4 sm:mb-4 md:mb-6"
      >
        CONTEST
      </Typography.Homica>
      <Typography.Poppins
        level={4}
        className="xs:text-sm sm:text-base md:text-lg lg:text-2xl xl:text-2xl 2xl:text-2xl z-40 text-fifth-50 text-center mb-10 xs:mb-4 sm:mb-6 md:mb-8 px-5 xl:px-10 xs:leading-normal sm:leading-normal md:leading-relaxed">
        MICON (Microcontroller Contest) merupakan kompetisi tahunan yang ditujukan bagi siswa/i SMA dan SMK sederajat dengan fokus pada bidang instrumentasi.
        <br />
        Kompetisi ini menjadi wadah bagi siswa/i SMA/SMK/sederajat untuk mengembangkan pengetahuan tentang mikrokontroler.
      </Typography.Poppins>

      {/* Registration Buttons */}
      <div className="relative z-40 flex flex-col xs:flex-row sm:flex-row md:flex-row items-center justify-center gap-6 mt-16 xs:mt-0 sm:mt-2 sm:mb-6 md:mt-10 md:mb-12 lg:mt-12 lg:mb-16 xl:mt-16 xl:mb-20 2xl:mt-12 2xl:mb-12">
        <RegistrationButton
          text="REGISTRATION HERE!"
          onClick={handleRegistrationClick}
          hreg="https://bit.ly/OPREGMICONEPW16"
        />
        <RegistrationButton
          text="LINK KEBUTUHAN"
          onClick={handleGuidebookClick}
          href="https://linktr.ee/micon_epwits16"
        />
      </div>

      {/* Main Content Layout */}
      <div className="relative z-40 lg:grid lg:grid-cols-2 md:grid md:grid-cols-2 lg:gap-8 md:gap-6 lg:px-8 md:px-6 xs:mt-4 sm:mt-4 md:mt-8">

        {/* Left Section - Swiper with Buttons */}
        <div className="flex flex-col items-center justify-start space-y-6">

          {/* Swiper Container - Relative Position */}
          <div className="relative flex items-center justify-center">
            <Swiper
              effect={"coverflow"}
              direction="horizontal"
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={3}
              spaceBetween={0}
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
                <div className="relative rounded-2xl overflow-hidden xs:w-[170px] xs:h-[170px] sm:w-[200px] sm:h-[200px] md:w-[230px] md:h-[230px] lg:w-[260px] lg:h-[260px] xl:w-[290px] xl:h-[290px] 2xl:w-[300px] 2xl:h-[300px]">
                  <Image
                    src="https://raw.githubusercontent.com/EPW16-ITS/assets/main/micon3.webp"
                    alt="Injection Image 1"
                    fill
                    className="object-cover"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="flex items-center justify-center">
                <div className="relative rounded-2xl overflow-hidden xs:w-[170px] xs:h-[170px] sm:w-[170px] sm:h-[170px] md:w-[200px] md:h-[200px] lg:w-[260px] lg:h-[260px] xl:w-[290px] xl:h-[290px] 2xl:w-[300px] 2xl:h-[300px]">
                  <Image
                    src="https://raw.githubusercontent.com/EPW16-ITS/assets/main/micon1.webp"
                    alt="Injection Image 2"
                    fill
                    className="object-cover"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="flex items-center justify-center">
                <div className="relative rounded-2xl overflow-hidden xs:w-[170px] xs:h-[170px] sm:w-[170px] sm:h-[170px] md:w-[200px] md:h-[200px] lg:w-[260px] lg:h-[260px] xl:w-[290px] xl:h-[290px] 2xl:w-[300px] 2xl:h-[300px]">
                  <Image
                    src="https://raw.githubusercontent.com/EPW16-ITS/assets/main/micon2.webp"
                    alt="Injection Image 3"
                    fill
                    className="object-cover"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>

          {/* Rectangle Buttons - Now properly positioned below Swiper */}
          <div className="flex gap-4 mt-8">
            <RectangleButton
              text="TIMELINE"
              onClick={() => {
                console.log("SET MODAL TRUE");
                setIsTimelineModalOpen(true);
              }}
            />

            <RectangleButton
              text="GUIDEBOOK"
              onClick={handleGuidebookRectangleClick}
            />
          </div>
        </div>

        {/* Right Section - Stacked Trapezium Info Content */}
        <div className="flex items-center justify-center mt-8 lg:mt-0 md:mt-0">
          <StackedTrapeziumLayout />
        </div>
      </div>
    </section>
  );
};

export default Micon;
