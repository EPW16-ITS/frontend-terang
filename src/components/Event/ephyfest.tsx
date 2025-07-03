import Typography from "@/components/Typography";
import Button from "@/components/Button";
import Image from "next/image";
import { FaArrowDown, FaArrowRight, FaBook, FaCalendar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
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
import { useRef } from 'react';
import type { Swiper as SwiperType } from 'swiper';

const Ephyfest = () => {
  // Ref for main event swiper
  const mainEventSwiperRef = useRef<SwiperType | null>(null);

  // Sample data for slider cards
  const mainEventData = [
    {
      id: 1,
      title: "Exhibition",
      description: "Exhibition Lab, Injection, Microcontroller Contest (Micon), dan Pameran 60 tahun Teknik Fisika"
    },
    {
      id: 2,
      title: "Talkshow",
      description: "Diskusi tentang suatu topik Soft Skill antara Moderator dan Narasumber."
    },
    {
      id: 3,
      title: "Closing Ceremony",
      description: "Penutupan resmi dari Engineering Physics Week ke-16."
    },
    {
      id: 4,
      title: "Awarding",
      description: "Memberikan apresiasi kepada peserta kompetisi atas pencapaian mereka."
    }
  ];

  return (
    <div>
      {/* Mobile Layout (XS, SM, MD) */}
      <section className="relative lg:hidden w-full h-[900px] md:h-[950px] overflow-hidden bg-gradient-to-b from-[#1F0C49] from-10% bg-[#116B98] to-90%">
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

        {/* Main Content */}
        <div className="relative w-full h-full mt-[10%] md:mt-[5%]">

          {/* Teks Ephyfest dan Deskripsi */}
          <div className="relative mx-[10%] md:mx-[7%]">
            <Typography.Homica
              level={5}
              className="relative text-transparent bg-clip-text bg-gradient-to-r from-[#F85F73] to-[#037CB8] text-center text-6xl md:text-7xl leading-tight z-10"
              style={{
                WebkitTextStroke: "2px rgb(var(--color-primary-100))"
              }}
            >
              EPHYFEST
            </Typography.Homica>
            <div className="relative w-full h-full">
              <img
                src="https://raw.githubusercontent.com/EPW16-ITS/assets/main/ephyfest-GerigiBiru.svg"
                className="absolute w-[80%] h-[80%] md:w-[70%] md:h-[70%] top-0 left-0 -translate-x-[48%] -translate-y-[46%] z-0 opacity-50"
              />
              <Typography.Poppins
                level={10}
                className="relative text-primary-100 text-left text-base md:text-lg bg-fifth-50 p-[5%] md:p-[3%] border-2 border-primary-25 z-10 md:leading-normal"
                style={{
                  borderRadius: '0 50px 0 50px' // Sudut kanan atas dan kiri bawah rounded
                }}
              >
                EPHYFEST atau Engineering Physics Festival merupakan sebuah acara tahunan yang bertujuan untuk memperkenalkan Departemen Teknik Fisika kepada masyarakat luas, khususnya kepada pelajar, mahasiswa, dan khalayak umum yang tertarik dengan dunia rekayasa dan teknologi. Pada tahun ini, EPHYFEST 16 hadir dengan dua sub-event utama, yaitu Main Event dan Closing Event.
              </Typography.Poppins>
              <img
                src="https://raw.githubusercontent.com/EPW16-ITS/assets/main/homepage-BautMin2.svg"
                className="absolute w-3 h-3 md:w-4 md:h-4 top-0 left-0 translate-x-1 translate-y-1 rotate-45 z-20"
              />
              <img
                src="https://raw.githubusercontent.com/EPW16-ITS/assets/main/homepage-BautMin2.svg"
                className="absolute w-3 h-3 md:w-4 md:h-4 bottom-0 right-0 -translate-x-1 -translate-y-1 -rotate-45 z-20"
              />
              <img
                src="https://raw.githubusercontent.com/EPW16-ITS/assets/main/homepage-GerigiPink.svg"
                className="absolute w-[80%] h-[80%] md:w-[70%] md:h-[70%] bottom-0 right-0 translate-x-[48%] translate-y-[46%] z-0 opacity-50 -rotate-[15deg]"
              />
            </div>
          </div>

          {/* Main Event */}
          <div className="h-[23%] md:h-[22%] flex flex-col justify-start m-[5%] md:m-[3%]">
            <Typography.Poppins
              level={5}
              className="bg-clip-text text-transparent bg-gradient-to-r from-[#F85F73] to-[#037CB8] text-center leading-tight md:text-3xl"
              style={{
                WebkitTextStroke: "2px rgb(var(--color-primary-100))",
              }}
            >
              Main Event
            </Typography.Poppins>

            {/* Slider Container */}
            <div className="relative w-full flex-1 md:mt-[-4%]">
              <Swiper
                onSwiper={(swiper) => {
                  mainEventSwiperRef.current = swiper;
                }}
                slidesPerView={2}
                spaceBetween={10}
                breakpoints={{
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 15,
                  }
                }}
                grabCursor={true}
                modules={[]}
                className="w-full h-full"
              >
                {mainEventData.map((item) => (
                  <SwiperSlide key={item.id} className="h-full">
                    <div className="h-full md:w-[250px] md:h-[140px] bg-fourth-25 border-4 border-fifth-25 flex flex-col relative rounded-lg">
                      <div className="flex-1 p-2 md:p-2">
                        <Typography.Poppins
                          level={1}
                          className="text-black text-base md:text-lg text-center mb-1 md:mb-1 whitespace-nowrap border-b border-fourth-300 pb-1 md:pb-1"
                        >
                          {item.title}
                        </Typography.Poppins>
                        <Typography.Poppins
                          level={11}
                          className="text-fourth-400 text-2xs md:text-xs text-justify leading-snug md:leading-normal"
                        >
                          {item.description}
                        </Typography.Poppins>
                      </div>

                      {/* View More Button */}
                      <div className="absolute bottom-2 md:bottom-2 left-1/2 -translate-x-1/2 w-[60%]">
                        <div
                          className="h-[14px] md:h-[16px] bg-fourth-300 flex items-center justify-center cursor-pointer rounded-full"
                          onClick={() => {
                            console.log("View more clicked for:", item.title);
                          }}
                        >
                          <Typography.Poppins
                            level={11}
                            className="text-white text-2xs md:text-xs whitespace-nowrap"
                          >
                            View more
                          </Typography.Poppins>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <img
                src="https://raw.githubusercontent.com/EPW16-ITS/assets/main/homepage-GerigiPink.svg"
                className="absolute w-[40%] h-[40%] md:w-[35%] md:h-[35%] bottom-0 left-0 -translate-x-[48%] translate-y-[46%] z-20 -rotate-[15deg]"
              />
            </div>
          </div>

          {/* Timeline Container */}
          <div className="relative w-[90%] md:w-[85%] h-[7%] md:h-[7%] m-[5%] md:m-[7.5%] md:top-[-7%]">
            <Typography.Poppins
              level={4}
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#F85F73] to-[#037CB8] text-center text-xl md:text-2xl leading-tight md:mb-0"
              style={{
                WebkitTextStroke: "4px rgb(var(--color-primary-100))"
              }}
            >
              TIMELINE
            </Typography.Poppins>
            {/* Timeline Buttons Container */}
            <div className="relative flex items-center w-full h-[60%] md:h-[60%] justify-center gap-[2%]">
              {/* Registration Button - Smaller */}
              <Button.Primary
                type="default"
                className="w-[25%] md:w-[26%] h-[60%] md:h-[65%] flex items-center justify-center gap-2"
              >
                <div className="flex items-center gap-2">
                  <Typography.Poppins level={12} className="text-2xs md:text-xs">
                    REGISTRATION
                  </Typography.Poppins>
                  <FaArrowRight className="text-3xs md:text-xs" />
                </div>
              </Button.Primary>

              {/* Date Component */}
              <div
                className="w-[60%] md:w-[55%] h-[100%] bg-gradient-to-r from-[#C64C5C] to-[#BA93E5] border-[2px] border-fifth-25 flex items-center justify-center my-auto cursor-text"
                style={{
                  borderRadius: '0 15px 0 15px'
                }}
              >
                <FaCalendar className="text-white text-sm md:text-sm mr-2" />
                <Typography.Poppins
                  level={10}
                  className="text-white text-2xs md:text-xs text-center"
                >
                  25 Oktober 2025
                </Typography.Poppins>
              </div>

              {/* Guidebook Button - Smaller */}
              <Button.Primary
                type="default"
                className="w-[25%] md:w-[26%] h-[60%] md:h-[65%] flex items-center justify-center gap-2"
              >
                <div className="flex items-center gap-2">
                  <Typography.Poppins level={12} className="text-2xs md:text-xs">
                    GUIDEBOOK
                  </Typography.Poppins>
                  <FaBook className="text-3xs md:text-xs" />
                </div>
              </Button.Primary>
            </div>
          </div>

          {/* Swiper and Lamp */}
          <div className="relative w-[90%] md:w-[85%] h-[30%] md:h-[30%] mx-[5%] md:mx-[7.5%] md:top-[-11%]">
            <Swiper
              effect={"coverflow"}
              direction={"vertical"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={3}
              spaceBetween={20}
              breakpoints={{
                768: {
                  spaceBetween: 25,
                }
              }}
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
              className="w-[85%] sm:w-[55%] md:w-[60%] h-[60%] md:h-[65%]"
            >
              <SwiperSlide className="flex items-center justify-center">
                <div className="relative rounded-2xl overflow-hidden w-[315px] h-[200px] md:w-[350px] md:h-[220px]">
                  <img
                    src="https://raw.githubusercontent.com/EPW16-ITS/assets/main/ephyfest-swiper1.webp"
                    alt="Ephyfest Image 1"
                    className="rounded-2xl object-cover"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="flex items-center justify-center">
                <div className="relative rounded-2xl overflow-hidden w-[315px] h-[200px] md:w-[350px] md:h-[220px]">
                  <img
                    src="https://raw.githubusercontent.com/EPW16-ITS/assets/main/ephyfest-swiper2.webp"
                    alt="Ephyfest Image 2"
                    className="rounded-2xl object-cover"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="flex items-center justify-center">
                <div className="relative rounded-2xl overflow-hidden w-[315px] h-[200px] md:w-[350px] md:h-[220px]">
                  <img
                    src="https://raw.githubusercontent.com/EPW16-ITS/assets/main/ephyfest-swiper3.webp"
                    alt="Ephyfest Image 3"
                    className="rounded-2xl object-cover"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="flex items-center justify-center">
                <div className="relative rounded-2xl overflow-hidden w-[315px] h-[200px] md:w-[350px] md:h-[220px]">
                  <img
                    src="https://raw.githubusercontent.com/EPW16-ITS/assets/main/ephyfest-swiper4.webp"
                    alt="Ephyfest Image 4"
                    className="rounded-2xl object-cover"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="flex items-center justify-center">
                <div className="relative rounded-2xl overflow-hidden w-[315px] h-[200px] md:w-[350px] md:h-[220px]">
                  <img
                    src="https://raw.githubusercontent.com/EPW16-ITS/assets/main/ephyfest-swiper5.webp"
                    alt="Ephyfest Image 5"
                    className="rounded-2xl object-cover"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
            <div className="relative w-[55%] md:w-[60%] h-[55%] md:h-[60%] mx-auto -translate-y-[35%] md:-translate-y-[25%]">
              <Image
                src="https://raw.githubusercontent.com/EPW16-ITS/assets/main/ephyfest-gerigi-lampu.svg"
                alt="lampu"
                fill
                className="object-contain object-center"
              />
            </div>
          </div>
        </div>

        {/* Background Decorations */}
        <img
          src="https://raw.githubusercontent.com/EPW16-ITS/assets/main/homepage-awan.svg"
          className="absolute w-[40%] h-[40%] md:w-[30%] md:h-[30%] bottom-0 right-0 translate-x-[60%] translate-y-[-20%] z-0"
        />
        <img
          src="https://raw.githubusercontent.com/EPW16-ITS/assets/main/homepage-awan.svg"
          className="absolute w-[40%] h-[40%] md:w-[30%] md:h-[30%] bottom-0 left-0 -translate-x-[60%] translate-y-[10%] z-0"
        />
      </section>

      {/* Desktop Layout (LG, XL, 2XL) */}
      <section className="relative hidden lg:block w-full h-[900px] lg:h-[950px] xl:h-[1000px] 2xl:h-[1200px] overflow-hidden bg-gradient-to-b from-[#39488E] from-10% via-[#39488E] bg-[#1F0C49] to-90%">
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

        {/* Main Content */}
        <div className="relative w-full h-full mt-[10%] lg:mt-[3%] xl:mt-[5%] 2xl:mt-[1%]">

          {/* LG+: First Row - Judul/Deskripsi sejajar dengan Swiper/Lampu */}
          <div className="lg:flex lg:flex-row lg:h-[60%] lg:gap-6 lg:mx-[3%]">
            {/* Teks Ephyfest dan Deskripsi */}
            <div className="relative mx-[10%] lg:mx-0 lg:w-1/2 lg:flex lg:flex-col lg:justify-center">
              <Typography.Homica
                level={5}
                className="relative bg-clip-text text-transparent bg-gradient-to-r from-[#F85F73] to-[#037CB8] text-center text-5xl lg:text-8xl xl:text-8xl 2xl:text-9xl leading-tight z-10"
                style={{
                  WebkitTextStroke: "2px rgb(var(--color-primary-100))"
                }}
              >
                EPHYFEST
              </Typography.Homica>
              <div className="relative w-full h-full">
                <img
                  src="https://raw.githubusercontent.com/EPW16-ITS/assets/main/ephyfest-GerigiBiru.svg"
                  className="absolute w-[80%] h-[80%] lg:w-[60%] lg:h-[60%] xl:w-[60%] xl:h-[60%] 2xl:w-[60%] 2xl:h-[60%] top-0 left-0 -translate-x-[48%] -translate-y-[46%] z-0 opacity-50"
                />
                <Typography.Poppins
                  level={10}
                  className="relative text-primary-100 text-left text-base lg:text-xl xl:text-xl 2xl:text-2xl bg-fifth-50 p-[5%] lg:p-[4%] xl:p-[4%] 2xl:p-[4%] border-2 border-primary-25 z-10 lg:leading-relaxed xl:leading-relaxed 2xl:leading-relaxed"
                  style={{
                    borderRadius: '0 50px 0 50px' // Sudut kanan atas dan kiri bawah rounded
                  }}
                >
                  EPHYFEST atau Engineering Physics Festival merupakan sebuah acara tahunan yang bertujuan untuk memperkenalkan Departemen Teknik Fisika kepada masyarakat luas, khususnya kepada pelajar, mahasiswa, dan khalayak umum yang tertarik dengan dunia rekayasa dan teknologi. Pada tahun ini, EPHYFEST 16 hadir dengan dua sub-event utama, yaitu Main Event dan Closing Event.
                </Typography.Poppins>
                <img
                  src="https://raw.githubusercontent.com/EPW16-ITS/assets/main/homepage-BautMin2.svg"
                  className="absolute w-3 h-3 lg:w-5 lg:h-5 xl:w-5 xl:h-5 2xl:w-6 2xl:h-6 top-0 left-0 translate-x-1 translate-y-1 rotate-45 z-20"
                />
                <img
                  src="https://raw.githubusercontent.com/EPW16-ITS/assets/main/homepage-BautMin2.svg"
                  className="absolute w-3 h-3 lg:w-5 lg:h-5 xl:w-5 xl:h-5 2xl:w-6 2xl:h-6 bottom-0 right-0 -translate-x-1 -translate-y-1 -rotate-45 z-20"
                />
                <img
                  src="https://raw.githubusercontent.com/EPW16-ITS/assets/main/homepage-GerigiPink.svg"
                  className="absolute w-[80%] h-[80%] lg:w-[60%] lg:h-[60%] xl:w-[60%] xl:h-[60%] 2xl:w-[60%] 2xl:h-[60%] bottom-0 right-0 translate-x-[48%] translate-y-[46%] z-0 opacity-50 -rotate-[15deg]"
                />
              </div>
            </div>

            {/* Swiper and Lamp */}
            <div className="relative w-[90%] lg:w-1/2 xl:w-1/2 2xl:w-1/2 h-[30%] lg:h-full xl:h-full 2xl:h-full mx-[5%] lg:mx-0 xl:mx-0 2xl:mx-0 lg:top-0 xl:top-0 2xl:top-0 lg:flex lg:flex-col lg:justify-center xl:flex xl:flex-col xl:justify-center 2xl:flex 2xl:flex-col 2xl:justify-center">
              <Swiper
                effect={"coverflow"}
                direction={"vertical"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={3}
                spaceBetween={20}
                breakpoints={{
                  1024: {
                    spaceBetween: 30,
                  },
                  1280: {
                    spaceBetween: 30,
                  },
                  1536: {
                    spaceBetween: 35,
                  }
                }}
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
                className="w-[85%] sm:w-[55%] lg:w-[80%] xl:w-[80%] 2xl:w-[80%] h-[60%] lg:h-[70%] xl:h-[100%] 2xl:h-[70%]"
              >
                <SwiperSlide className="flex items-center justify-center">
                                      <div className="relative rounded-2xl overflow-hidden w-[315px] h-[200px] lg:w-[500px] lg:h-[270px] xl:w-[500px] xl:h-[270px] 2xl:w-[450px] 2xl:h-[280px]">
                    <img
                      src="https://raw.githubusercontent.com/EPW16-ITS/assets/main/ephyfest-swiper1.webp"
                      alt="Ephyfest Image 1"
                      className="rounded-2xl object-cover"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide className="flex items-center justify-center">
                  <div className="relative rounded-2xl overflow-hidden w-[315px] h-[200px] lg:w-[350px] lg:h-[220px] xl:w-[500px] xl:h-[270px] 2xl:w-[450px] 2xl:h-[280px]">
                    <img
                      src="https://raw.githubusercontent.com/EPW16-ITS/assets/main/ephyfest-swiper2.webp"
                      alt="Ephyfest Image 2"
                      className="rounded-2xl object-cover"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide className="flex items-center justify-center">
                  <div className="relative rounded-2xl overflow-hidden w-[315px] h-[200px] lg:w-[350px] lg:h-[220px] xl:w-[500px] xl:h-[270px] 2xl:w-[450px] 2xl:h-[280px]">
                    <img
                      src="https://raw.githubusercontent.com/EPW16-ITS/assets/main/ephyfest-swiper3.webp"
                      alt="Ephyfest Image 3"
                      className="rounded-2xl object-cover"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide className="flex items-center justify-center">
                  <div className="relative rounded-2xl overflow-hidden w-[315px] h-[200px] lg:w-[350px] lg:h-[220px] xl:w-[500px] xl:h-[270px] 2xl:w-[450px] 2xl:h-[280px]">
                    <img
                      src="https://raw.githubusercontent.com/EPW16-ITS/assets/main/ephyfest-swiper4.webp"
                      alt="Ephyfest Image 4"
                      className="rounded-2xl object-cover"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide className="flex items-center justify-center">
                  <div className="relative rounded-2xl overflow-hidden w-[315px] h-[200px] lg:w-[350px] lg:h-[220px] xl:w-[500px] xl:h-[270px] 2xl:w-[450px] 2xl:h-[280px]">
                    <img
                      src="https://raw.githubusercontent.com/EPW16-ITS/assets/main/ephyfest-swiper5.webp"
                      alt="Ephyfest Image 5"
                      className="rounded-2xl object-cover"
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
              <div className="relative w-[55%] lg:w-[70%] xl:w-[70%] 2xl:w-[70%] h-[55%] lg:h-[50%] xl:h-[50%] 2xl:h-[50%] mx-auto -translate-y-[35%] lg:-translate-y-[20%] xl:-translate-y-[20%] 2xl:-translate-y-[20%]">
                <Image
                  src="https://raw.githubusercontent.com/EPW16-ITS/assets/main/ephyfest-gerigi-lampu.svg"
                  alt="lampu"
                  fill
                  className="object-contain object-center"
                />
              </div>
            </div>

          </div>

          {/* LG+: Second Row - Main Event sejajar dengan Timeline */}
          <div className="lg:flex lg:flex-row lg:h-[35%] lg:gap-6 lg:mx-[3%] lg:mt-[-5%] xl:mt-[-10%] 2xl:mt-[-5%]">

            {/* Main Event */}
            <div className="h-[23%] lg:h-full lg:w-1/2 xl:h-full xl:w-1/2 2xl:h-full 2xl:w-1/2 flex flex-col justify-start m-[5%] lg:m-0 xl:m-0 2xl:m-0">
              <Typography.Poppins
                level={5}
                className="text-transparent bg-gradient-to-r from-[#F85F73] to-[#037CB8] font-bold sm:text-2xl lg:text-4xl xl:text-4xl 2xl:text-5xl bg-clip-text text-center leading-tight"
                style={{
                  WebkitTextStroke: "2px rgb(var(--color-primary-100))",
                }}
              >
                Main Event
              </Typography.Poppins>

              {/* Slider Container */}
              <div className="relative w-full flex-1 xs:mt-[-10%] sm:mt-[-7%] lg:mt-[-10%] xl:mt-[-10%] 2xl:mt-4 z-40">
                <Swiper
                  onSwiper={(swiper) => {
                    mainEventSwiperRef.current = swiper;
                  }}
                  slidesPerView={2}
                  spaceBetween={5}
                  breakpoints={{
                    1024: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    1280: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    1536: {
                      slidesPerView: 2,
                      spaceBetween: 25,
                    }
                  }}
                  grabCursor={true}
                  modules={[]}
                  className="w-full h-full"
                >
                  {mainEventData.map((item) => (
                    <SwiperSlide key={item.id} className="h-full">
                      <div className="xs:w-[127px] xs:h-[127px] sm:h-[127px] sm:w-[228px] lg:w-[280px] lg:h-[200px] xl:w-[280px] xl:h-[200px] 2xl:w-[320px] 2xl:h-[220px] bg-fourth-25 border-4 border-fifth-25 flex flex-col relative rounded-lg">
                        <div className="flex-1 p-2 lg:p-4 xl:p-4 2xl:p-6">
                          <Typography.Poppins
                            level={1}
                            className="text-black text-base lg:text-xl xl:text-xl 2xl:text-2xl text-center mb-1 lg:mb-2 xl:mb-2 2xl:mb-3 border-b border-fourth-300 pb-1 lg:pb-2 xl:pb-2 2xl:pb-2"
                          >
                            {item.title}
                          </Typography.Poppins>
                          <Typography.Poppins
                            level={11}
                            className="text-fourth-400 text-3xs sm:text-2xs lg:text-sm xl:text-sm 2xl:text-base text-justify leading-snug sm:leading-normal lg:leading-relaxed xl:leading-relaxed 2xl:leading-relaxed"
                          >
                            {item.description}
                          </Typography.Poppins>
                        </div>

                        {/* View More Button */}
                        <div className="absolute bottom-2 lg:bottom-4 xl:bottom-4 2xl:bottom-6 left-1/2 -translate-x-1/2 w-[60%]">
                          <div
                            className="h-[14px] lg:h-[20px] xl:h-[20px] 2xl:h-[24px] bg-fourth-300 flex items-center justify-center cursor-pointer rounded-full"
                            onClick={() => {
                              console.log("View more clicked for:", item.title);
                            }}
                          >
                            <Typography.Poppins
                              level={11}
                              className="text-white text-2xs lg:text-sm xl:text-sm 2xl:text-base whitespace-nowrap"
                            >
                              View more
                            </Typography.Poppins>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <img
                  src="https://raw.githubusercontent.com/EPW16-ITS/assets/main/homepage-GerigiPink.svg"
                  className="absolute w-[40%] h-[40%] lg:w-[30%] lg:h-[30%] xl:w-[30%] xl:h-[30%] 2xl:w-[25%] 2xl:h-[25%] bottom-0 left-0 -translate-x-[48%] translate-y-[46%] z-20 -rotate-[15deg]"
                />
              </div>
            </div>

            {/* Timeline Container */}
            <div className="relative w-[90%] lg:w-1/2 xl:w-1/2 2xl:w-1/2 h-[7%] lg:h-full xl:h-full 2xl:h-full m-[5%] lg:m-0 xl:m-0 2xl:m-0 xs:top-[-5%] sm:top-[-5%] lg:top-0 xl:top-0 2xl:top-0 lg:flex lg:flex-col lg:justify-center xl:flex xl:flex-col xl:justify-center 2xl:flex 2xl:flex-col 2xl:justify-center">
              <Typography.Poppins
                level={4}
                className="text-transparent bg-gradient-to-r from-[#F85F73] to-[#037CB8] font-bold bg-clip-text text-center text-xl lg:text-3xl xl:text-3xl 2xl:text-4xl leading-tight xs:mb-2 sm:mb-2 lg:mb-6 xl:mb-6 2xl:mb-8"
                style={{
                  WebkitTextStroke: "4px rgb(var(--color-primary-100))"
                }}
              >
                TIMELINE
              </Typography.Poppins>

              {/* Layout untuk kondisi LG, XL, 2XL - vertical stack */}
              <div className="hidden lg:flex lg:flex-col lg:items-center lg:gap-4 lg:w-full xl:flex xl:flex-col xl:items-center xl:gap-4 xl:w-full 2xl:flex 2xl:flex-col 2xl:items-center 2xl:gap-6 2xl:w-full">
                {/* Date Component - positioned at top center */}
                <div
                  className="w-[70%] lg:h-[60px] xl:h-[60px] 2xl:w-[70%] 2xl:h-[80px] bg-gradient-to-r from-[#C64C5C] to-[#BA93E5] border-[2px] border-fifth-25 flex items-center justify-center cursor-text"
                  style={{
                    borderRadius: '0 15px 0 15px'
                  }}
                >
                  <FaCalendar className="text-white lg:text-lg xl:text-lg 2xl:text-2xl mr-2" />
                  <Typography.Poppins
                    level={10}
                    className="text-white lg:text-2xl xl:text-2xl 2xl:text-4xl text-center"
                  >
                    25 Oktober 2025
                  </Typography.Poppins>
                </div>

                {/* Buttons Container - positioned below date component */}
                <div className="flex items-center justify-center lg:gap-6 xl:gap-6 2xl:gap-6 w-full">
                  {/* Registration Button */}
                  <Button.Primary
                    type="default"
                    className="w-[35%] xl:h-[50px] 2xl:h-[60px] flex items-center justify-center gap-2 z-40"
                  >
                    <div className="flex items-center gap-2">
                      <Typography.Poppins level={12} className="lg:text-sm xl:text-sm 2xl:text-base">
                        REGISTRATION
                      </Typography.Poppins>
                      <FaArrowRight className="lg:text-sm xl:text-sm 2xl:text-base" />
                    </div>
                  </Button.Primary>

                  {/* Guidebook Button */}
                  <Button.Primary
                    type="default"
                    className="w-[35%] xl:h-[50px] 2xl:h-[60px] flex items-center justify-center gap-2 z-30"
                  >
                    <div className="flex items-center gap-2">
                      <Typography.Poppins level={12} className="lg:text-sm xl:text-sm 2xl:text-base">
                        GUIDEBOOK
                      </Typography.Poppins>
                      <FaBook className="lg:text-sm xl:text-sm 2xl:text-base" />
                    </div>
                  </Button.Primary>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Background Decorations */}
        <img
          src="https://raw.githubusercontent.com/EPW16-ITS/assets/main/homepage-awan.svg"
          className="absolute w-[40%] h-[40%] lg:w-[30%] lg:h-[30%] xl:w-[25%] xl:h-[25%] 2xl:w-[20%] 2xl:h-[20%] bottom-0 right-0 translate-x-[60%] translate-y-[-20%] z-0"
        />
        <img
          src="https://raw.githubusercontent.com/EPW16-ITS/assets/main/homepage-awan.svg"
          className="absolute w-[40%] h-[40%] lg:w-[30%] lg:h-[30%] xl:w-[25%] xl:h-[25%] 2xl:w-[20%] 2xl:h-[20%] bottom-0 left-0 -translate-x-[60%] translate-y-[10%] z-0"
        />
      </section>
    </div>
  );
};

export default Ephyfest;