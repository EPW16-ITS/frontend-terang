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
            className="text-transparent bg-clip-text bg-gradient-to-r from-[#FBD921] to-[#FEF9DE] text-center xs:text-4xl sm:text-5xl md:text-6xl xs:leading-tight sm:leading-tight md:leading-tight"
            style={{
              WebkitTextStroke: "2px rgb(var(--color-primary-100))"
            }}
          >
            EPHYFEST
          </Typography.Homica>
        </div>
        {/* Rectangle Rounded Kubu Kiri - Glass Effect */}
        <div className="lg:left-[25%] sm:relative absolute xs:left-1/2 xs:transform xs:-translate-x-1/2 xs:top-[15%] sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:top-[15%] md:left-[25%] md:top-[20%] xs:w-[317px] xs:h-[119px] sm:w-[560px] sm:h-[280px] md:w-[350px] md:h-[450px] lg:w-[450px] lg:h-[534px] xl:w-[515px] xl:h-[534px] 2xl:w-[615px] 2xl:h-[454px] bg-fifth-50 border-2 border-primary-25 z-30"
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ephyfest;
