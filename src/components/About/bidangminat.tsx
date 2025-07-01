import Typography from "@/components/Typography";
import Image from "next/image";
import { useState, useEffect } from "react";

interface Card {
  title: JSX.Element;
  description: string;
}

const BidangMinat: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [cardsPerView, setCardsPerView] = useState<number>(1);

  const cards: Card[] = [
    {
      title: (
        <>
          Rekayasa<br />
          Instrumentasi
        </>
      ),
      description:
        "Bidang minat yang berhubungan dengan perancangan, manufakturing, dan pendayagunaan instrumen fisik atau sistem instrumentasi untuk kegiatan deteksi, observasi, pengukuran, kontrol automatik, komputasi dan simulasi, komunikasi atau sistem akusisi data pada eksperimen dan pengujian serta pengendalian data proses industri.",
    },
    {
      title: (
        <>
          Rekayasa Energi dan Pengondisian Lingkungan
        </>
      ),
      description:
        "Mengembangkan disiplin ilmu rekayasa termal dan energi serta aplikasinya terhadap lingkungan dengan spesifikasi penelitian dan penerapan IPTEK variabel besaran fisis termal seperti temperatur, tekanan, aliran fluida, dll. agar diperoleh kondisi lingkungan nyaman yang selanjutnya akan mampu meningkatkan kinerja sistem.",
    },
    {
      title: (
        <>
          Rekayasa<br />
          Bahan
        </>
      ),
      description:
        "Bidang minat yang berhubungan dengan rancang bangun dan analisis kinerja bahan. Bidang minat ini sangat bergantung pada perkembangan pengetahuan dan terapan bahan disatu sisi dan terapan bahan sesuai sifat serta pemakaiannya di sisi lain.",
    },
    {
      title: (
        <>
          Vibrasi dan<br />
          Akustik
        </>
      ),
      description:
        "Bidang Minat Vibrasi dan Akustik adalah bidang minat yang berhubungan dengan konsep dan karakteristik dari getaran, akustik, pencahayaan dan diaplikasikan untuk mendapatkan kondisi yang nyaman dengan memenuhi persyaratan teknis di dalam maupun diluar ruangan. Fokus riset ada di  Getaran, Kebisingan, dan Pencahayaan Bangunan.",
    },
    {
      title: (
        <>
          Rekayasa<br />
          Fotonika
        </>
      ),
      description:
        "Studi tentang hakekat fungsi dan peranan cahaya, optika, optoelektronika, dan fotonika dalam perkembangan ilmu dan teknologi merupakan kegiatan pokok dalam bidang minat ini. Studi tentang cahaya telah banyak diterapkan dalam berbagai bidang teknologi, misalnya sistem komunikasi dengan media serat optik. Fokus penelitian Rekayasa Fotonika adalah Sensor Serat Optik, Fotonika Biomedis, dan Laser.",
    },
  ];

  useEffect(() => {
    const updateCardsPerView = (): void => {
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

  const maxIndex: number = Math.max(0, cards.length - cardsPerView);

  const nextSlide = (): void => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = (): void => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const goToSlide = (index: number): void => {
    const adjustedIndex = Math.min(index, maxIndex);
    setCurrentIndex(adjustedIndex);
  };

  return (
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
      <div className="absolute z-20 opacity-70  lg:mt-[-4px] lg:ml-[1120px] lg:w-[500px] lg:h-[500px] md:mt-[-4px] md:ml-[700px] md:w-[400px] md:h-[400px] sm:mt-[20px] sm:ml-[540px] sm:w-[300px] sm:h-[300px] xs:mt-[26px] xs:ml-[249px] xs:w-[188px] xs:h-[188px] overflow-hidden" >
        <Image
          src="https://raw.githubusercontent.com/EPW16-ITS/assets/refs/heads/main/GerigiUngu%20(1).svg"
          alt="Gerigi Ungu"
          width={612}
          height={612}
          className="object-cover w-full h-full"
          priority
        />
      </div>

      <div className="absolute z-10 opacity-70 lg:ml-[-240px] lg:mt-[60px] lg:w-[761px] lg:h-[792px] md:ml-[-240px] md:mt-[70px] md:w-[650px] md:h-[670px] sm:ml-[-240px] sm:mt-[70px] sm:w-[620px] sm:h-[670px] xs:ml-[-180px] xs:mt-[95px] xs:w-[433px] xs:h-[450px] overflow-hidden">
        <Image
          src="https://raw.githubusercontent.com/EPW16-ITS/assets/refs/heads/main/jamEmas_BG%20(2).svg"
          alt="Jam Emas"
          width={191}
          height={191}
          className="object-cover w-full h-full"
          priority
        />
      </div>

      <div className="absolute rotate-[15] z-50 opacity-70 lg:w-[287px] lg:h-[191px] lg:mt-[640px] lg:ml-[960px] md:w-[287px] md:h-[191px] md:mt-[580px] md:ml-[600px] sm:w-[287px] sm:h-[191px] sm:mt-[600px] sm:ml-[500px] xs:w-[180px] xs:h-[120px] xs:mt-[570px] xs:ml-[230px] overflow-hidden" >
        <Image
          src="https://raw.githubusercontent.com/EPW16-ITS/assets/refs/heads/main/RackKuning%20(1).svg"
          alt="Rack Kuning"
          width={286}
          height={191}
          className="object-cover w-full h-full"
          priority
        />
      </div>

      {/* Main Container */}
      <div className="relative z-20 mx-auto xs:px-[1px] sm:px-3 md:px-4 lg:px-6 py-8 sm:py-10 md:py-12 lg:py-16 flex flex-col justify-center min-h-screen">

        {/* Judul */}
        <div className="text-center  mt-[70px] px-2 sm:mb-8 sm:mt-8 sm:px-4 md:mb-10 md:mt-10 lg:mb-12 lg:mt-[52px]">
          <div
            className="inline-block relative overflow-visible"
            style={{
              lineHeight: 1.2,
              minHeight: '4.5rem',
            }}
          >
            {/* Outline */}
            <div
              className="absolute inset-0 font-[HOMICA] xs:text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-black"
              style={{
                WebkitTextStroke: '8px transparent',
                background: 'linear-gradient(to right, #4D2C72, #6F40A5, #4D2C72)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
                padding: '0 8px',
              }}
            >
              Bidang Minat
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
              Bidang Minat
            </div>
          </div>
        </div>

        {/* Subjudul */}
        <div className="text-center mt-1 mb-6 px-4 md:hidden lg:hidden">
          <div className="relative inline-block text-[16px] leading-tight font-[HOMICA] font-black">
            {/* Fill (bagian atas, kuning) */}
            <div
              className="relative z-10"
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

            {/* Outline (bagian bawah, ungu) */}
            <div
              className="absolute inset-0 z-0"
              style={{
                WebkitTextStroke: '3px #4D2C72',
                color: 'transparent',
                WebkitTextFillColor: 'transparent',
              }}
            >
              <div>terdapat 5 bidang minat pada</div>
              <div>Teknik Fisika ITS</div>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="relative w-full overflow-hidden mb-8">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              width: `${(cards.length * 100) / cardsPerView}%`, // cardsPerView = 3
              transform: `translateX(-${(100 / cards.length) * currentIndex}%)`,
            }}
          >
            {cards.map((card, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-2"
                style={{
                  width: `${100 / cards.length}%`, // ← 20% untuk 5 card
                }}
              >
                <div className="rounded-lg p-[6px] lg:h-[435px] md:h-[435px] sm:h-[435px] xs:h-[390px] w-full lg:max-w-[420px] md:max-w-[420px] sm:max-w-[420px] xs:max-w-[300px]  mx-auto bg-gradient-to-r from-[#4D2C72] via-[#6F40A5] to-[#4D2C72]">
                  {/* CARD UNGU DENGAN NOISE */}
                  <div
                    className="relative rounded-lg h-full p-4 xs:p-5 md:p-6 flex flex-col gap-10 xs:gap-4 overflow-hidden"
                    style={{
                      backgroundColor: '#A784CE',
                      backgroundImage: `
                        radial-gradient(rgba(255,255,255,0.15) 4px, transparent 4px),
                        radial-gradient(rgba(0,0,0,0.15) 4px, transparent 4px)
                      `,
                      backgroundSize: '4px 4px',
                      backgroundBlendMode: 'overlay',
                    }}
                  >
                    {/* Corner Decorations */}
                    {[{ top: 8, left: 8 }, { top: 8, right: 8 }, { bottom: 8, left: 8 }, { bottom: 8, right: 8 }].map((pos, i) => (
                      <div key={i} className="absolute w-4 h-4 rounded-full" style={pos}>
                        <div className="absolute w-full h-full bg-black rounded-full z-10" />
                        <div className="absolute w-3.5 h-3.5 bg-[#F85F73] rounded-full z-20 top-[1px] left-[1px]" />
                        <div className="absolute bg-[#FCACB6] rounded-full z-30 w-[7px] h-[7px] top-[2.5px] left-[1.5px]" />
                        <div className="absolute bg-[#F1F2F2] rounded-full z-30 w-[4px] h-[4px] top-[4px] left-[2px]" />
                        <div className="absolute w-full h-full flex items-center justify-center z-40 text-black font-bold text-xs">
                          ×
                        </div>
                      </div>
                    ))}

                    {/* Title & Description */}
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
                    <p className="text-white text-sm xs:text-base md:text-base flex-grow leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigasi */}
        <div className="flex items-center z-100 justify-center space-x-4 sm:space-x-6 md:space-x-8 mt-4">
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
            className="rounded-full bg-[#DDF3FF] flex items-center justify-center cursor-pointer hover:bg-[#cce9f5] transition-colors
              w-8 h-8 text-base 
              sm:w-9 sm:h-9 sm:text-lg 
              md:w-10 md:h-10 md:text-xl 
              lg:w-12 lg:h-12 lg:text-2xl"
            onClick={nextSlide}
          >
            <span className="text-[#78D1FE] font-bold">&#62;</span>
          </button>
        </div>
        <div className="absolute -z-50 top-0 left-0 w-full h-[500px] pointer-events-none bg-gradient-to-b to-transparent from-[#F85F73]/[10000%] "></div>
      <div className="absolute -z-50 bottom-0 left-0 w-full lg:h-[200px] md:h-[150px] sm:h-[100px] xs:h-[50px] pointer-events-none bg-gradient-to-b from-transparent to-[#2F126D]/[150%] "></div>
      </div>
    </div>
  );
};

export default BidangMinat;