import Typography from "@/components/Typography";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import Link from "next/link";
import { useState, useEffect } from "react";

const BidangMinat = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  
  const cards = [
    {
      title: "Rekayasa Instrumentasi",
      description: "Bidang minat yang mempelajari perancangan dan pengembangan sistem instrumentasi untuk berbagai aplikasi teknik.",
    },
    {
      title: "Rekayasa Energi dan Pengondisian Lingkungan",
      description: "Bidang minat yang berfokus pada pengembangan dan optimasi sistem energi terbarukan dan efisiensi energi.",
    },
    {
      title: "Rekayasa Bahan",
      description: "Bidang minat yang berhubungan dengan rancang bangun dan analisis kinerja bahan. Bidang minat ini sangat bergantung pada perkembangan pengetahuan dan terapan bahan di satu sisi dan terapan bahan sesuai sifat serta pemakaiannya di sisi lain.",
    },
    {
      title: "Vibrasi dan Akustik",
      description: "Bidang minat yang mempelajari pengendalian kebisingan, akustik arsitektur, dan analisis getaran mekanis.",
    },
    {
      title: "Rekayasa Fotonika",
      description: "Bidang minat yang berhubungan dengan teknologi laser, optik, dan aplikasi fotonika dalam industri.",
    }
  ];

  // Check if desktop view
  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 768); // md breakpoint
    };
    
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  const cardsPerView = isDesktop ? 3 : 1;
  const maxIndex = Math.max(0, cards.length - cardsPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const goToSlide = (index:number) => {
    const adjustedIndex = Math.min(index, maxIndex);
    setCurrentIndex(adjustedIndex);
  };

  return (
    <div>
      {/* ---------- SECTION: BIDANG MINAT ---------- */}
      <div className="overflow-hidden relative w-full min-h-screen bg-gradient-to-b from-[#F85F73] to-[#2F126D]">
        
        {/* Background Pattern */}
        <div className="absolute inset-0 z-0 opacity-[0.04]">
          <Image
            src="https://raw.githubusercontent.com/EPW16-ITS/assets/refs/heads/main/Pattern.svg"
            alt="Pattern"
            fill
            className="object-cover w-full h-full"
            priority
          />
        </div>

        {/* Decorative Elements */}
        <div className="absolute z-10 opacity-70 w-[612px] h-[612px] overflow-hidden" style={{ top: "-250px", right: "-250px" }}>
          <Image
            src="https://raw.githubusercontent.com/EPW16-ITS/assets/refs/heads/main/GerigiUngu.svg"
            alt="Gerigi Ungu"
            width={612}
            height={612}
            className="object-cover w-full h-full"
            priority
          />
        </div>

        <div className="absolute z-10 opacity-70 w-[115px] h-[115px] overflow-hidden" style={{ top: "287.98px", left: "89px" }}>
          <Image
            src="https://raw.githubusercontent.com/EPW16-ITS/assets/refs/heads/main/gerigibiru.svg"
            alt="Gerigi Biru"
            width={140}
            height={140}
            className="object-cover w-full h-full"
            priority
          />
        </div>

        <div className="absolute z-10 opacity-70 w-[191.21px] h-[191.19px] overflow-hidden" style={{ top: "166px", left: "124.56px" }}>
          <Image
            src="https://raw.githubusercontent.com/EPW16-ITS/assets/main/jamEmas_BG.svg"
            alt="Jam Emas"
            width={191}
            height={191}
            className="object-cover w-full h-full"
            priority
          />
        </div>

        <div className="absolute z-10 opacity-70 w-[286px] h-[191px] overflow-hidden" style={{ top: "494.02px", right: "145px" }}>
          <Image
            src="https://raw.githubusercontent.com/EPW16-ITS/assets/refs/heads/main/RackKuning.svg"
            alt="Rack Kuning"
            width={286}
            height={191}
            className="object-cover w-full h-full"
            priority
          />
        </div>

        <div className="absolute z-10 opacity-70 w-[140px] h-[139.94px] overflow-hidden" style={{ top: "400px", right: "242.97px" }}>
          <Image
            src="https://raw.githubusercontent.com/EPW16-ITS/assets/refs/heads/main/gerigikuning.svg"
            alt="Gerigi Kuning"
            width={140}
            height={140}
            className="object-cover w-full h-full"
            priority
          />
        </div>

        {/* Main Content Container */}
        <div className="overflow-hidden relative z-20 container mx-auto px-4 py-16 flex flex-col justify-center min-h-screen">
          
          {/* Section Header */}
          <div className="text-center mb-8">
            <div 
              className="absolute"
              style={{
                top: "25%",
                left: "50%",
                transform: "translateX(-50%) translateY(-25%)",
                width: "410px",
                height: "50px",
              }}
            >
              <Typography.CrystalUniverseOblique
                level={6}
                className="text-[#FBD921] text-[36px] text-center leading-[50px]"
              >
                Bidang Minat
              </Typography.CrystalUniverseOblique>
            </div>
          </div>

          {/* Subheader */}
          <div className="text-center mb-12 mt-16">
            <div className="inline-block relative">
              {/* Outline Layer (gradasi ungu) */}
              <div 
                className="absolute inset-0 font-[HOMICA] text-[16px] font-black leading-tight"
                style={{
                  WebkitTextStroke: '1px transparent',
                  background: 'linear-gradient(to right, #4D2C72, #6F40A5, #4D2C72)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent',
                }}
              >
                <div>terdapat 5 bidang minat pada</div>
                <div>Teknik Fisika ITS</div>
              </div>

              {/* Text Fill Layer (gradasi kuning-putih-kuning) */}
              <div 
                className="relative font-[HOMICA] text-[16px] font-black leading-tight"
                style={{
                  background: 'linear-gradient(to bottom, #FBD921)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent',
                }}
              >
                <div>terdapat 5 bidang minat pada</div>
                <div>Teknik Fisika ITS</div>
              </div>
            </div>
          </div>

          {/* Cards Container */}
          <div className="relative w-full mb-8 overflow-hidden max-w-6xl mx-auto">
            <div className="relative">
              {/* Cards Slider */}
              <div 
                className="flex transition-transform duration-300 ease-in-out"
                style={{ 
                  width: `${cards.length * (100 / cardsPerView)}%`,
                  transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`
                }}
              >
                {cards.map((card, index) => (
                  <div key={index} className="flex-shrink-0 w-full px-2 xs:px-3 sm:px-4 md:w-1/3 md:px-3">
                    {/* Border wrapper dengan gradasi dan rounded */}
                    <div className="rounded-lg p-[4px] bg-gradient-to-r from-[#4D2C72] via-[#6F40A5] to-[#4D2C72]">
                      {/* Isi Card */}
                      <div className="relative bg-[#A784CE] rounded-lg h-[380px] xs:h-[400px] md:h-[420px] p-4 xs:p-5 md:p-6 flex flex-col gap-3 xs:gap-4 overflow-hidden">
                        {/* Lingkaran silang di keempat pojok */}
                        {[
                          { top: 8, left: 8 },
                          { top: 8, right: 8 },
                          { bottom: 8, left: 8 },
                          { bottom: 8, right: 8 },
                        ].map((pos, i) => (
                          <div key={i} className="absolute w-[12px] h-[12px] xs:w-[14px] xs:h-[14px] md:w-[16px] md:h-[16px] rounded-full" style={pos}>
                            {/* Lingkaran luar hitam */} 
                            <div className="absolute w-full h-full bg-black rounded-full z-10"></div>

                            {/* Lingkaran merah di dalam (isi tengah) */}
                            <div className="absolute w-[10px] h-[10px] xs:w-[12px] xs:h-[12px] md:w-[14px] md:h-[14px] bg-[#F85F73] rounded-full z-20 top-[1px] left-[1px]"></div>

                            {/* Lingkaran putih kecil di kiri bawah */}
                            <div
                              className="absolute bg-[#FCACB6] rounded-full z-30"
                              style={{
                                width: '7px',
                                height: '7px',
                                top: '2.5px',
                                left: '1.5px',
                              }}
                            ></div>
                            <div
                              className="absolute bg-[#F1F2F2] rounded-full z-30"
                              style={{
                                width: '4px',
                                height: '4px',
                                top: '4px',
                                left: '2px',
                              }}
                            ></div>

                            {/* Silang hitam (X) di tengah */}
                            <div
                              className="absolute w-full h-full flex items-center justify-center z-40"
                              style={{
                                fontSize: '10px',
                                fontWeight: 'bold',
                                color: 'black',
                              }}
                            >
                              ×
                            </div>
                          </div>
                        ))}

                        {/* Judul */}
                        <h3 
                          className="text-lg xs:text-xl md:text-xl font-bold mb-1 xs:mb-2"
                          style={{
                            background: 'linear-gradient(to bottom, #4D2C72)',
                            WebkitBackgroundClip: 'text',
                            backgroundClip: 'text',
                            color: 'transparent',
                          }}
                        >
                          {card.title}
                        </h3>

                        {/* Deskripsi */}
                        <p className="text-white text-sm xs:text-base md:text-base flex-grow leading-relaxed">{card.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation - Fixed position below cards */}
          <div className="flex items-center justify-center space-x-8 mt-4">
            {/* Left Arrow */}
            <button 
              className="w-10 h-10 rounded-full bg-[#DDF3FF] flex items-center justify-center cursor-pointer hover:bg-[#cce9f5] transition-colors"
              onClick={prevSlide}
            >
              <span className="text-[#78D1FE] font-bold text-xl">&#60;</span>
            </button>

            {/* Dots */}
            <div className="flex space-x-3">
              {/* Show appropriate number of dots based on screen size */}
              {Array.from({ length: isDesktop ? maxIndex + 1 : cards.length }, (_, index) => (
                <div 
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${
                    index === currentIndex ? 'bg-[#78D1FE]' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>

            {/* Right Arrow */}
            <button 
              className="w-10 h-10 rounded-full bg-[#DDF3FF] flex items-center justify-center cursor-pointer hover:bg-[#cce9f5] transition-colors"
              onClick={nextSlide}
            >
              <span className="text-[#78D1FE] font-bold text-xl">&#62;</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BidangMinat;