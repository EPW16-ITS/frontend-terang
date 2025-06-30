import Typography from "@/components/Typography";
import Button from "@/components/Button";
import Image from "next/image";
import { FaArrowDown, FaArrowRight, FaBook, FaCalendar } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

interface ContactPersonInfoProps {
  phone: string;
  name: string;
}
interface OpenRegInfoProps {
  date: string;
}

interface TimelineItemProps {
  title: string;
  date: string;
  highlight?: boolean;
}

// import required modules
import { Pagination, EffectCoverflow, Autoplay, Navigation } from 'swiper/modules';

// Custom Yellow Dot with Minus Icon
const YellowMinusIcon = () => (
  <div className="flex items-center justify-center xs:w-2 xs:h-2 sm:w-2 sm:h-2 md:w-5 md:h-5 bg-yellow-400 rounded-full">
    <span className="text-black xs:text-2xs sm:text-2xs md:text-base font-bold">-</span>
  </div>
);

// Custom Blue Dot with X Icon
const BlueXIcon = () => (
  <div className="flex items-center justify-center xs:w-2 xs:h-2 sm:w-2 sm:h-2 md:w-5 md:h-5 bg-blue-500 rounded-full">
    <span className="text-white xs:text-2xs sm:text-2xs md:text-base font-bold">×</span>
  </div>
);

// Custom Circle Arrow Right Icon
const CircleArrowRightIcon = () => (
  <div className="flex items-center justify-center xs:w-2 xs:h-2 sm:w-2 sm:h-2 md:w-5 md:h-5 bg-white rounded-full xs:ml-1 sm:ml-1 md:ml-2">
    <FaArrowRight className="text-primary-300 xs:text-2xs sm:text-2xs md:text-sm" />
  </div>
);

// Timeline Item Component (Rectangle Rounded 2 sisi)
const TimelineItem = ({ title, date, highlight = false }: TimelineItemProps) => (
  <div className="flex flex-col items-center mb-4">
    <div
      className={`
        xs:w-[280px] xs:h-[50px] 
        sm:w-[320px] sm:h-[55px] 
        md:w-[380px] md:h-[60px] 
        lg:w-[420px] lg:h-[65px] 
        xl:w-[460px] xl:h-[70px] 
        2xl:w-[500px] 2xl:h-[75px]
        bg-fourth-25 border-2 border-black 
        flex flex-col items-center justify-center 
        px-4 py-2
        ${highlight ? 'shadow-lg transform scale-105' : ''}
      `}
      style={{
        borderRadius: '0 20px 0 20px'
      }}
    >
      <Typography.Poppins
        level={6}
        className={`
          text-black text-center font-semibold
          xs:text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-xl
          ${highlight ? 'font-bold' : ''}
        `}
      >
        {title}
      </Typography.Poppins>
      <Typography.Poppins
        level={7}
        className="text-gray-700 text-center xs:text-2xs sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-lg"
      >
        {date}
      </Typography.Poppins>
    </div>
  </div>
);

// Contact Person Info Component (tetap bentuk rectangle rounded, cursor text)
const ContactPersonInfo = ({ phone, name }: ContactPersonInfoProps) => (
  <div
    className="xs:w-[160px] xs:h-[30px] sm:w-[200px] sm:h-[30px] md:w-[250px] md:h-[38px] bg-secondary-400 border-[2px] border-third-50 flex items-center xs:px-2 sm:px-2 sm:py-2 md:px-3 xs:space-x-1 sm:space-x-1 md:space-x-2 cursor-text"
    style={{
      borderRadius: '20px 0 20px 0' // Rounded kiri bawah dan kanan atas
    }}
  >
    <FaWhatsapp className="xs:hidden text-white md:text-base flex-shrink-0" />
    <Typography.Poppins
      level={8}
      className="text-white xs:text-2xs sm:text-xs md:text-xs text-left truncate"
    >
      {phone} ({name})
    </Typography.Poppins>
  </div>
);

// Open Registration Info Component (tetap bentuk rectangle rounded, cursor text)
const OpenRegInfo = ({ date }: OpenRegInfoProps) => (
  <div
    className="xs:w-[200px] xs:h-[40px] sm:w-[200px] sm:h-[40px] md:w-[250px] md:h-[50px] bg-secondary-400 border-[2px] border-third-50 flex items-center justify-center xs:px-3 sm:px-3 md:px-4 cursor-text"
    style={{
      borderRadius: '0 20px 0 20px' // Rounded kiri bawah dan kanan atas
    }}
  >
    <FaCalendar className="text-white xs:text-sm sm:text-sm md:text-base flex-shrink-0 xs:mr-2 sm:mr-2 md:mr-3" />
    <Typography.Poppins
      level={5}
      className="text-white xs:text-xs sm:text-sm md:text-sm text-center"
    >
      {date}
    </Typography.Poppins>
  </div>
);

const EPC = () => {
  const [isTimelineModalOpen, setIsTimelineModalOpen] = useState(false);

  const timelineItems = [
    {
      title: "Pendaftaran dan Pengumpulan Abstrak",
      date: "23 Juni 2025 - 22 Juli 2025",
      highlight: true
    },
    {
      title: "Pengumuman Lolos Abstrak",
      date: "6 - 8 Agustus 2025"
    },
    {
      title: "Pendaftaran Full Paper Batch I",
      date: "9 Agustus - 13 September 2025",
      highlight: true
    },
    {
      title: "Pendaftaran Full Paper Batch II",
      date: "14 - 23 September 2025"
    },
    {
      title: "Pengumuman Finalis",
      date: "7 - 10 Oktober 2025",
      highlight: true
    },
    {
      title: "FINAL",
      date: "24 - 25 Oktober 2025",
      highlight: true
    }
  ];

  return (
    <div>
      {/* Timeline Modal */}
      <AnimatePresence>
        {isTimelineModalOpen && (
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
            onClick={() => setIsTimelineModalOpen(false)}
          >
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="bg-secondary-25 rounded-xl p-6 relative xs:px-4 xs:w-[90%] sm:px-6 sm:w-[85%] md:w-[80%] lg:w-[70%] xl:w-[65%] 2xl:w-[60%] pt-4 max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsTimelineModalOpen(false)}
                className="absolute top-4 right-4 text-gray-600 hover:text-black text-2xl z-10"
              >
                ✕
              </button>

              {/* Title Box */}
              <div className="flex items-center justify-center mb-8">
                <h2 className="bg-gradient-to-r from-[#702B34] to-[#1F0C49] w-[250px] h-[60px] flex items-center justify-center text-2xl font-bold text-white rounded-lg shadow-lg">
                  Timeline EPC
                </h2>
              </div>

              {/* Timeline Container - Flowchart Style */}
              <div className="relative w-full flex flex-col items-center space-y-6">
                {/* Vertical Line */}
                <motion.div
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-[3px] bg-gray-400 z-0 origin-top"
                />

                {/* Timeline Items */}
                {timelineItems.map((item, index) => (
                  <motion.div
                    key={`timeline-${index}`}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      delay: 0.5 + index * 0.15, 
                      duration: 0.5, 
                      ease: "easeOut" 
                    }}
                    className="relative z-10"
                  >
                    <TimelineItem
                      title={item.title}
                      date={item.date}
                      highlight={item.highlight}
                    />
                    
                    {/* Arrow connector (except for last item) */}
                    {index < timelineItems.length - 1 && (
                      <motion.div
                        initial={{ opacity: 0, scaleY: 0 }}
                        animate={{ opacity: 1, scaleY: 1 }}
                        transition={{ 
                          delay: 0.7 + index * 0.15, 
                          duration: 0.3 
                        }}
                        className="flex justify-center my-2"
                      >
                        <FaArrowDown className="text-gray-500 text-xl" />
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <section className="relative w-full sm:h-[800px] xs:h-[800px] md:h-[900px] overflow-hidden bg-gradient-to-b from-[#1F0C49] from-0% via-primary-300 to-[#101428] to-68% xs:px-3 sm:px-3 md:px-8 xs:py-6 sm:py-6 md:py-10">
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

        <div className="absolute xs:left-[-5%] sm:left-[-5%] md:left-[-2%]">
          <Image
            src="https://raw.githubusercontent.com/EPW16-ITS/assets/main/GerigiKuning.webp"
            alt="Gerigi Kuning"
            width={200}
            height={200}
            className="xs:w-[120px] xs:h-[120px] sm:w-[120px] sm:h-[120px] md:w-[160px] md:h-[160px]"
          />
        </div>

        {/* Rectangle Rounded Kubu Kiri - Glass Effect */}
        <div className="lg:left-[25%] sm:relative absolute xs:left-1/2 xs:transform xs:-translate-x-1/2 xs:top-[15%] sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:top-[15%] md:left-[25%] md:top-[20%] xs:w-[260px] xs:h-[249px] sm:w-[560px] sm:h-[280px] md:w-[350px] md:h-[450px] lg:w-[450px] lg:h-[534px] xl:w-[515px] xl:h-[534px] 2xl:w-[615px] 2xl:h-[454px] bg-white/20 backdrop-blur-sm border-2 border-third-50 z-30"
          style={{
            borderRadius: '0 50px 0 50px' // Sudut kanan atas dan kiri bawah rounded
          }}>
          <div className="w-full h-full xs:p-3 sm:p-3 md:p-5 flex flex-col">
            {/* Konten untuk kubu kiri */}
            <Typography.SuperComic
              level={4}
              className="text-white text-left xs:mb-0 sm:mb-0 md:mb-3 xs:text-xs sm:text-2xl md:text-3xl lg:text-5xl"
            >
              What is EPC?
            </Typography.SuperComic>
            <Typography.Poppins
              level={7}
              className="text-white text-left xs:mb-4 sm:mb-4 md:mb-6 xs:text-2xs/3 sm:text-sm md:text-base lg:text-xl"
            >
              Engineering Physics Challenge (EPC) merupakan kegiatan kompetisi tahunan tingkat nasional tentang bidang fisika, matematika terapan, dan aplikasinya dalam bidang ilmu teknik fisika yang diperuntukkan untuk siswa - siswi SMA/SMK/MA sederajatnya.
            </Typography.Poppins>
            <Typography.SuperComic
              level={4}
              className="text-white text-left xs:mb-0 sm:mb-0 md:mb-3 xs:text-xs sm:text-xl md:text-3x md:text-4xl lg:text-5xl"
            >
              Benefits?
            </Typography.SuperComic>

            {/* Benefits List */}
            <div className="xs:space-y-2 sm:space-y-2 md:space-y-3 xs:mb-0 sm:mb-0 md:mb-6">
              {/* Item 1 - Yellow dot with minus */}
              <div className="flex items-center xs:mb-0 xs:space-x-2 sm:space-x-2 md:space-x-3">
                <YellowMinusIcon />
                <Typography.Poppins
                  level={7}
                  className="text-white xs:mb-0 text-left xs:text-2xs sm:text-sm md:text-base lg:text-xl"
                >
                  Free Pass Teknik Fisika ITS
                </Typography.Poppins>
              </div>

              {/* Item 2 - Blue dot with X */}
              <div className="flex items-center xs:mb-0 xs:space-x-2 sm:space-x-2 md:space-x-3">
                <BlueXIcon />
                <Typography.Poppins
                  level={7}
                  className="text-white xs:mb-0 text-left xs:text-2xs sm:text-sm md:text-base lg:text-xl"
                >
                  Sertifikat Nasional
                </Typography.Poppins>
              </div>

              {/* Item 3 - Yellow dot with minus */}
              <div className="flex items-center xs:mb-0 xs:space-x-2 sm:space-x-2 md:space-x-3">
                <YellowMinusIcon />
                <Typography.Poppins
                  level={7}
                  className="text-white xs:mb-0 text-left xs:text-2xs sm:text-sm md:text-base lg:text-xl"
                >
                  Piala Penghargaan
                </Typography.Poppins>
              </div>

              {/* Item 4 - Blue dot with X */}
              <div className="flex items-center xs:mb-0 xs:space-x-2 sm:space-x-2 md:space-x-3">
                <BlueXIcon />
                <div className="flex flex-col">
                  <Typography.Poppins
                    level={7}
                    className="text-white xs:mb-0 text-left xs:text-2xs sm:text-sm md:text-base lg:text-xl"
                  >
                    Uang Pembinaan Hingga Jutaan Rupiah!
                  </Typography.Poppins>
                </div>
              </div>
            </div>
            {/* Buttons - Centered horizontally */}
            <div className="xs:flex sm:flex sm:flex-col sm:space-y-2 sm:space-x-0 md:flex md:flex-row md:gap-4 lg:gap-10 md:justify-center md:items-center md:w-full justify-center xs:mb-2 sm:mb-3 md:mb-4 xs:mt-8 sm:mt-[0px] md:mt-[60px] lg:mt-[10px] xl:mt-[50px]">
              {/* Timeline Button - Updated onClick */}
              <Button.Primary
                type="default"
                suffix={<FaArrowRight size={20} className="xs:size-3 xs:ml-1 sm:ml-2 md:ml-3 xl:ml-0" />}
                className="xs:px-4 xs:py-6 flex xs:absolute xs:right-[5%] xs:bottom-[5%] sm:absolute sm:right-[5%] sm:bottom-[-20%] md:relative md:bottom-0 md:right-0 md:top-0 md:left-0 items-center justify-center xs:text-2xs xs:w-[100px] xs:h-[28px] sm:w-[120px] sm:h-[32px] md:w-[130px] md:h-[44px] sm:px-3 sm:py-1.5 md:px-4 md:py-2"
                onClick={() => setIsTimelineModalOpen(true)}
              >
                <span className="xs:text-xs sm:text-xs md:text-xs xl:text-lg">TIMELINE</span>
              </Button.Primary>

              {/* Guidebook Button */}
              <Button.Primary
                type="default"
                suffix={<FaBook size={20} className="xs:size-3 xs:ml-1 sm:ml-2 md:ml-3 xl:ml-0" />}
                className="xs:px-4 xs:py-6 flex xs:absolute xs:left-[5%] xs:bottom-[5%] sm:absolute sm:left-[5%] sm:bottom-[-20%] md:relative md:bottom-0 md:left-0 md:top-0 md:right-0 items-center justify-center xs:text-2xs xs:w-[100px] xs:h-[28px] sm:w-[120px] sm:h-[32px] md:w-[130px] md:h-[44px] sm:px-3 sm:py-1.5 md:px-4 md:py-2"
              >
                <a href="https://linktr.ee/EPC16" className="xs:text-xs sm:text-xs md:text-xs xl:text-sm">KEBUTUHAN</a>
              </Button.Primary>
            </div>

            {/* Contact Person Info - Centered */}
            {/* Contact Person Info - Two contacts side by side on larger screens, stacked on mobile */}
            <div className="flex xs:flex-col xs:space-y-1 sm:flex-col sm:space-y-2 md:flex-row md:space-x-3 md:space-y-0 justify-center xs:absolute xs:bottom-[-30%] xs:left-1/2 xs:transform xs:-translate-x-1/2 sm:absolute sm:bottom-[-30%] sm:left-1/2 sm:transform sm:-translate-x-1/2 md:static md:transform-none z-55">
              <ContactPersonInfo
                phone="082264070927"
                name="Nafisha"
              />
              <ContactPersonInfo
                phone="089652659402"
                name="Yasinda"
              />
            </div>
          </div>
        </div>

        {/* JUDUL - FIXED POSITIONING */}
        <div className="absolute top-0 left-0 w-full flex items-center justify-center xs:pt-4 sm:pt-6 md:pt-8 z-40">
          <Typography.Homica
            level={4}
            className="text-transparent bg-clip-text bg-gradient-to-r from-[#FBD921] to-[#FEF9DE] text-center xs:text-4xl sm:text-5xl md:text-6xl xs:leading-tight sm:leading-tight md:leading-tight"
            style={{
              WebkitTextStroke: "2px rgb(var(--color-primary-100))"
            }}
          >
            ENGINEERING PHYSICS
            <br />
            CHALLENGE
          </Typography.Homica>
        </div>
        {/* Swiper Container */}
        <div className="absolute xs:bottom-[17%] xs:left-1/2 xs:transform xs:-translate-x-1/2 sm:bottom-[10%] sm:right-[25%] sm:transform sm:-translate-x-1/2 md:right-[-10%] lg:right-[-10%] xl:right-[-15%] 2xl:right-[-7%] md:top-[25%] xs:w-[280px] xs:h-[180px] sm:w-[280px] sm:h-[180px] md:w-[308px] md:h-[200px] lg:w-[408px] lg:h-[300px] xl:w-[508px] xl:h-[295px] xs:mb-3 sm:mb-3 md:mb-5 z-40">
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
              <div className="xl:w-[608px] xl:h-[395px] relative lg:w-[508px] lg:h-[295px] xs:w-[280px] xs:h-[180px] sm:w-[280px] sm:h-[180px] md:w-[308px] md:h-[200px] rounded-2xl overflow-hidden"> {/* Lebih rounded */}
                <Image
                  src="https://raw.githubusercontent.com/EPW16-ITS/assets/main/epc0.webp"
                  alt="Injection Image 1"
                  fill
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex items-center justify-center">
              <div className="xl:w-[608px] xl:h-[395px] relative lg:w-[508px] lg:h-[295px] xs:w-[280px] xs:h-[180px] sm:w-[280px] sm:h-[180px] md:w-[308px] md:h-[200px] rounded-2xl overflow-hidden"> {/* Lebih rounded */}
                <Image
                  src="https://raw.githubusercontent.com/EPW16-ITS/assets/main/epc1.webp"
                  alt="Injection Image 2"
                  fill
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex items-center justify-center">
              <div className="xl:w-[608px] xl:h-[395px] relative lg:w-[508px] lg:h-[295px] xs:w-[280px] xs:h-[180px] sm:w-[280px] sm:h-[180px] md:w-[308px] md:h-[200px] rounded-2xl overflow-hidden"> {/* Lebih rounded */}
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
        {/* Right Section Container - Swiper, Open Registration Text, and Date */}
        <div className="absolute md:transform xs:bottom-[-15%] xs:left-1/2 xs:transform xs:-translate-x-1/2 sm:right-[-18%] sm:top-[50%] sm:transform sm:-translate-x-1/2 md:right-[-30%] lg:right-[-15%] xl:right-[-15%] 2xl:right-[-5%] md:top-[30%] 2xl:top-[40%] lg:top-[40%] xs:w-[300px] xs:h-[400px] sm:w-[300px] sm:h-[400px] md:w-[480px] md:h-[500px] z-30 flex flex-col items-center justify-center">
          {/* Open Registration Text */}
          <div className="xs:mb-2 sm:mb-2 md:mb-3">
            <Typography.SuperComic
              level={4}
              className="text-[#FBD921] text-center xs:text-sm sm:text-sm md:text-lg">
              OPEN REGISTRATION
            </Typography.SuperComic>
          </div>

          {/* Open Registration Date Info */}
          <div className="flex justify-center xs:mb-3 sm:mb-3 md:mb-4">
            <OpenRegInfo date="1-21 JULI 2025" />
          </div>

          <Button.Primary
            type="default"
            suffix={<FaArrowRight size={20} className="xs:ml-1" />}
            className="flex items-center xs:text-2xs xs:px-4 xs:py-6 sm:px-4 sm:py-6 md:px-6 md:py-8"
          >
            <a href="https://its.id/m/RegistEPC16" className="xs:text-xs sm:text-xs md:text-xs">REGISTRATION</a>
          </Button.Primary>
        </div>
      </section>
    </div>
  );
};

export default EPC;