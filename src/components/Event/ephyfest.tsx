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

const Ephyfest = () => {
  // Sample data for slider cards
  const mainEventData = [
    {
      id: 1,
      title: "Seminar Nasional",
      description: "Seminar teknologi terdepan dengan pembicara expert"
    },
    {
      id: 2,
      title: "Workshop AI",
      description: "Pelatihan praktis tentang artificial intelligence"
    },
    {
      id: 3,
      title: "Kompetisi Robotik",
      description: "Lomba robot tingkat nasional untuk mahasiswa"
    },
    {
      id: 4,
      title: "Tech Exhibition",
      description: "Pameran teknologi inovatif dari berbagai institusi"
    }
  ];

  return (
    <div>
      {/* Main Content */}
      <section className="relative w-full sm:h-[800px] xs:h-[800px] md:h-[900px] overflow-hidden bg-gradient-to-b from-[#1F0C49] from-20% bg-[#116B98] to-50%">
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
        <div className="absolute top-0 left-0 w-full flex items-center justify-center xs:pt-4 sm:pt-6 md:pt-8 z-40">
          <Typography.Homica
            level={4}
            className="text-transparent bg-clip-text bg-gradient-to-r from-[#F85F73] to-[#037CB8] text-center xs:text-4xl sm:text-5xl md:text-6xl xs:leading-tight sm:leading-tight md:leading-tight"
            style={{
              WebkitTextStroke: "2px rgb(var(--color-primary-100))"
            }}
          >
            EPHYFEST
          </Typography.Homica>
        </div>
        {/* Rectangle Rounded Kubu Kiri - Glass Effect */}
        <div className="lg:left-[25%] sm:relative absolute xs:left-1/2 xs:transform xs:-translate-x-1/2 xs:top-[10%] sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:top-[15%] md:left-[25%] md:top-[20%] xs:w-[317px] xs:h-[129px] sm:w-[560px] sm:h-[280px] md:w-[350px] md:h-[450px] lg:w-[450px] lg:h-[534px] xl:w-[515px] xl:h-[534px] 2xl:w-[615px] 2xl:h-[454px] bg-fifth-50 border-2 border-primary-25 z-30"
          style={{
            borderRadius: '0 50px 0 50px' // Sudut kanan atas dan kiri bawah rounded
          }}>
          <div className="w-full h-full xs:p-3 sm:p-3 md:p-5 flex flex-col">
            <Typography.Poppins
              level={7}
              className="text-primary-100 text-left xs:mb-4 sm:mb-4 md:mb-6 xs:text-2xs/3 sm:text-sm md:text-base lg:text-xl"
            >
              EPHYFEST atau Engineering Physics Festival merupakan sebuah acara tahunan yang bertujuan untuk memperkenalkan Departemen Teknik Fisika kepada masyarakat luas, khususnya kepada pelajar, mahasiswa, dan khalayak umum yang tertarik dengan dunia rekayasa dan teknologi. Pada tahun ini, EPHYFEST 16 hadir dengan dua sub-event utama, yaitu Main Event dan Closing Event.
            </Typography.Poppins>

            {/* Mobile Slider Section - Only visible on xs screens */}
            <div className="xs:block sm:hidden w-full mt-4">
              {/* Main Event Title for Mobile */}
              <Typography.Homica
                level={4}
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#037CB8] to-[#F85F73] text-center xs:text-xl xs:leading-tight mb-3"
                style={{
                  WebkitTextStroke: "1px rgb(var(--color-primary-100))"
                }}
              >
                Main Event
              </Typography.Homica>

              {/* Mobile Slider */}
              <div className="w-full">
                <Swiper
                  slidesPerView={2.2}
                  spaceBetween={10}
                  grabCursor={true}
                  modules={[]}
                  className="w-full"
                >
                  {mainEventData.map((item) => (
                    <SwiperSlide key={item.id}>
                      <div
                        className="w-[127px] h-[103px] bg-fourth-25 border-2 border-fifth-25 p-2 flex flex-col justify-between"
                        style={{
                          borderRadius: '5.54px'
                        }}
                      >
                        <div className="flex-1">
                          <Typography.Poppins
                            level={8}
                            className="text-primary-100 text-xs font-semibold leading-tight mb-1"
                          >
                            {item.title}
                          </Typography.Poppins>
                          <Typography.Poppins
                            level={9}
                            className="text-primary-100 text-2xs leading-tight"
                          >
                            {item.description}
                          </Typography.Poppins>
                        </div>
                        <Button.Primary
                          type="default"
                          className="flex items-center xs:text-2xs xs:px-4 xs:py-6 sm:px-4 sm:py-6 md:px-6 md:py-8"
                        >
                          <a href="#" className="xs:text-xs sm:text-xs md:text-xs">Vier more</a>
                        </Button.Primary>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>

          {/* Desktop Swiper - Hidden on xs screens */}
          <div className="absolute xs:hidden sm:block xs:top-[100%] xs:left-1/2 xs:transform xs:-translate-x-1/2 sm:top-[10%] sm:right-[25%] sm:transform sm:-translate-x-1/2 md:right-[-10%] lg:right-[-10%] xl:right-[-15%] 2xl:right-[-7%] md:top-[25%] xs:w-[280px] xs:h-[180px] sm:w-[280px] sm:h-[180px] md:w-[308px] md:h-[200px] lg:w-[408px] lg:h-[300px] xl:w-[508px] xl:h-[295px] xs:mb-3 sm:mb-3 md:mb-5 z-40">
            <div className="absolute top-0 left-0 w-full flex items-center justify-center xs:pt-4 sm:pt-6 md:pt-8 z-40">
              <Typography.Homica
                level={4}
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#037CB8] to-[#F85F73] text-center xs:text-2xl sm:text-5xl md:text-6xl xs:leading-tight sm:leading-tight md:leading-tight"
                style={{
                  WebkitTextStroke: "2px rgb(var(--color-primary-100))"
                }}
              >
                Main Event
              </Typography.Homica>
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
                  </SwiperSlide>
                  <SwiperSlide className="flex items-center justify-center">
                  </SwiperSlide>
                  <SwiperSlide className="flex items-center justify-center">
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ephyfest;