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

// Rectangle Button Component
const RectangleButton = ({ text, className = "", onClick }) => {
  return (
    <div 
      className={"lg:w-[180px] lg:h-[43px] bg-primary-400 border border-third-50 rounded-lg flex items-center justify-center gap-2 cursor-pointer hover:opacity-90 transition-opacity ${className}"}
      style={{
      borderRadius: '0 80px 0 80px' // Rounded kiri bawah dan kanan atas
    }}
      onClick={onClick}
    >
      <Typography.Poppins className="text-white text-sm font-medium">
        {text}
      </Typography.Poppins>
      <FaArrowCircleRight className="text-white text-lg" />
    </div>
  );
};

// Registration Button Component
const RegistrationButton = ({ text, className = "", onClick }) => {
  return (
    <div 
      className={`relative inline-block cursor-pointer hover:opacity-90 transition-opacity ${className}`}
      onClick={onClick}
    >
      {/* Main Rectangle with Gradient Background */}
      <div 
        className="border-4 border-black relative lg:w-[280px] lg:h-[100px] rounded-2xl flex items-center justify-center"
        style={{
          background: 'linear-gradient(to right, #037CB8 0%, #78D1FE 50%, #037CB8 100%)'
        }}
      >
        {/* Text with Poppins Typography */}
        <span 
          className="font-bold text-black text-wl leading-tight text-center px-4"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          {text}
        </span>
        
        {/* Top Circles (4) with Sparkling Effect */}
        <div className="absolute lg:top-2 lg:left-0 w-full flex justify-between px-8">
          {[...Array(4)].map((_, i) => (
            <div 
              key={`top-${i}`}
              className="lg:w-4 lg:h-4 rounded-full border-2 border-black relative overflow-hidden"
              style={{ 
                background: 'linear-gradient(135deg, #A7A9AC 0%, #F1F2F2 30%, #A7A9AC 60%, #F1F2F2 100%)',
                boxShadow: '0 0 8px rgba(241, 242, 242, 0.6), inset 0 1px 2px rgba(255, 255, 255, 0.8)'
              }}
            >
              {/* Sparkling highlight */}
              <div 
                className="absolute w-2 h-2 rounded-full"
                style={{
                  background: 'radial-gradient(circle, #F1F2F2 0%, transparent 70%)',
                  transform: 'translate(25%, 25%)'
                }}
              />
            </div>
          ))}
        </div>
        
        {/* Bottom Circles (4) with Sparkling Effect */}
        <div className="absolute lg:bottom-2 lg:left-0 w-full flex justify-between px-8">
          {[...Array(4)].map((_, i) => (
            <div 
              key={`bottom-${i}`}
              className="lg:w-4 lg:h-4 rounded-full border-2 border-black relative overflow-hidden"
              style={{ 
                background: 'linear-gradient(135deg, #A7A9AC 0%, #F1F2F2 30%, #A7A9AC 60%, #F1F2F2 100%)',
                boxShadow: '0 0 8px rgba(241, 242, 242, 0.6), inset 0 1px 2px rgba(255, 255, 255, 0.8)'
              }}
            >
              {/* Sparkling highlight */}
              <div 
                className="absolute top-0 left-0 w-2 h-2 rounded-full"
                style={{
                  background: 'radial-gradient(circle, #F1F2F2 0%, transparent 70%)',
                  transform: 'translate(25%, 25%)'
                }}
              />
            </div>
          ))}
        </div>
        
        {/* Left Circles (1) with Sparkling Effect */}
        <div className="absolute lg:left-2 lg:top-0 h-full flex flex-col justify-center space-y-3">
          {[...Array(1)].map((_, i) => (
            <div 
              key={`left-${i}`}
              className="lg:w-4 lg:h-4 rounded-full border-2 border-black relative overflow-hidden"
              style={{ 
                background: 'linear-gradient(135deg, #A7A9AC 0%, #F1F2F2 30%, #A7A9AC 60%, #F1F2F2 100%)',
                boxShadow: '0 0 8px rgba(241, 242, 242, 0.6), inset 0 1px 2px rgba(255, 255, 255, 0.8)'
              }}
            >
              {/* Sparkling highlight */}
              <div 
                className="absolute top-0 left-0 lg:w-2 lg:h-2 rounded-full"
                style={{
                  background: 'radial-gradient(circle, #F1F2F2 0%, transparent 70%)',
                  transform: 'translate(25%, 25%)'
                }}
              />
            </div>
          ))}
        </div>
        
        {/* Right Circles (1) with Sparkling Effect */}
        <div className="absolute lg:right-2 lg:top-0 h-full flex flex-col justify-center space-y-3">
          {[...Array(1)].map((_, i) => (
            <div 
              key={`right-${i}`}
              className="lg:w-4 lg:h-4 rounded-full border-2 border-black relative overflow-hidden"
              style={{ 
                background: 'linear-gradient(135deg, #A7A9AC 0%, #F1F2F2 30%, #A7A9AC 60%, #F1F2F2 100%)',
                boxShadow: '0 0 8px rgba(241, 242, 242, 0.6), inset 0 1px 2px rgba(255, 255, 255, 0.8)'
              }}
            >
              {/* Sparkling highlight */}
              <div 
                className="absolute top-0 left-0 w-2 h-2 rounded-full"
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
const TrapeziumInfo = ({ label, content, className = "" }) => {
  return (
    <div className={`relative flex flex-col items-center ${className}`}>
      {/* Label Rectangle */}
      <div className="relative bg-fifth-50 border-[2px] border-black rounded-md px-6 py-2 mb-[-15px] z-10">
        <Typography.Homica className="text-primary-100"
        level={8}>
          {label}
        </Typography.Homica>
      </div>
      
      {/* Trapezium with Decorative Studs */}
      <div className="relative">
        {/* Main Trapezium */}
        <div 
          className="relative w-[370px] h-[119px] flex items-center justify-center"
          style={{
            background: 'linear-gradient(to right, #3A1E77 0%, #6C37DD 50%, #3A1E77 100%)',
            clipPath: 'polygon(25% 0%, 75% 0%, 100% 100%, 0% 100%)'
          }}
        >
          {/* Content Text */}
          <div className="text-center px-4">
            <Typography.Homica className="text-white font-bold leading-tight"
            level={8}>
              {content}
            </Typography.Homica>
          </div>
          
          {/* Top Circles (3) with Sparkling Effect */}
          <div className="absolute top-2 left-0 w-full flex justify-center space-x-12">
            {[...Array(3)].map((_, i) => (
              <div 
                key={`top-${i}`}
                className="lg:w-4 lg:h-4 rounded-full border-2 border-black relative overflow-hidden"
                style={{ 
                  background: 'linear-gradient(135deg, #A7A9AC 0%, #F1F2F2 30%, #A7A9AC 60%, #F1F2F2 100%)',
                  boxShadow: '0 0 6px rgba(241, 242, 242, 0.6), inset 0 1px 2px rgba(255, 255, 255, 0.8)'
                }}
              >
                {/* Sparkling highlight */}
                <div 
                  className="absolute top-0 left-0 w-2 h-2 rounded-full"
                  style={{
                    background: 'radial-gradient(circle, #F1F2F2 0%, transparent 70%)',
                    transform: 'translate(25%, 25%)'
                  }}
                />
              </div>
            ))}
          </div>
          
          {/* Bottom Circles (5) with Sparkling Effect */}
          <div className="absolute bottom-2 left-0 w-full flex justify-between px-4">
            {[...Array(5)].map((_, i) => (
              <div 
                key={`bottom-${i}`}
                className="lg:w-4 lg:h-4 rounded-full border-2 border-black relative overflow-hidden"
                style={{ 
                  background: 'linear-gradient(135deg, #A7A9AC 0%, #F1F2F2 30%, #A7A9AC 60%, #F1F2F2 100%)',
                  boxShadow: '0 0 6px rgba(241, 242, 242, 0.6), inset 0 1px 2px rgba(255, 255, 255, 0.8)'
                }}
              >
                {/* Sparkling highlight */}
                <div 
                  className="absolute top-0 left-0 w-2 h-2 rounded-full"
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

  return (
    <section className="relative w-full min-h-[1024px] overflow-hidden bg-gradient-to-b from-[#101428] to-[#39488E] px-6 md:px-16 py-12">
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
        className="z-40 text-[#1DB2FD] text-center mb-10"
      >
        M I C R O C O N T R O L L E R
      </Typography.CrystalUniverseRegular>
      <Typography.Homica
        level={4}
        className="z-40 text-[#1DB2FD] text-center mb-10"
      >
        CONTEST
      </Typography.Homica>
      <Typography.Poppins
        level={4}
        className="z-40 text-fifth-50 text-center mb-10">
          MICON (Microcontroller Contest) merupakan kompetisi tahunan yang ditujukan bagi siswa/i SMA dan SMK sederajat dengan fokus pada bidang instrumentasi. Kompetisi ini menjadi wadah bagi siswa/i SMA/SMK/sederajat untuk mengembangkan pengetahuan tentang mikrokontroler.
      </Typography.Poppins>
        
      {/* Registration Buttons */}
      <div className="relative z-40 flex flex-col sm:flex-row items-center justify-center gap-6 mt-16 mb-16">
        <RegistrationButton 
          text="REGISTRATION HERE!" 
          onClick={handleRegistrationClick}
        />
        <RegistrationButton 
          text="GUIDEBOOK" 
          onClick={handleGuidebookClick}
        />
      </div>

      {/* Two Columns Layout - Kubu Kiri dan Kanan */}
      <div className="relative z-40 grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
        {/* Kubu Kiri - Swiper */}
        <div className="flex flex-col items-center justify-center">
          <div className="w-full max-w-[600px] h-[400px]">
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
                slideShadows: false, // Menghilangkan shadow di samping foto
              }}
              loop={true}
              pagination={{
                clickable: true,
              }}
              modules={[EffectCoverflow, Pagination, Navigation]}
              className="w-full h-full"
            >
              <SwiperSlide className="flex items-center justify-center">
                <div className="relative w-[508px] h-[295px] rounded-2xl overflow-hidden"> {/* Lebih rounded */}
                  <Image
                    src="https://raw.githubusercontent.com/EPW16-ITS/assets/main/epc0.webp"
                    alt="Injection Image 1"
                    fill
                    className="object-cover"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="flex items-center justify-center">
                <div className="relative w-[508px] h-[295px] rounded-2xl overflow-hidden"> {/* Lebih rounded */}
                  <Image
                    src="https://raw.githubusercontent.com/EPW16-ITS/assets/main/epc1.webp"
                    alt="Injection Image 2"
                    fill
                    className="object-cover"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="flex items-center justify-center">
                <div className="relative w-[508px] h-[295px] rounded-2xl overflow-hidden"> {/* Lebih rounded */}
                  <Image
                    src="https://raw.githubusercontent.com/EPW16-ITS/assets/main/epc2.webp"
                    alt="Injection Image 3"
                    fill
                    className="object-cover"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          
          {/* Rectangle Buttons di bawah Swiper */}
          <div className="flex gap-4 mt-6">
            <RectangleButton 
              text="TIMELINE" 
              onClick={handleTimelineClick}
            />
            <RectangleButton 
              text="GUIDEBOOK" 
              onClick={handleGuidebookRectangleClick}
            />
          </div>
        </div>

        {/* Kubu Kanan - Trapezium Info Content */}
        <div className="flex flex-col items-center justify-center space-y-8">
          <TrapeziumInfo 
            label="Prize Pool" 
            content="Rp 5.000.000" 
          />
          <TrapeziumInfo 
            label="Open Registration" 
            content="7 Juli 2025" 
          />
          <TrapeziumInfo 
            label="Contact Person" 
            content="02847389201" 
          />
        </div>
      </div>
    </section>
  );
};

export default Micon;