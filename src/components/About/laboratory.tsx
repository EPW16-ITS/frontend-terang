import Typography from "@/components/Typography";
import Image from "next/image";
import { useState, useEffect } from "react";

const Laboratory = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(1);
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  const cards = [
    {
       title: <>
          Instrumentasi, Kontrol, dan <br />
          Optimisasi
        </>,
      titleText: "Instrumentasi, Kontrol, dan Optimisasi",
      description: "Laboratorium Instrumentasi, Kontrol, dan Optimisasi merupakan bagian dari bidang...",
      longDescription: "Laboratorium Instrumentasi, Kontrol, dan Optimisasi merupakan bagian dari bidang minat Teknik Fisika, yaitu instrumentasi dan kontrol, dengan fokus pada pengembangan aplikasi, desain instrumentasi, serta sistem kontrol. Laboratorium ini menitikberatkan pada pengembangan instrumentasi yang mencakup proses manufaktur, desain, hingga penerapannya dalam berbagai bidang, mulai dari industri hingga medis. Aktivitas utamanya meliputi deteksi, observasi, pengukuran, dan akuisisi data untuk mendukung berbagai kebutuhan di dunia nyata.",
      image: "https://raw.githubusercontent.com/EPW16-ITS/assets/refs/heads/main/icho.svg", // Gambar untuk Instrumentasi
    },
    {
      title: "Rekayasa Energi dan Pengkondisian Lingkungan",
      titleText: "Rekayasa Energi dan Pengkondisian Lingkungan",
      description: "Laboratorium ini merupakan tempat khusus untuk mempelajari dan mendalami bidang...",
      longDescription: "Laboratorium ini merupakan tempat khusus untuk mempelajari dan mendalami bidang ilmu energi dan pengkondisian lingkungan (rekayasa thermal). Laboratorium ini dibagi menjadi tiga bidang minat dalam pembelajarannya, yaitu: bidang minat Rekayasa Thermal, bidang minat Renewable Energi, dan bidang minat Energi Management dan Green Building.",
      image: "https://raw.githubusercontent.com/EPW16-ITS/assets/refs/heads/main/energi.svg", // Gambar untuk Energi
    },
    {
      title: "Pengukuran, Keandalan, Risiko, dan Keselamatan",
      titleText: "Pengukuran, Keandalan, Risiko, dan Keselamatan",
      description: "Laboratorium ini didirikan sebagai laboratorium penunjang keilmuan...",
      longDescription: "Laboratorium ini didirikan sebagai laboratorium penunjang keilmuan di Jurusan Teknik Fisika yang mengembangkan keilmuan dibidang sistem pengukuran, kalibrasi, reability, safety, microcontroller dan embedded system. Keilmuan tersebut dipelajari untuk menunjang bidang minat di Jurusan Teknik Fisika terutama dalam hal pengukuran, pengambilan data dan pemahaman tentang sistem instrumentasi.",
      image: "https://raw.githubusercontent.com/EPW16-ITS/assets/refs/heads/main/pkrk.svg", // Gambar untuk PKRK
    },
    {
      title: <>
          Sistem Tertanam dan <br />
          Siber-Fisik
        </>,
      titleText: "Sistem Tertanam dan Siber-Fisik",
      description: "Laboratorium yang menghubungkan gagasan penelitian terbaru berbasis...",
      longDescription: "Laboratorium yang menghubungkan gagasan penelitian terbaru berbasis fisika dengan pengembangan produk/proses dalam format embedded system, skema internet-of-things, dan machine learning. Laboratorium ini memiliki 6 fokus riset diantaranya adalah Autonomous vehicle, Sistem pengereman regenerative anti-lock braking system (ABS), Test rig untuk fault detection, Monitoring keandalan sistem secara real-time, Speed sensorless control, dan Internet of things (IoT) pada industri.",
      image: "https://raw.githubusercontent.com/EPW16-ITS/assets/refs/heads/main/ecs.svg", // Gambar untuk ECS
    },
    {
      title: <>
          Rekayasa <br />
          Fotonika
        </>,
      titleText: "Rekayasa Fotonika",
      description: "Kelompok Bidang Keilmuan Rekayasa Fotonika merupakan cabang bidang...",
      longDescription: "Kelompok Bidang Keilmuan Rekayasa Fotonika merupakan cabang bidang rekayasa, yang berkaitan dengan penerapan prinsip-prinsip keilmuan Optika dalam mengembangkan suatu sistem optik / fotonik terintegrasi, untuk penggunaan pada berbagai keperluan sehari-hari. Sistem optik / fotonik ini dapat dimanfaatkan untuk berbagai keperluan monitoring proses industri, sistem pertahanan / militer, aplikasi diagnostik dan terapeutik dalam  bidang medis / pelayanan kesehatan, serta penggunaan pada bidang pertanian dan peternakan untuk pemastian kualitas dan keaslian produk pengolahan hasil pertanian / peternakan.",
      image: "https://raw.githubusercontent.com/EPW16-ITS/assets/refs/heads/main/foton.svg", // Gambar untuk Foton
    },
    {
      title: <>
          Material <br />
          Fungsional Maju
        </>,
      titleText: "Material Fungsional Maju",
      description: "Laboratorium Rekayasa Bahan merupakan sarana pendukung untuk melakukan...",
      longDescription: "Laboratorium Rekayasa Bahan merupakan sarana pendukung untuk melakukan kegiatan pendidikan dan pengajaran, penelitian dan pengabdian kepada masyarakat dalam hal yang berkaitan dengan rekayasa bahan. Bidang rekayasa bahan mempelajari berbagai pengetahuan material yang meliputi pengembangan dan penerapan pengetahuan mengenai komposisi, struktur, pemrosesan, dan karakterisasi bahan yang sesuai dengan sifat-sifat dan terapannya. Termasuk juga ke dalamnya analisis kinerja sistem dan pemilihan material untuk sistem tertentu.Bidang rekayasa bahan yang dikembangkan oleh Lab. Rekayasa Bahan adalah bahan semikonduktor dan bahan lain.",
      image: "https://raw.githubusercontent.com/EPW16-ITS/assets/refs/heads/main/bahan.svg", // Gambar untuk Bahan
    },
  ];

  useEffect(() => {
    const updateCardsPerView = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setCardsPerView(3);
      } else if (width >= 768) {
        setCardsPerView(2);
      } else {
        setCardsPerView(1);
      }
    };
    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  const maxIndex = Math.max(0, cards.length - cardsPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const goToSlide = (index: number) => {
    const adjustedIndex = Math.min(index, maxIndex);
    setCurrentIndex(adjustedIndex);
  };

  const handleCardClick = (index: number) => {
    setSelectedCard(index);
  };

  const closePopup = () => {
    setSelectedCard(null);
  };

  return (
    <div className="overflow-hidden relative w-full min-h-screen bg-[#2F126D]">
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

      <div className="absolute inset-0 z-20 lg:hidden md:w-[1020px] md:h-[800px] md:mt-[13px] sm:w-[764px] sm:h-[600px] sm:mt-[13px]  xs:w-[360px] xs:h-[304px] xs:mt-[13px] opacity-70">
    <Image
      src="https://raw.githubusercontent.com/EPW16-ITS/assets/refs/heads/main/Group%2037378.svg"
      alt="Group 37378"
      fill
      className="object-cover w-full h-full"
      priority
    />
</div>

<div className="absolute inset-0 z-20 hidden lg:block lg:w-[1600px] lg:h-[840px] lg:mt-[18px] lg:ml-[-20px]">
    <Image
      src="https://raw.githubusercontent.com/EPW16-ITS/assets/refs/heads/main/Group%2037377.svg"
      alt="Group 37377"
      fill
      className="object-cover w-full h-full"
      priority
    />
</div>


      {/* Decorative Elements */}
      

      <div className="absolute z-20  opacity-80 lg:ml-[785px] lg:mt-[240px] lg:w-[985px] lg:h-[985px] md:ml-[560px] md:mt-[260px] md:w-[700px] md:h-[700px] sm:ml-[400px] sm:mt-[400px] sm:w-[500px] sm:h-[500px] xs:ml-[184px] xs:mt-[200px] xs:w-[323px] xs:h-[323px] overflow-hidden">
        <Image
          src="https://raw.githubusercontent.com/EPW16-ITS/assets/refs/heads/main/GerigiKuning612x612.svg"
          alt="Gerigi Kuning Besar"
          width={191}
          height={191}
          className="object-cover w-full h-full"
          priority
        />
      </div>

      <div className="absolute z-10 opacity-50 lg:w-[491px] lg:h-[491px] lg:mt-[494px] lg:ml-[2px] md:w-[400px] md:h-[400px] md:mt-[500px] md:ml-[-4px] sm:w-[300px] sm:h-[300px] sm:mt-[600px] sm:ml-[-10px] xs:w-[159px] xs:h-[159px] xs:mt-[480px] xs:ml-[-30px] overflow-hidden">
        <Image
          src="https://raw.githubusercontent.com/EPW16-ITS/assets/refs/heads/main/GerigiKuning612x612.svg"
          alt="Gerigi Kuning Kecil"
          width={286}
          height={191}
          className="object-cover w-full h-full"
          priority
        />
      </div>
      

      

      
        <div className="absolute  z-20 opacity-70 
  lg:w-[1700px] md:w-[1600px] sm:w-[1600px] xs:w-[467px]
  lg:bottom-[-30%] md:bottom-[-30%] sm:bottom-[-30%] xs:bottom-[-6%] left-1/2 -translate-x-1/2
  lg:h-auto md:h-auto sm:h-auto xs:h-auto
  overflow-hidden pointer-events-none">
  <Image
    src="https://raw.githubusercontent.com/EPW16-ITS/assets/refs/heads/main/komponen%20bawah%20(1).svg"
    alt="Komponen Bawah"
    width={1800}
    height={492}
    className="w-full h-auto object-cover"
    priority
  />
</div>



      <div className="absolute z-10 bottom-0 left-0 w-full lg:h-[300px] md:h-[150px] sm:h-[100px] xs:h-[150px] pointer-events-none bg-gradient-to-b  from-transparent to-[#1DB2FD]/[200%] "></div>
      <div className="absolute z-30 bottom-0 left-0 w-full lg:h-[80px] md:h-[60px] sm:h-[40px] xs:h-[30px] pointer-events-none bg-gradient-to-b  from-transparent  to-[#FBD921]/[70%]  "></div>
      

      {/* Main Container */}
      <div className="relative z-20 mx-auto xs:px-[1px] sm:px-3 md:px-4 lg:px-6 py-8 sm:py-10 md:py-12 lg:py-16 flex flex-col justify-center min-h-screen">

        {/* Judul */}
        <div className="text-center xs:mt-[10px] px-2 sm:mb-8 sm:mt-8 sm:px-4 md:mb-10 md:mt-10 lg:mb-12 lg:mt-[52px]">
          <div
            className="inline-block relative overflow-visible"
            style={{
              lineHeight: 1.2,
              minHeight: '4.5rem',
            }}
          >
            {/* Outline */}
            <div
              className="absolute  inset-0 font-[HOMICA] xs:text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-black"
              style={{
                WebkitTextStroke: '8px transparent',
                background: 'linear-gradient(to right, #4D2C72, #6F40A5, #4D2C72)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
                padding: '0 8px',
              }}
            >
              Laboratorium
            </div>

            {/* Fill */}
            <div
              className="relative font-[HOMICA] z-10 xs:text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-black"
              style={{
                background: 'linear-gradient(to bottom, #FBD921, #F2E4CE, #FBD921)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
                padding: '0 8px',
              }}
            >
              Laboratorium
            </div>
          </div>
        </div>

        {/* Cards */}
   <div className="relative w-full z-50 overflow-hidden mb-6">
  <div
    className="flex transition-transform duration-500 ease-in-out"
    style={{
      width: `${(cards.length * 100) / cardsPerView}%`,
      transform: `translateX(-${(100 / cards.length) * currentIndex}%)`,
    }}
  >
    {cards.map((card, index) => (
      <div
        key={index}
        className="flex-shrink-0 px-2"
        style={{
          width: `${100 / cards.length}%`,
        }}
      >
        <div className="rounded-lg p-[6px] z-50 lg:h-[400px] md:h-[435px] sm:h-[435px] xs:h-[280px] xs:w-[220px] w-full lg:max-w-[420px] md:max-w-[420px] sm:max-w-[420px] xs:max-w-[300px] mx-auto bg-gradient-to-r from-[#A784CE] via-[#A784CE] to-[#A784CE]">
          {/* CARD UNGU DENGAN NOISE */}
          <div
            className="relative rounded-lg h-full p-0 flex flex-col gap-2 overflow-hidden" // Mengurangi gap
            style={{
              backgroundColor: '#4D2C72',
              backgroundImage: `
                radial-gradient(rgba(255,255,255,0.15) 4px, transparent 4px),
                radial-gradient(rgba(0,0,0,0.15) 4px, transparent 4px)
              `,
              backgroundSize: '4px 4px',
              backgroundBlendMode: 'overlay',
            }}
          >
            {/* Gambar Laboratorium - Menutupi setengah background */}
            <Image
              src={card.image}
              alt={card.titleText}
              width={300}
              height={250}
              className="object-cover w-full xs:hidden h-[60%] mb-0" // Meningkatkan tinggi gambar
            />
            {/* Title & Description */}
            <h3
              className="text-lg xs:text-[12px] xs:text-xl md:text-xl mt-2 px-4 font-bold mb-1" // Mengurangi margin bawah
              style={{
                background: 'linear-gradient(to bottom, #DDF3FF)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              {card.title}
            </h3>
            <p className="text-[#E5CEFF] xs:text-[12px] mt-0 px-4 mb-2 xs:mb-[0px] font-[poppins] text-sm xs:text-base md:text-base flex-grow leading-relaxed">
              {card.description}
            </p>
            <button
              className="mt-1 mb-6 mx-auto bg-gradient-to-b from-[#2F126D] xs:w-[120px] w-[160px] h-[40px] xs:h-[30px] to-[#1DB2FD] xs:text-[10px] xs-mt-[0px] text-white font-[poppins] py-[2px] px-4 rounded-full"
              onClick={() => handleCardClick(index)}
            >
              Selengkapnya→ 
            </button>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>







{/* Navigasi */}
<div className="flex items-center z-50 mb-[100px]  mt-[2px] justify-center space-x-4 sm:space-x-6 md:space-x-8 mt-4">
  {/* Tombol kiri */}
  <button
    className="rounded-full bg-[#DDF3FF] flex items-center justify-center cursor-pointer hover:bg-[#cce9f5] transition-colors
      w-8 h-8 text-base 
      sm:w-9 sm:h-9 sm:text-lg 
      md:w-10 md:h-10 md:text-xl 
      lg:w-12 lg:h-12 lg:text-2xl"
    onClick={prevSlide}
  >
    <span className="text-[#78D1FE] font-bold">&#60;</span>
  </button>

  {/* Dot navigasi */}
  <div className="flex space-x-2 sm:space-x-3">
    {Array.from({ length: maxIndex + 1 }, (_, index) => (
      <div
        key={index}
        onClick={() => goToSlide(index)}
        className={`rounded-full transition-colors cursor-pointer
          w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3
          ${index === currentIndex ? 'bg-[#78D1FE]' : 'bg-white/30'}`}
      />
    ))}
  </div>

  {/* Tombol kanan */}
  <button
    className="rounded-full bg-[#DDF3FF]  flex items-center justify-center cursor-pointer hover:bg-[#cce9f5] transition-colors
      w-8 h-8 text-base 
      sm:w-9 sm:h-9 sm:text-lg 
      md:w-10 md:h-10 md:text-xl 
      lg:w-12 lg:h-12 lg:text-2xl"
    onClick={nextSlide}
  >
    <span className="text-[#78D1FE] font-bold">&#62;</span>
  </button>
</div>


        {/* Pop-Up */}
    {selectedCard !== null && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" onClick={closePopup}>
    <div className="bg-[#46177d] lg:w-[900px]  lg:h-[600px] md:w-[800px] md:h-[500px] sm:w-[600px] sm:h-[500px] xs:w-[330px] xs:h-[500px] rounded-lg relative flex flex-col" onClick={(e) => e.stopPropagation()}>
      {/* Background texture */}
      <div
        className="absolute inset-0 rounded-lg"
        style={{
          backgroundImage: `
            radial-gradient(rgba(255,255,255,0.1) 4px, transparent 4px),
            radial-gradient(rgba(0,0,0,0.1) 4px, transparent 4px)
          `,
          backgroundSize: '4px 4px',
          backgroundBlendMode: 'overlay',
        }}
      />
      
      {/* Image container - half height with smooth blended mask */}
      <div className="relative lg:h-[300px] md:h-[300px] sm:h-[200px] xs:h-[200px]  overflow-hidden">
        <img 
          src={cards[selectedCard].image} 
          alt={cards[selectedCard].titleText}
          className="w-full h-full object-cover"
          style={{
            maskImage: 'linear-gradient(to bottom, black 60%, #4D2C72 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 60%, #4D2C72 100%)',
            maskSize: '100% 100%',
            WebkitMaskSize: '100% 100%',
            maskRepeat: 'no-repeat',
            WebkitMaskRepeat: 'no-repeat'
          }}
        />
        
        {/* Transition overlay */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-[80px]"
          style={{
            background: 'linear-gradient(to bottom, transparent 0%, #4D2C72 100%)'
          }}
        />
        
        {/* Title positioned seamlessly */}
        <div className="absolute bottom-4 left-4 right-4">
          <h2 className="lg:text-[30px] md:text-[28px] sm:text-[24px] xs:text-[20px]  font-bold font-[poppins] text-[#DDF3FF]">
            {cards[selectedCard].title}
          </h2>
        </div>
      </div>
      
      {/* Description section */}
      <div className="flex-1 p-6 overflow-y-auto">
        <p className="text-[#E5CEFF] lg:text-[20px] md:text-[14px] sm:text-[14px] xs:text-[10px] font-[poppins]">
          {cards[selectedCard].longDescription}
        </p>
      </div>
    </div>
  </div>
)}

<div className="absolute -z-20 top-0 left-0 w-full h-[100px] pointer-events-none bg-gradient-to-b to-transparent from-[#2F126D]/100 "></div>


      </div>
    </div>
  );
};

export default Laboratory;