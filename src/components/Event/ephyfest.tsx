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
    {/* Tablet+ */}
    <div className="hidden md:block">
      {/* Main Content */}
      <section className="relative w-full md:h-[900px] overflow-hidden bg-gradient-to-b from-[#1F0C49] from-10% bg-[#116B98] to-90%">
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
        <div className="absolute top-0 left-0 w-full flex items-center justify-center pt-8 z-40 translate-y-[60%]">
          <Typography.Homica
            level={4}
            className="text-transparent bg-clip-text bg-gradient-to-r from-[#F85F73] to-[#037CB8] text-center text-6xl leading-tight"
            style={{
              WebkitTextStroke: "2px rgb(var(--color-primary-100))"
            }}
          >
            EPHYFEST
          </Typography.Homica>
        </div>
        <div className="relative left-0 top-0 w-[50%] h-[21%] translate-x-[10%] translate-y-[130%] bg-fifth-50 border-2 border-primary-25 z-30"
          style={{
            borderRadius: '0 50px 0 50px' // Sudut kanan atas dan kiri bawah rounded
          }}
        >
          <div className="w-full h-full p-8 flex flex-col">
            <Typography.Poppins
              level={10}
              className="text-primary-100 text-left mb-6 text-base"
            >
              EPHYFEST atau Engineering Physics Festival merupakan sebuah acara tahunan yang bertujuan untuk memperkenalkan Departemen Teknik Fisika kepada masyarakat luas, khususnya kepada pelajar, mahasiswa, dan khalayak umum yang tertarik dengan dunia rekayasa dan teknologi. Pada tahun ini, EPHYFEST 16 hadir dengan dua sub-event utama, yaitu Main Event dan Closing Event.
            </Typography.Poppins>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full flex z-40 md:translate-x-[21%] translate-x-[25%] translate-y-[1700%]">
            <Typography.Poppins
            level={5}                
            className="text-transparent bg-clip-text bg-gradient-to-r from-[#F85F73] to-[#037CB8] text-center leading-tight"
            style={{
            WebkitTextStroke: "2px rgb(var(--color-primary-100))"
            }}
          >
            Main Event
          </Typography.Poppins>
        </div>
        {/* Tablet Slider with Navigation Arrows */}
        <div className="w-[50%] relative flex items-center translate-x-[10%] translate-y-[340%]">
          {/* Left Arrow */}
          <button
            onClick={() => mainEventSwiperRef.current?.slidePrev()}
            className="absolute left-[-15px] z-10 w-6 h-6 bg-fourth-300 rounded-full flex items-center justify-center text-white hover:bg-fourth-400 transition-colors"
          >
            <FaChevronLeft className="text-xs" />
          </button>

          {/* Tablet+ Slider */}
          <div className="w-full">
            <Swiper
              onSwiper={(swiper) => {
                mainEventSwiperRef.current = swiper;
              }}
              slidesPerView={2}
              spaceBetween={10}
              grabCursor={true}
              modules={[]}
              className="w-full"
            >
              {mainEventData.map((item) => (
                <SwiperSlide key={item.id}>
                  <div
                    className="w-[100%] h-[103px] bg-fourth-25 border-4 border-fifth-25 p-2 flex flex-col relative"
                    style={{
                      borderRadius: '10px'
                    }}
                  >
                    <div className="flex-1">
                      <Typography.Poppins
                        level={1}
                        className="text-third-50 text-xs text-center mb-1 whitespace-nowrap border-b border-fourth-300 pb-1"
                      >
                        {item.title}
                      </Typography.Poppins>
                      <Typography.Poppins
                        level={11}
                        className="text-fourth-400 text-3xs text-justify leading-snug"
                      >
                        {item.description}
                      </Typography.Poppins>
                    </div>
                    {/* View More Button - Positioned at bottom center */}
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
                      <div
                        className="w-[60px] h-[13px] bg-fourth-300 flex items-center justify-center cursor-pointer rounded-full"
                        onClick={() => {
                          console.log('View more clicked for:', item.title);
                        }}
                      >
                        <Typography.Poppins
                          level={11}
                          className="text-white text-2xs whitespace-nowrap"
                        >
                          View more
                        </Typography.Poppins>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => mainEventSwiperRef.current?.slideNext()}
            className="absolute right-[-15px] z-10 w-6 h-6 bg-fourth-300 rounded-full flex items-center justify-center text-white hover:bg-fourth-400 transition-colors"
          >
            <FaChevronRight className="text-xs" />
          </button>
        </div>

        {/* Date Component */}
        <div
          className="w-[20%] h-[30px] bg-[#C64C5C] border-[2px] border-fourth-25 flex items-center justify-center px-2 cursor-text left-0 top-0 translate-x-[100%] translate-y-[1400%]"
          style={{
            borderRadius: '15px 0 15px 0'
          }}
        >
          <FaWhatsapp className="text-white text-xs flex-shrink-0 mr-2" />
          <Typography.Poppins
            level={5}
            className="text-white text-2xs text-center mt-0.5"
          >
            0821213123124 (Nama)
          </Typography.Poppins>
        </div>

        {/* Swiper Container */}
        <div className="absolute right-0 top-0 w-[40%] h-[22%] mb-5 z-40 translate-x-[-5%] translate-y-[125%] border border-green-800">
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
        {/* Timeline Title */}
        <div className="absolute w-[20%] h-[3%] translate-x-[340%] translate-y-[1000%]">
          <Typography.Poppins
            level={4}
            className="text-transparent bg-clip-text bg-gradient-to-r from-[#F85F73] to-[#037CB8] text-center text-xl leading-tight top-0 right-0"
            style={{
              WebkitTextStroke: "4px rgb(var(--color-primary-100))"
            }}
          >
            TIMELINE
          </Typography.Poppins>
        </div>
        {/* Date Component */}
        <div
          className="w-[25%] h-[5%] bg-gradient-to-r from-[#C64C5C] to-[#BA93E5] border-[2px] border-fifth-25 flex items-center justify-center px-2 cursor-text translate-x-[265%] translate-y-[700%]"
          style={{
            borderRadius: '0 15px 0 15px'
          }}
        >
          <FaCalendar className="text-white text-base flex-shrink-0 mr-3" />
          <Typography.Poppins
            level={9}
            className="text-white text-2xs text-center"
          >
            25 Oktober 2025
          </Typography.Poppins>
        </div>
        <div className="w-[40%] flex gap-4 border-4 border-green-950 translate-x-[145%] translate-y-[950%]">
          {/* Registration Button - Smaller */}
          <Button.Primary
            type="default"
            className="w-1/2 h-full flex items-center justify-center gap-2"
          >
            <div className="flex items-center gap-2">
              <Typography.Poppins level={11} className="text-2xs">
                REGISTRATION
              </Typography.Poppins>
              <FaArrowRight className="text-2xs" />
            </div>
          </Button.Primary>

          {/* Guidebook Button - Smaller */}
          <Button.Primary
            type="default"
            className="w-1/2 h-full flex items-center justify-center gap-2"
          >
            <div className="flex items-center gap-2">
              <Typography.Poppins level={11} className="text-2xs">
                GUIDEBOOK
              </Typography.Poppins>
              <FaBook className="text-2xs" />
            </div>
          </Button.Primary>
        </div>


      </section>
    </div>


    {/* Mobile */}
    <div className="block md:hidden">
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
        
        {/* Rectangle Rounded Kubu Kiri*/}
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

            {/* Mobile Slider Section*/}
            <div className="w-full mt-4">
              {/* Main Event Title for Mobile */}
              <Typography.Homica
                level={4}
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#F85F73] to-[#037CB8] text-center xs:text-xl xs:leading-tight mb-3"
                style={{
                  WebkitTextStroke: "1px rgb(var(--color-primary-100))"
                }}
              >
                Main Event
              </Typography.Homica>

              {/* Mobile Slider with Navigation Arrows */}
              <div className="w-full relative flex items-center">
                {/* Left Arrow */}
                <button
                  onClick={() => mainEventSwiperRef.current?.slidePrev()}
                  className="absolute left-[-15px] z-10 w-6 h-6 bg-fourth-300 rounded-full flex items-center justify-center text-white hover:bg-fourth-400 transition-colors"
                >
                  <FaChevronLeft className="text-xs" />
                </button>

                {/* Mobile Slider */}
                <div className="w-full">
                  <Swiper
                    onSwiper={(swiper) => {
                      mainEventSwiperRef.current = swiper;
                    }}
                    slidesPerView={2}
                    spaceBetween={10}
                    grabCursor={true}
                    modules={[]}
                    className="w-full"
                  >
                    {mainEventData.map((item) => (
                      <SwiperSlide key={item.id}>
                        <div
                          className="w-[127px] h-[103px] bg-fourth-25 border-2 border-fifth-25 p-2 flex flex-col relative"
                          style={{
                            borderRadius: '5.54px'
                          }}
                        >
                          <div className="flex-1">
                            <Typography.Poppins
                              level={1}
                              className="text-third-50 text-xs text-center mb-1 whitespace-nowrap border-b border-fourth-300 pb-1"
                            >
                              {item.title}
                            </Typography.Poppins>
                            <Typography.Poppins
                              level={11}
                              className="text-fourth-400 text-3xs text-justify leading-snug"
                            >
                              {item.description}
                            </Typography.Poppins>
                          </div>
                          {/* View More Button - Positioned at bottom center */}
                          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
                            <div
                              className="w-[60px] h-[13px] bg-fourth-300 flex items-center justify-center cursor-pointer rounded-full"
                              onClick={() => {
                                console.log('View more clicked for:', item.title);
                              }}
                            >
                              <Typography.Poppins
                                level={11}
                                className="text-white text-2xs whitespace-nowrap"
                              >
                                View more
                              </Typography.Poppins>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>

                {/* Right Arrow */}
                <button
                  onClick={() => mainEventSwiperRef.current?.slideNext()}
                  className="absolute right-[-15px] z-10 w-6 h-6 bg-fourth-300 rounded-full flex items-center justify-center text-white hover:bg-fourth-400 transition-colors"
                >
                  <FaChevronRight className="text-xs" />
                </button>
              </div>

              {/* Timeline Section for Mobile */}
              <div className="w-full mt-6">
                {/* Timeline Title */}
                <Typography.Homica
                  level={4}
                  className="text-transparent bg-clip-text bg-gradient-to-r from-[#F85F73] to-[#037CB8] text-center xs:text-xl xs:leading-tight mb-4"
                  style={{
                    WebkitTextStroke: "1px rgb(var(--color-primary-100))"
                  }}
                >
                  Timeline
                </Typography.Homica>

                {/* Timeline Controls */}
                <div className="flex items-center justify-center gap-3 mb-4">
                  {/* Registration Button - Smaller */}
                  <Button.Primary
                    type="default"
                    className="flex items-center gap-1 px-2 py-1 h-6"
                  >
                    <Typography.Poppins level={11} className="text-2xs">
                      Registration
                    </Typography.Poppins>
                    <FaArrowRight className="text-2xs" />
                  </Button.Primary>

                  {/* Date Component */}
                  <div
                    className="w-[120px] h-[30px] bg-gradient-to-r from-[#C64C5C] to-[#BA93E5] border-[2px] border-third-50 flex items-center justify-center px-2 cursor-text"
                    style={{
                      borderRadius: '0 15px 0 15px'
                    }}
                  >
                    <FaCalendar className="text-white text-xs flex-shrink-0 mr-2" />
                    <Typography.Poppins
                      level={5}
                      className="text-white text-2xs text-center"
                    >
                      25 Oktober 2025
                    </Typography.Poppins>
                  </div>

                  {/* Guidebook Button - Smaller */}
                  <Button.Primary
                    type="default"
                    className="flex items-center gap-1 px-2 py-1 h-6"
                  >
                    <FaBook className="text-2xs" />
                    <Typography.Poppins level={11} className="text-2xs">
                      Guidebook
                    </Typography.Poppins>
                  </Button.Primary>
                </div>

              </div>
            </div>
          </div>

          <div className="absolute xs:hidden sm:block xs:top-[100%] xs:left-1/2 xs:transform xs:-translate-x-1/2 sm:top-[10%] sm:right-[25%] sm:transform sm:-translate-x-1/2 md:right-[-10%] lg:right-[-10%] xl:right-[-15%] 2xl:right-[-7%] md:top-[25%] xs:w-[280px] xs:h-[180px] sm:w-[280px] sm:h-[180px] md:w-[308px] md:h-[200px] lg:w-[408px] lg:h-[300px] xl:w-[508px] xl:h-[295px] xs:mb-3 sm:mb-3 md:mb-5 z-40">
            <div className="absolute top-0 left-0 w-full flex items-center justify-center xs:pt-4 sm:pt-6 md:pt-8 z-40">
              <Typography.Homica
                level={4}
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#F85F73] to-[#037CB8] text-center xs:text-2xl sm:text-5xl md:text-6xl xs:leading-tight sm:leading-tight md:leading-tight"
                style={{
                  WebkitTextStroke: "2px rgb(var(--color-primary-100))"
                }}
              >
                Main Event
              </Typography.Homica>
            </div>
          </div>
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
      </section>
    </div>
  </div>
  );
};

export default Ephyfest;