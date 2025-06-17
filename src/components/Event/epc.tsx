import Typography from "@/components/Typography";
import Button from "@/components/Button";
import Image from "next/image";
import { FaArrowDown, FaArrowRight, FaBook, FaCalendar } from "react-icons/fa";
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

// Custom Yellow Dot with Minus Icon
const YellowMinusIcon = () => (
  <div className="flex items-center justify-center xs:w-2 xs:h-2 sm:w-2 sm:h-2 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7 bg-yellow-400 rounded-full">
    <span className="text-black xs:text-2xs sm:text-2xs md:text-base lg:text-lg xl:text-lg 2xl:text-xl font-bold">-</span>
  </div>
);

// Custom Blue Dot with X Icon
const BlueXIcon = () => (
  <div className="flex items-center justify-center xs:w-2 xs:h-2 sm:w-2 sm:h-2 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7 bg-blue-500 rounded-full">
    <span className="text-white xs:text-2xs sm:text-2xs md:text-base lg:text-lg xl:text-lg 2xl:text-xl font-bold">×</span>
  </div>
);

// Custom Circle Arrow Right Icon
const CircleArrowRightIcon = () => (
  <div className="flex items-center justify-center xs:w-2 xs:h-2 sm:w-2 sm:h-2 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7 bg-white rounded-full xs:ml-1 sm:ml-1 md:ml-2 lg:ml-2 xl:ml-2 2xl:ml-3">
    <FaArrowRight className="text-primary-300 xs:text-2xs sm:text-2xs md:text-sm lg:text-sm xl:text-sm 2xl:text-base" />
  </div>
);

// Contact Person Info Component (tetap bentuk rectangle rounded, cursor text)
const ContactPersonInfo = ({ phone, name }) => (
  <div
    className="xs:w-[160px] xs:h-[30px] sm:w-[160px] sm:h-[30px] md:w-[200px] md:h-[38px] lg:w-[214px] lg:h-[40px] xl:w-[220px] xl:h-[42px] 2xl:w-[240px] 2xl:h-[45px] bg-secondary-400 border-[2px] border-third-50 flex items-center xs:px-2 sm:px-2 md:px-3 lg:px-3 xl:px-3 2xl:px-4 xs:space-x-1 sm:space-x-1 md:space-x-2 lg:space-x-2 xl:space-x-2 2xl:space-x-3 cursor-text"
    style={{
      borderRadius: '20px 0 20px 0' // Rounded kiri bawah dan kanan atas
    }}
  >
    <FaWhatsapp className="text-white md:text-base lg:text-lg xl:text-lg 2xl:text-xl flex-shrink-0" />
    <Typography.Poppins
      level={8}
      className="text-white xs:text-2xs sm:text-sm text-left truncate"
    >
      {phone} ({name})
    </Typography.Poppins>
  </div>
);

// Open Registration Info Component (tetap bentuk rectangle rounded, cursor text)
const OpenRegInfo = ({ date }) => (
  <div
    className="xs:w-[200px] xs:h-[40px] sm:w-[200px] sm:h-[40px] md:w-[250px] md:h-[50px] lg:w-[275px] lg:h-[56px] xl:w-[290px] xl:h-[58px] 2xl:w-[320px] 2xl:h-[62px] bg-secondary-400 border-[2px] border-third-50 flex items-center justify-center xs:px-3 sm:px-3 md:px-4 lg:px-4 xl:px-4 2xl:px-5 cursor-text"
    style={{
      borderRadius: '0 20px 0 20px' // Rounded kiri bawah dan kanan atas
    }}
  >
    <FaCalendar className="text-white xs:text-sm sm:text-sm md:text-base lg:text-lg xl:text-lg 2xl:text-xl flex-shrink-0 xs:mr-2 sm:mr-2 md:mr-3 lg:mr-3 xl:mr-3 2xl:mr-4" />
    <Typography.Poppins
      level={5}
      className="text-white xs:text-xs sm:text-sm text-center"
    >
      {date}
    </Typography.Poppins>
  </div>
);

const EPC = () => {
  return (
    <div>
      {/* Main Content */}
      <section className="relative w-full sm:h-[800px] xs:h-[800px] md:h-[900px] lg:h-[1024px] xl:h-[1100px] 2xl:h-[1200px] overflow-hidden bg-primary-300 xs:px-3 sm:px-3 md:px-8 lg:px-16 xl:px-20 2xl:px-24 xs:py-6 sm:py-6 md:py-10 lg:py-12 xl:py-14 2xl:py-16">
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

        <div className="absolute xs:left-[-5%] sm:left-[-5%] md:left-[-2%] lg:left-[0%] xl:left-[1%] 2xl:left-[2%]">
          <Image
            src="https://raw.githubusercontent.com/EPW16-ITS/assets/main/GerigiKuning.webp"
            alt="Gerigi Kuning"
            width={200}
            height={200}
            className="xs:w-[120px] xs:h-[120px] sm:w-[120px] sm:h-[120px] md:w-[160px] md:h-[160px] lg:w-[200px] lg:h-[200px] xl:w-[220px] xl:h-[220px] 2xl:w-[250px] 2xl:h-[250px]"
          />
        </div>

        {/* Rectangle Rounded Kubu Kiri - Glass Effect */}
        <div className="sm:relative absolute xs:left-1/2 xs:transform xs:-translate-x-1/2 xs:top-[15%] sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:top-[15%] md:left-[27%] md:top-[20%] lg:left-[3%] lg:top-1/2 lg:transform lg:-translate-y-1/2 xl:left-[3%] xl:top-1/2 xl:transform xl:-translate-y-1/2 2xl:left-[4%] 2xl:top-1/2 2xl:transform 2xl:-translate-y-1/2 xs:w-[260px] xs:h-[249px] sm:w-[560px] sm:h-[280px] md:w-[315px] md:h-[434px] lg:w-[515px] lg:h-[534px] xl:w-[550px] xl:h-[560px] 2xl:w-[600px] 2xl:h-[600px] bg-white/20 backdrop-blur-sm border-2 border-third-50 z-30"
          style={{
            borderRadius: '0 50px 0 50px' // Sudut kanan atas dan kiri bawah rounded
          }}>
          <div className="w-full h-full xs:p-3 sm:p-3 md:p-5 lg:p-6 xl:p-7 2xl:p-8 flex flex-col">
            {/* Konten untuk kubu kiri */}
            <Typography.SuperComic
              level={4}
              className="text-white text-left xs:mb-0 sm:mb-0 md:mb-3 lg:mb-4 xl:mb-4 2xl:mb-5 xs:text-xs sm:text-2xl"
            >
              What is EPC?
            </Typography.SuperComic>
            <Typography.Poppins
              level={7}
              className="text-white text-left xs:mb-4 sm:mb-4 md:mb-6 lg:mb-8 xl:mb-8 2xl:mb-10 xs:text-2xs sm:text-sm"
            >
              Engineering Physics Challenge (EPC) merupakan kegiatan kompetisi tahunan tingkat nasional tentang bidang fisika, matematika terapan, dan aplikasinya dalam bidang ilmu teknik fisika yang diperuntukkan untuk siswa - siswi SMA/SMK/MA sederajatnya.
            </Typography.Poppins>
            <Typography.SuperComic
              level={4}
              className="text-white text-left xs:mb-0 sm:mb-0 md:mb-3 lg:mb-4 xl:mb-4 2xl:mb-5 xs:text-xs sm:text-xl"
            >
              Benefits?
            </Typography.SuperComic>

            {/* Benefits List */}
            <div className="xs:space-y-2 sm:space-y-2 md:space-y-3 lg:space-y-3 xl:space-y-4 2xl:space-y-4 xs:mb-0 sm:mb-0 md:mb-6 lg:mb-8 xl:mb-8 2xl:mb-10">
              {/* Item 1 - Yellow dot with minus */}
              <div className="flex items-center xs:mb-0 xs:space-x-2 sm:space-x-2 md:space-x-3 lg:space-x-3 xl:space-x-3 2xl:space-x-4">
                <YellowMinusIcon />
                <Typography.Poppins
                  level={7}
                  className="text-white xs:mb-0 text-left xs:text-2xs sm:text-sm"
                >
                  Free Pass Teknik Fisika ITS
                </Typography.Poppins>
              </div>

              {/* Item 2 - Blue dot with X */}
              <div className="flex items-center xs:mb-0 xs:space-x-2 sm:space-x-2 md:space-x-3 lg:space-x-3 xl:space-x-3 2xl:space-x-4">
                <BlueXIcon />
                <Typography.Poppins
                  level={7}
                  className="text-white xs:mb-0 text-left xs:text-2xs sm:text-sm"
                >
                  Sertifikat Nasional
                </Typography.Poppins>
              </div>

              {/* Item 3 - Yellow dot with minus */}
              <div className="flex items-center xs:mb-0 xs:space-x-2 sm:space-x-2 md:space-x-3 lg:space-x-3 xl:space-x-3 2xl:space-x-4">
                <YellowMinusIcon />
                <Typography.Poppins
                  level={7}
                  className="text-white xs:mb-0 text-left xs:text-2xs sm:text-sm"
                >
                  Piala Penghargaan
                </Typography.Poppins>
              </div>

              {/* Item 4 - Blue dot with X */}
              <div className="flex items-center xs:mb-0 xs:space-x-2 sm:space-x-2 md:space-x-3 lg:space-x-3 xl:space-x-3 2xl:space-x-4">
                <BlueXIcon />
                <div className="flex flex-col">
                  <Typography.Poppins
                    level={7}
                    className="text-white xs:mb-0 text-left xs:text-2xs sm:text-sm"
                  >
                    Uang Pembinaan Hingga
                  </Typography.Poppins>
                  <Typography.Poppins
                    level={7}
                    className="text-white xs:mb-0 text-left font-bold xs:text-2xs sm:text-sm"
                  >
                    Jutaan Rupiah!
                  </Typography.Poppins>
                </div>
              </div>
            </div>
{/* Buttons - Centered horizontally */}
            <div className="xs:flex sm:flex sm:flex-col sm:space-y-2 sm:space-x-0 md:flex md:flex-row md:gap-4 md:justify-center md:items-center md:w-full lg:flex lg:justify-center lg:space-x-4 xl:space-x-4 2xl:space-x-5 justify-center xs:mb-2 sm:mb-3 md:mb-4 lg:mb-4 xl:mb-4 2xl:mb-5 xs:mt-[0px] sm:mt-[0px] md:mt-[60px] lg:mt-[80px] xl:mt-[80px] 2xl:mt-[100px]">
              {/* Registration Button */}
              <Button.Primary
                type="default"
                suffix={<FaArrowRight size={20} className="xs:size-3 xs:ml-1 sm:ml-2 md:ml-3 lg:ml-4" />}
                className="xs:px-4 xs:py-6 flex xs:absolute xs:right-[5%] xs:bottom-[10%] sm:absolute sm:right-[5%] sm:bottom-[-20%] md:relative md:bottom-0 md:right-0 md:top-0 md:left-0 lg:relative lg:bottom-auto lg:right-auto xl:relative xl:bottom-auto xl:right-auto items-center justify-center 2xl:px-8 2xl:py-4 xs:text-2xs xs:w-[100px] xs:h-[28px] sm:w-[120px] sm:h-[32px] md:w-[130px] md:h-[44px] lg:w-[135px] lg:h-[46px] xl:w-[140px] xl:h-[48px] sm:px-3 sm:py-1.5 md:px-4 md:py-2 lg:px-6 lg:py-3 xl:px-6 xl:py-3"
              >
                <a href="#" className="xs:text-xs sm:text-xs">TIMELINE</a>
              </Button.Primary>

              {/* Guidebook Button */}
              <Button.Primary
                type="default"
                suffix={<FaBook size={20} className="xs:size-3 xs:ml-1 sm:ml-2 md:ml-3 lg:ml-4" />}
                className="xs:px-4 xs:py-6 flex xs:absolute xs:left-[5%] xs:bottom-[10%] sm:absolute sm:left-[5%] sm:bottom-[-20%] md:relative md:bottom-0 md:left-0 md:top-0 md:right-0 lg:relative lg:bottom-auto lg:left-auto xl:relative xl:bottom-auto xl:left-auto items-center justify-center 2xl:px-8 2xl:py-4 xs:text-2xs xs:w-[100px] xs:h-[28px] sm:w-[120px] sm:h-[32px] md:w-[130px] md:h-[44px] lg:w-[135px] lg:h-[46px] xl:w-[140px] xl:h-[48px] sm:px-3 sm:py-1.5 md:px-4 md:py-2 lg:px-6 lg:py-3 xl:px-6 xl:py-3"
              >
                <a href="#" className="xs:text-xs sm:text-xs">GUIDEBOOK</a>
              </Button.Primary>
            </div>

            {/* Contact Person Info - Centered */}
            <div className="flex justify-center xs:absolute xs:bottom-[-20%] xs:left-1/2 xs:transform xs:-translate-x-1/2 sm:absolute sm:bottom-[-20%] sm:left-1/2 sm:transform sm:-translate-x-1/2 md:static md:transform-none z-55">
              <ContactPersonInfo
                phone="0821213123124"
                name="Nama"
              />
            </div>
          </div>
        </div>

        {/* JUDUL - FIXED POSITIONING */}
        <div className="absolute top-0 left-0 w-full flex items-center justify-center xs:pt-4 sm:pt-6 md:pt-8 lg:pt-10 xl:pt-12 2xl:pt-14 z-40">
          <Typography.Homica
            level={4}
            className="text-transparent bg-clip-text bg-gradient-to-r from-[#FBD921] to-[#FEF9DE] text-center xs:text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl 2xl:text-7xl xs:leading-tight sm:leading-tight md:leading-tight lg:leading-tight xl:leading-tight 2xl:leading-tight"
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
        <div className="absolute xs:bottom-[20%] xs:left-1/2 xs:transform xs:-translate-x-1/2 sm:bottom-[10%] sm:right-[25%] sm:transform sm:-translate-x-1/2 md:right-[-12%] md:top-[25%] lg:absolute lg:right-[50%] xl:absolute xl:right-[50%] 2xl:absolute 2xl:right-[50%] xs:w-[280px] xs:h-[180px] sm:w-[280px] sm:h-[180px] md:w-[308px] md:h-[200px] lg:w-[508px] lg:h-[295px] xl:w-[540px] xl:h-[320px] 2xl:w-[580px] 2xl:h-[350px] xs:mb-3 sm:mb-3 md:mb-5 lg:mb-6 xl:mb-6 2xl:mb-8 z-40">
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
              <div className="relative xs:w-[280px] xs:h-[180px] sm:w-[280px] sm:h-[180px] md:w-[308px] md:h-[200px] lg:w-[508px] lg:h-[295px] xl:w-[540px] xl:h-[320px] 2xl:w-[580px] 2xl:h-[350px] rounded-2xl overflow-hidden"> {/* Lebih rounded */}
                <Image
                  src="https://raw.githubusercontent.com/EPW16-ITS/assets/main/epc0.webp"
                  alt="Injection Image 1"
                  fill
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex items-center justify-center">
              <div className="relative xs:w-[280px] xs:h-[180px] sm:w-[280px] sm:h-[180px] md:w-[308px] md:h-[200px] lg:w-[508px] lg:h-[295px] xl:w-[540px] xl:h-[320px] 2xl:w-[580px] 2xl:h-[350px] rounded-2xl overflow-hidden"> {/* Lebih rounded */}
                <Image
                  src="https://raw.githubusercontent.com/EPW16-ITS/assets/main/epc1.webp"
                  alt="Injection Image 2"
                  fill
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex items-center justify-center">
              <div className="relative xs:w-[280px] xs:h-[180px] sm:w-[280px] sm:h-[180px] md:w-[308px] md:h-[200px] lg:w-[508px] lg:h-[295px] xl:w-[540px] xl:h-[320px] 2xl:w-[580px] 2xl:h-[350px] rounded-2xl overflow-hidden"> {/* Lebih rounded */}
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
        <div className="absolute md:transform xs:bottom-[-15%] xs:left-1/2 xs:transform xs:-translate-x-1/2 sm:right-[-18%] sm:top-[50%] sm:transform sm:-translate-x-1/2 md:right-[-32%] md:top-[30%] lg:right-[3%] lg:top-1/2 lg:transform lg:-translate-y-1/2 xl:right-[3%] xl:top-1/2 xl:transform xl:-translate-y-1/2 2xl:right-[4%] 2xl:top-1/2 2xl:transform 2xl:-translate-y-1/2 xs:w-[300px] xs:h-[400px] sm:w-[300px] sm:h-[400px] md:w-[480px] md:h-[500px] lg:w-[520px] lg:h-[534px] xl:w-[560px] xl:h-[560px] 2xl:w-[620px] 2xl:h-[600px] z-30 flex flex-col items-center justify-center">
          {/* Open Registration Text */}
          <div className="xs:mb-2 sm:mb-2 md:mb-3 lg:mb-4 xl:mb-4 2xl:mb-5">
            <Typography.SuperComic
              level={4}
              className="text-[#FBD921] text-center xs:text-sm sm:text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
              OPEN REGISTRATION
            </Typography.SuperComic>
          </div>

          {/* Open Registration Date Info */}
          <div className="flex justify-center xs:mb-3 sm:mb-3 md:mb-4 lg:mb-4 xl:mb-4 2xl:mb-5">
            <OpenRegInfo date="1-21 JULI 2025" />
          </div>

          <Button.Primary
            type="default"
            suffix={<FaArrowRight size={20} className="xs:ml-1" />}
            className="flex items-center xs:text-2xs xs:px-4 xs:py-6 sm:px-4 sm:py-6 md:px-6 md:py-8 lg:px-6 lg:py-10 xl:px-7 xl:py-11 2xl:px-8 2xl:py-12"
          >
            <a href="#" className="xs:text-xs sm:text-xs">REGISTRATION</a>
          </Button.Primary>
        </div>
      </section>
    </div>
  );
};

export default EPC;