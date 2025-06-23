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
                  slidesPerView={2}
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
                            level={1}
                            className="text-fourth-300 text-xs text-center mb-1 whitespace-nowrap"
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
                        {/* Updated Button - Now plain rectangle */}
                        <div
                          className="w-[48.97px] h-[13px] bg-fourth-300 flex items-center justify-center cursor-pointer"
                          onClick={() => {
                            // Add your click handler here
                            console.log('View more clicked for:', item.title);
                          }}
                        >
                          <Typography.Poppins
                            level={11}
                            className="text-white text-2xs"
                          >
                            View more
                          </Typography.Poppins>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* Timeline Section for Mobile */}
              <div className="w-full mt-6">
                {/* Timeline Title */}
                <Typography.Homica
                  level={4}
                  className="text-transparent bg-clip-text bg-gradient-to-r from-[#037CB8] to-[#F85F73] text-center xs:text-xl xs:leading-tight mb-4"
                  style={{
                    WebkitTextStroke: "1px rgb(var(--color-primary-100))"
                  }}
                >
                  Timeline
                </Typography.Homica>

                {/* Timeline Controls */}
                <div className="flex items-center justify-center gap-3 mb-4">
                  {/* Registration Button */}
                  <Button.Primary
                    type="default"
                    className="flex items-center gap-2 px-3 py-2"
                  >
                    <Typography.Poppins level={11} className="text-xs">
                      Registration
                    </Typography.Poppins>
                    <FaArrowRight className="text-xs" />
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

                  {/* Guidebook Button */}
                  <Button.Primary
                    type="default"
                    className="flex items-center gap-2 px-3 py-2"
                  >
                    <FaBook className="text-xs" />
                    <Typography.Poppins level={11} className="text-xs">
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
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#037CB8] to-[#F85F73] text-center xs:text-2xl sm:text-5xl md:text-6xl xs:leading-tight sm:leading-tight md:leading-tight"
                style={{
                  WebkitTextStroke: "2px rgb(var(--color-primary-100))"
                }}
              >
                Main Event
              </Typography.Homica>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ephyfest;