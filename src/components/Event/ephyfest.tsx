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
    {/* Mobile */}
    <section className="relative w-full h-[900px] overflow-hidden bg-gradient-to-b from-[#39488E] from-10% via-[#39488E] bg-[#1F0C49] to-90%">
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
      <div className="relative w-full h-full mt-[10%] sm:mt-[5%] md:mt-[5%]">

        {/* Teks Ephyfest dan Deskripsi */}
        <div className="relative mx-[10%]">
          <Typography.Homica
            level={5}
            className="relative bg-clip-text text-black text-center text-6xl leading-tight z-10"
            style={{
              WebkitTextStroke: "2px rgb(var(--color-primary-100))"
            }}
          >
            EPHYFEST
          </Typography.Homica>
          <div className="relative w-full h-full">
            <img
            src="https://raw.githubusercontent.com/EPW16-ITS/assets/main/ephyfest-GerigiBiru.svg"
            className="absolute w-[80%] h-[80%] top-0 left-0 -translate-x-[48%] -translate-y-[46%] z-0 opacity-50"
            />
            <Typography.Poppins
              level={10}
              className="relative text-primary-100 text-left text-base bg-fifth-50 p-[5%] border-2 border-primary-25 z-10"
              style={{
              borderRadius: '0 50px 0 50px' // Sudut kanan atas dan kiri bawah rounded
            }}
            >
              EPHYFEST atau Engineering Physics Festival merupakan sebuah acara tahunan yang bertujuan untuk memperkenalkan Departemen Teknik Fisika kepada masyarakat luas, khususnya kepada pelajar, mahasiswa, dan khalayak umum yang tertarik dengan dunia rekayasa dan teknologi. Pada tahun ini, EPHYFEST 16 hadir dengan dua sub-event utama, yaitu Main Event dan Closing Event.
            </Typography.Poppins>
            <img
            src="https://raw.githubusercontent.com/EPW16-ITS/assets/main/homepage-BautMin2.svg"
            className="absolute w-3 h-3 top-0 left-0 translate-x-1 translate-y-1 rotate-45 z-20"/>
            <img
            src="https://raw.githubusercontent.com/EPW16-ITS/assets/main/homepage-BautMin2.svg"
            className="absolute w-3 h-3 bottom-0 right-0 -translate-x-1 -translate-y-1 -rotate-45 z-20"/>
            <img
            src="https://raw.githubusercontent.com/EPW16-ITS/assets/main/homepage-GerigiPink.svg"
            className="absolute w-[80%] h-[80%] bottom-0 right-0 translate-x-[48%] translate-y-[46%] z-0 opacity-50 -rotate-[15deg]"
            />
          </div>  
        </div>

        {/* Main Event */}
        <div className="h-[23%] flex flex-col justify-start m-[5%]">
          <Typography.Poppins
            level={5}
            className="text-black font-bold bg-clip-text text-center leading-tight"
            style={{
              WebkitTextStroke: "2px rgb(var(--color-primary-100))",
            }}
          >
            Main Event
          </Typography.Poppins>

          {/* Slider Container */}
          <div className="relative w-full flex-1">
            <Swiper
              onSwiper={(swiper) => {
                mainEventSwiperRef.current = swiper;
              }}
              slidesPerView={2}
              spaceBetween={10}
              grabCursor={true}
              modules={[]}
              className="w-full h-full"
            >
              {mainEventData.map((item) => (
                <SwiperSlide key={item.id} className="h-full">
                  <div className="h-full bg-fourth-25 border-4 border-fifth-25 flex flex-col relative rounded-lg">
                    <div className="flex-1 p-2">
                      <Typography.Poppins
                        level={1}
                        className="text-third-50 text-base text-center mb-1 whitespace-nowrap border-b border-fourth-300 pb-1"
                      >
                        {item.title}
                      </Typography.Poppins>
                      <Typography.Poppins
                        level={11}
                        className="text-fourth-400 text-2xs text-justify leading-snug"
                      >
                        {item.description}
                      </Typography.Poppins>
                    </div>

                    {/* View More Button */}
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[60%]">
                      <div
                        className="h-[14px] bg-fourth-300 flex items-center justify-center cursor-pointer rounded-full"
                        onClick={() => {
                          console.log("View more clicked for:", item.title);
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
            <img
            src="https://raw.githubusercontent.com/EPW16-ITS/assets/main/homepage-GerigiPink.svg"
            className="absolute w-[40%] h-[40%] bottom-0 left-0 -translate-x-[48%] translate-y-[46%] z-20 -rotate-[15deg]"
            />
          </div>
        </div>

        {/* Timeline Container */}
        <div className="relative w-[90%] h-[7%] m-[5%]">
          <Typography.Poppins
            level={4}
            className="text-black font-bold bg-clip-text text-center text-xl leading-tight"
            style={{
              WebkitTextStroke: "4px rgb(var(--color-primary-100))"
            }}
          >
            TIMELINE
          </Typography.Poppins>
          {/* Timeline Buttons Container */}
          <div className="relative flex items-center w-full h-[60%] justify-center gap-[2%]">
            {/* Registration Button - Smaller */}
            <Button.Primary
              type="default"
              className="w-[25%] h-[60%] flex items-center justify-center gap-2"
            >
              <div className="flex items-center gap-2">
                <Typography.Poppins level={12} className="text-2xs">
                  REGISTRATION
                </Typography.Poppins>
                <FaArrowRight className="text-3xs" />
              </div>
            </Button.Primary>

              {/* Date Component */}
            <div
              className="w-[60%] h-[100%] bg-gradient-to-r from-[#C64C5C] to-[#BA93E5] border-[2px] border-fifth-25 flex items-center justify-center my-auto cursor-text"
              style={{
                borderRadius: '0 15px 0 15px'
              }}
            >
              <FaCalendar className="text-white text-sm mr-2" />
              <Typography.Poppins
                level={10}
                className="text-white text-2xs text-center"
              >
                25 Oktober 2025
              </Typography.Poppins>
            </div>

            {/* Guidebook Button - Smaller */}
            <Button.Primary
              type="default"
              className="w-[25%] h-[60%] flex items-center justify-center gap-2"
            >
              <div className="flex items-center gap-2">
                <Typography.Poppins level={12} className="text-2xs">
                  GUIDEBOOK
                </Typography.Poppins>
                <FaBook className="text-3xs" />
              </div>
            </Button.Primary>
          </div>
        </div>

        {/* Swiper and Lamp */}
        <div className="relative w-[90%] h-[30%] mx-[5%]">
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
              slideShadows: false,
              }}
              loop={true}
              pagination={{
                clickable: true,
              }}
              modules={[EffectCoverflow, Pagination, Navigation]}
              className="w-[85%] sm:w-[55%] h-[60%]"
            >
            <SwiperSlide className="flex items-center justify-center">
              <div className="relative rounded-2xl overflow-hidden w-[315px] h-[200px]">
                <img
                  src="https://raw.githubusercontent.com/EPW16-ITS/assets/main/ephyfest-swiper1.webp"
                  alt="Ephyfest Image 1"
                  className="rounded-2xl object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex items-center justify-center">
              <div className="relative rounded-2xl overflow-hidden w-[315px] h-[200px]">
                <img
                  src="https://raw.githubusercontent.com/EPW16-ITS/assets/main/ephyfest-swiper2.webp"
                  alt="Ephyfest Image 1"
                  className="rounded-2xl object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex items-center justify-center">
              <div className="relative rounded-2xl overflow-hidden w-[315px] h-[200px]">
                <img
                  src="https://raw.githubusercontent.com/EPW16-ITS/assets/main/ephyfest-swiper3.webp"
                  alt="Ephyfest Image 1"
                  className="rounded-2xl object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex items-center justify-center">
              <div className="relative rounded-2xl overflow-hidden w-[315px] h-[200px]">
                <img
                  src="https://raw.githubusercontent.com/EPW16-ITS/assets/main/ephyfest-swiper4.webp"
                  alt="Ephyfest Image 1"
                  className="rounded-2xl object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex items-center justify-center">
              <div className="relative rounded-2xl overflow-hidden w-[315px] h-[200px]">
                <img
                  src="https://raw.githubusercontent.com/EPW16-ITS/assets/main/ephyfest-swiper5.webp"
                  alt="Ephyfest Image 1"
                  className="rounded-2xl object-cover"
                />
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="relative w-[55%] h-[55%] mx-auto -translate-y-[35%]">
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
        className="absolute w-[40%] h-[40%] bottom-0 right-0 translate-x-[60%] translate-y-[-20%] z-0"
      />
      <img
        src="https://raw.githubusercontent.com/EPW16-ITS/assets/main/homepage-awan.svg"
        className="absolute w-[40%] h-[40%] bottom-0 left-0 -translate-x-[60%] translate-y-[10%] z-0"
      />
    </section>
  </div>
  );
};

export default Ephyfest;