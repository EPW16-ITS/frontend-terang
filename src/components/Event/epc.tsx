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
  <div className="flex items-center justify-center lg:w-6 lg:h-6 bg-yellow-400 rounded-full">
    <span className="text-black text-lg font-bold">-</span>
  </div>
);

// Custom Blue Dot with X Icon
const BlueXIcon = () => (
  <div className="flex items-center justify-center lg:w-6 lg:h-6 bg-blue-500 rounded-full">
    <span className="text-white text-lg font-bold">×</span>
  </div>
);

// Custom Circle Arrow Right Icon
const CircleArrowRightIcon = () => (
  <div className="flex items-center justify-center lg:w-6 lg:h-6 bg-white rounded-full ml-2">
    <FaArrowRight className="text-primary-300 text-sm" />
  </div>
);

// Contact Person Info Component (tetap bentuk rectangle rounded, cursor text)
const ContactPersonInfo = ({ phone, name }) => (
  <div 
    className="lg:w-[214px] lg:h-[40px] bg-secondary-400 border-[2px] border-third-50 flex items-center px-3 space-x-2 cursor-text"
    style={{
      borderRadius: '20px 0 20px 0' // Rounded kiri bawah dan kanan atas
    }}
  >
    <FaWhatsapp className="text-white text-lg flex-shrink-0" />
    <Typography.Poppins
      level={8}
      className="text-white text-left truncate"
    >
      {phone} ({name})
    </Typography.Poppins>
  </div>
);

// Open Registration Info Component (tetap bentuk rectangle rounded, cursor text)
const OpenRegInfo = ({ date }) => (
  <div 
    className="lg:w-[275px] lg:h-[56px] bg-secondary-400 border-[2px] border-third-50 flex items-center justify-center px-4 cursor-text"
    style={{
      borderRadius: '0 20px 0 20px' // Rounded kiri bawah dan kanan atas
    }}
  >
    <FaCalendar className="text-white text-lg flex-shrink-0 mr-3" />
    <Typography.Poppins
      level={5}
      className="text-white text-center"
    >
      {date}
    </Typography.Poppins>
  </div>
);

const EPC = () => {
  return (
    <div>
      {/* Main Content */}
      <section className="relative w-full sm:h-[900px] xs:h-[800px] md:h-[900px] lg:h-[1024px] overflow-hidden bg-primary-300 px-6 md:px-16 py-12">
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

        <div className="absolute lg:left-[0%]">
          <Image
            src="https://raw.githubusercontent.com/EPW16-ITS/assets/main/GerigiKuning.webp"
            alt="Gerigi Kuning"
            width={200}
            height={200}
          />
        </div>

        {/* Rectangle Rounded Kubu Kiri - Glass Effect */}
        <div className="absolute lg:left-[3%] top-1/2 transform -translate-y-1/2 lg:w-[515px] lg:h-[534px] bg-white/20 backdrop-blur-sm border-2 border-third-50 z-30"
          style={{
            borderRadius: '0 50px 0 50px' // Sudut kanan atas dan kiri bawah rounded
          }}>
          <div className="w-full h-full p-6 flex flex-col">
            {/* Konten untuk kubu kiri */}
            <Typography.SuperComic
              level={4}
              className="text-white text-left mb-4 xs:text-xs"
            >
              What is EPC?
            </Typography.SuperComic>
            <Typography.Poppins
              level={7}
              className="text-white text-left mb-8 xs:text-xs"
            >
              Engineering Physics Challenge (EPC) merupakan kegiatan kompetisi tahunan tingkat nasional tentang bidang fisika, matematika terapan, dan aplikasinya dalam bidang ilmu teknik fisika yang diperuntukkan untuk siswa - siswi SMA/SMK/MA sederajatnya.
            </Typography.Poppins>
            <Typography.SuperComic
              level={4}
              className="text-white text-left mb-4 xs:text-xs"
            >
              Benefits?
            </Typography.SuperComic>

            {/* Benefits List */}
            <div className="space-y-3 mb-8">
              {/* Item 1 - Yellow dot with minus */}
              <div className="flex items-center space-x-3">
                <YellowMinusIcon />
                <Typography.Poppins
                  level={7}
                  className="text-white text-left xs:text-xs"
                >
                  Free Pass Teknik Fisika ITS
                </Typography.Poppins>
              </div>

              {/* Item 2 - Blue dot with X */}
              <div className="flex items-center space-x-3">
                <BlueXIcon />
                <Typography.Poppins
                  level={7}
                  className="text-white text-left xs:text-xs"
                >
                  Sertifikat Nasional
                </Typography.Poppins>
              </div>

              {/* Item 3 - Yellow dot with minus */}
              <div className="flex items-center space-x-3">
                <YellowMinusIcon />
                <Typography.Poppins
                  level={7}
                  className="text-white text-left xs:text-xs"
                >
                  Piala Penghargaan
                </Typography.Poppins>
              </div>

              {/* Item 4 - Blue dot with X */}
              <div className="flex items-center space-x-3">
                <BlueXIcon />
                <div className="flex flex-col">
                  <Typography.Poppins
                    level={7}
                    className="text-white text-left xs:text-xs"
                  >
                    Uang Pembinaan Hingga
                  </Typography.Poppins>
                  <Typography.Poppins
                    level={7}
                    className="text-white text-left font-bold xs:text-xs"
                  >
                    Jutaan Rupiah!
                  </Typography.Poppins>
                </div>
              </div>
            </div>

            {/* Buttons - Centered horizontally */}
            <div className="flex justify-center space-x-4 mb-4 lg:mt-[80px]">
              {/* Registration Button */}
              <Button.Primary
                type="default"
                suffix={<CircleArrowRightIcon size={20} />}
                className="flex items-center px-6 py-3 xs:text-xs"
              >
                <a href="#">REGISTRATION</a>
              </Button.Primary>

              {/* Guidebook Button */}
              <Button.Primary
                type="default"
                suffix={<FaBook size={20} />}
                className="flex items-center px-6 py-3 xs:text-xs"
              >
                <a href="#">GUIDEBOOK</a>
              </Button.Primary>
            </div>

            {/* Contact Person Info - Centered */}
            <div className="flex justify-center">
              <ContactPersonInfo
                phone="0821213123124"
                name="Nama"
              />
            </div>
          </div>
        </div>

        {/* Text with Tailwind classes only */}
        <Typography.Homica
          level={4}
          className="text-transparent bg-clip-text bg-gradient-to-r from-[#FBD921] to-[#FEF9DE] text-center z-40 relative"
          style={{
            WebkitTextStroke: "64px rgb(var(--color-primary-100))"
          }}
        >
          ENGINEERING PHYSICS
          CHALLENGE
        </Typography.Homica>

        {/* Right Section Container - Swiper, Open Registration Text, and Date */}
        <div className="absolute lg:right-[3%] top-1/2 transform -translate-y-1/2 lg:w-[520px] lg:h-[534px] z-30 flex flex-col items-center justify-center">
          {/* Swiper Container */}
          <div className="lg:w-[508px] lg:h-[295px] mb-6">
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
                <div className="relative lg:w-[508px] lg:h-[295px] rounded-2xl overflow-hidden"> {/* Lebih rounded */}
                  <Image
                    src="https://raw.githubusercontent.com/EPW16-ITS/assets/main/epc0.webp"
                    alt="Injection Image 1"
                    fill
                    className="object-cover"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="flex items-center justify-center">
                <div className="relative lg:w-[508px] lg:h-[295px] rounded-2xl overflow-hidden"> {/* Lebih rounded */}
                  <Image
                    src="https://raw.githubusercontent.com/EPW16-ITS/assets/main/epc1.webp"
                    alt="Injection Image 2"
                    fill
                    className="object-cover"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="flex items-center justify-center">
                <div className="relative lg:w-[508px] lg:h-[295px] rounded-2xl overflow-hidden"> {/* Lebih rounded */}
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

          {/* Open Registration Text */}
          <div className="mb-4">
            <Typography.SuperComic
              level={4}
              className="text-[#FBD921] text-center">
              OPEN REGISTRATION
            </Typography.SuperComic>
          </div>

          {/* Open Registration Date Info */}
          <div className="flex justify-center mb-4">
            <OpenRegInfo date="1-21 JULI 2025" />
          </div>
          
          <Button.Primary
            type="default"
            suffix={<CircleArrowRightIcon size={20} />}
            className="flex items-center px-6 py-10 xs:text-xs"
          >
            <a href="#">TIMELINE</a>
          </Button.Primary>
        </div>
      </section>
    </div>
  );
};

export default EPC;